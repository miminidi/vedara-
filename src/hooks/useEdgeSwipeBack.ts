import { useEffect } from "react";
import type { RefObject } from "react";

interface EdgeSwipeOptions {
  /** Whether a back target exists; when false the gesture is inert. */
  enabled: boolean;
  /** Called once the swipe is committed past the threshold. */
  onBack: () => void;
}

const EDGE_ZONE = 28; // px from the left edge where the gesture may start
const COMMIT_RATIO = 0.32; // portion of width to commit the back action
const VERTICAL_GUARD = 1.2; // ignore mostly-vertical drags

/**
 * iOS-style interactive "swipe from the left edge to go back".
 * Drives a translateX on the given element while dragging; on commit it
 * finishes the slide-off and calls onBack, otherwise it springs back.
 */
export function useEdgeSwipeBack(
  ref: RefObject<HTMLElement | null>,
  { enabled, onBack }: EdgeSwipeOptions,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;
    let dx = 0;
    let dragging = false;
    let decided = false; // committed to horizontal tracking

    const width = () => el.clientWidth || window.innerWidth;

    const reset = (animate: boolean) => {
      el.style.transition = animate
        ? "transform 240ms cubic-bezier(0.22, 1, 0.36, 1)"
        : "none";
      el.style.transform = "";
      el.classList.remove("is-swiping");
    };

    const onStart = (event: TouchEvent) => {
      if (!enabled || event.touches.length !== 1) return;
      const touch = event.touches[0];
      if (touch.clientX > EDGE_ZONE) return;
      startX = touch.clientX;
      startY = touch.clientY;
      dx = 0;
      dragging = true;
      decided = false;
      el.style.transition = "none";
    };

    const onMove = (event: TouchEvent) => {
      if (!dragging) return;
      const touch = event.touches[0];
      const moveX = touch.clientX - startX;
      const moveY = touch.clientY - startY;

      if (!decided) {
        if (Math.abs(moveX) < 6 && Math.abs(moveY) < 6) return;
        if (Math.abs(moveY) > Math.abs(moveX) * VERTICAL_GUARD) {
          dragging = false; // vertical scroll wins
          return;
        }
        decided = true;
        el.classList.add("is-swiping");
      }

      dx = Math.max(0, moveX);
      // prevent the page from scrolling horizontally while we drag
      event.preventDefault();
      const eased = Math.min(dx, width());
      el.style.transform = `translateX(${eased}px)`;
    };

    const onEnd = () => {
      if (!dragging) return;
      dragging = false;
      const committed = decided && dx > width() * COMMIT_RATIO;

      if (committed) {
        el.style.transition = "transform 220ms cubic-bezier(0.4, 0, 0.2, 1)";
        el.style.transform = `translateX(${width()}px)`;
        const finish = () => {
          el.removeEventListener("transitionend", finish);
          reset(false);
          onBack();
        };
        el.addEventListener("transitionend", finish);
      } else {
        reset(true);
      }
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", onEnd);
    el.addEventListener("touchcancel", onEnd);

    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
      el.removeEventListener("touchcancel", onEnd);
    };
  }, [ref, enabled, onBack]);
}

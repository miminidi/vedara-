import { useEffect, useMemo, useState } from "react";
import { BottomNav } from "./components/BottomNav";
import { CabinetPage } from "./pages/CabinetPage";
import { ClinicPage } from "./pages/ClinicPage";
import { ClubPage } from "./pages/ClubPage";
import { HomePage } from "./pages/HomePage";
import { UniversityPage } from "./pages/UniversityPage";
import type { AccessState, ScreenId } from "./data/types";
import "./styles/base.css";
import "./styles/app.css";

const ACCESS_KEY = "vedara.access";
const LESSONS_KEY = "vedara.completedLessons";
const PRACTICE_KEY = "vedara.practiceCount";

function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage<T>(key: string, value: T) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage can fail in private mode; MVP keeps in-memory state.
  }
}

function getInitialScreen(): ScreenId {
  const hash = window.location.hash.replace("#", "");
  if (["home", "club", "clinic", "university", "cabinet"].includes(hash)) {
    return hash as ScreenId;
  }
  return "home";
}

export default function App() {
  const [screen, setScreen] = useState<ScreenId>(getInitialScreen);
  const [access, setAccess] = useState<AccessState>(() => readStorage<AccessState>(ACCESS_KEY, "guest"));
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => readStorage<string[]>(LESSONS_KEY, ["intro"]));
  const [practiceCount, setPracticeCount] = useState<number>(() => readStorage<number>(PRACTICE_KEY, 1));

  useEffect(() => {
    const onHashChange = () => setScreen(getInitialScreen());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => writeStorage(ACCESS_KEY, access), [access]);
  useEffect(() => writeStorage(LESSONS_KEY, completedLessons), [completedLessons]);
  useEffect(() => writeStorage(PRACTICE_KEY, practiceCount), [practiceCount]);

  const navigate = (next: ScreenId) => {
    setScreen(next);
    window.history.replaceState(null, "", `#${next}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLesson = (id: string) => {
    setCompletedLessons((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const currentPage = useMemo(() => {
    switch (screen) {
      case "club":
        return <ClubPage access={access} onSetAccess={setAccess} />;
      case "clinic":
        return <ClinicPage onSetAccess={setAccess} />;
      case "university":
        return <UniversityPage onSetAccess={setAccess} />;
      case "cabinet":
        return (
          <CabinetPage
            access={access}
            completedLessons={completedLessons}
            practiceCount={practiceCount}
            onToggleLesson={toggleLesson}
            onAddPractice={() => setPracticeCount((count) => count + 1)}
          />
        );
      case "home":
      default:
        return <HomePage access={access} onNavigate={navigate} onTrial={() => setAccess("trial")} />;
    }
  }, [access, completedLessons, practiceCount, screen]);

  return (
    <div className="app-shell">
      <div className="app-content">{currentPage}</div>
      <BottomNav active={screen} onNavigate={navigate} />
    </div>
  );
}

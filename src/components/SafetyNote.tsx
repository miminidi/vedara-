import { Info } from "lucide-react";

type SafetyNoteProps = {
  training?: boolean;
};

export function SafetyNote({ training = false }: SafetyNoteProps) {
  return (
    <aside className="safety-note">
      <Info size={18} aria-hidden="true" />
      <p>
        {training
          ? "Перед началом тренировок учитывайте своё состояние и при необходимости проконсультируйтесь со специалистом."
          : "Материалы носят информационный характер и не заменяют консультацию специалиста."}
      </p>
    </aside>
  );
}

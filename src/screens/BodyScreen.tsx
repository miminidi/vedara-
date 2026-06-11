import { ArrowLeft, CheckCircle2, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { SafetyNote } from "../components/SafetyNote";
import { SegmentedTabs } from "../components/SegmentedTabs";
import { VisualScene } from "../components/VisualScene";
import { programs } from "../data/programs";
import type { Screen } from "../types";

type BodyScreenProps = {
  fullAccess: boolean;
  completedLessonIds: string[];
  onCompleteLesson: (id: string) => void;
  onNavigate: (screen: Screen) => void;
};

export function BodyScreen({ fullAccess, completedLessonIds, onCompleteLesson, onNavigate }: BodyScreenProps) {
  const [audience, setAudience] = useState<"women" | "men">("women");
  const womenPrograms = programs.filter((program) => program.section === "body" && program.audience === "women");

  return (
    <div className="screen-stack">
      <header className="screen-header">
        <button type="button" className="back-button" onClick={() => onNavigate("home")} aria-label="Назад">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1>body</h1>
          <p>Пространство тренировок</p>
        </div>
      </header>

      <SegmentedTabs
        label="Аудитория"
        options={[
          { id: "women", label: "Девушкам" },
          { id: "men", label: "Мужчинам" },
        ]}
        value={audience}
        onChange={setAudience}
        variant="underline"
      />

      <section className="story-card">
        <div>
          <h2>что такое body?</h2>
          {audience === "women" ? (
            <>
              <p>
                Body — это пространство, где тренировки становятся частью образа жизни: без перегруза,
                резких обещаний и гонки за быстрым результатом.
              </p>
              <p>
                В демо доступны вводные практики, а полный доступ открывает недельные программы и
                дополнительные уроки.
              </p>
            </>
          ) : (
            <p>
              Раздел для мужчин скоро откроется. Сейчас команда готовит программу индивидуальных
              онлайн-тренировок и вводные материалы.
            </p>
          )}
        </div>
        <VisualScene tone="body" compact />
      </section>

      {audience === "women" ? (
        <section className="section-stack">
          <div className="section-title-row">
            <div>
              <span className="eyebrow">уроки</span>
              <h2>Программы Body</h2>
            </div>
          </div>

          {womenPrograms.map((program) => (
            <article className="program-card" key={program.id}>
              <div className="program-card-top">
                <div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </div>
                {program.access === "full" && !fullAccess ? <LockKeyhole size={20} aria-hidden="true" /> : null}
              </div>
              <div className="lesson-list">
                {program.lessons.map((lesson) => {
                  const locked = lesson.access === "full" && !fullAccess;
                  const completed = completedLessonIds.includes(lesson.id);

                  return (
                    <div className={`lesson-row ${locked ? "locked" : ""}`} key={lesson.id}>
                      <div>
                        <span>{lesson.durationMin ? `${lesson.durationMin} мин` : "урок"}</span>
                        <strong>{lesson.title}</strong>
                        <p>{lesson.description}</p>
                      </div>
                      <button
                        type="button"
                        data-testid={`complete-lesson-${lesson.id}`}
                        className={completed ? "round-status-button done" : "round-status-button"}
                        onClick={() => (locked ? onNavigate("product-detail") : onCompleteLesson(lesson.id))}
                        aria-label={locked ? "Открыть доступ" : "Отметить урок"}
                      >
                        {locked ? <LockKeyhole size={18} /> : completed ? <CheckCircle2 size={18} /> : "✓"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </section>
      ) : null}

      <SafetyNote training />
    </div>
  );
}

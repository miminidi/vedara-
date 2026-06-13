import { useState } from "react";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionHead } from "../components/SectionHead";
import { WellnessIcon } from "../components/icons/WellnessIcons";
import { clubArticles, clubContent, clubVideos } from "../data/content";
import type { ClubArticle, ClubVideo } from "../data/types";

type ClubItemKind = "video" | "article";

interface SelectedClubItem {
  kind: ClubItemKind;
  title: string;
  description: string;
}

interface ClinicPageProps {
  completedVideos: string[];
  onToggleVideo: (videoId: string) => void;
}

function getStatus(completed: boolean) {
  return completed ? clubContent.watched : clubContent.available;
}

export function ClinicPage({
  completedVideos,
  onToggleVideo,
}: ClinicPageProps) {
  const [selectedItem, setSelectedItem] = useState<SelectedClubItem | null>(null);

  const openItem = (kind: ClubItemKind, item: ClubVideo | ClubArticle) => {
    setSelectedItem({
      kind,
      title: item.title,
      description: item.description,
    });
  };

  return (
    <main className="screen">
      <ScreenHeader
        kicker={clubContent.header.kicker}
        title={clubContent.header.title}
        subtitle={clubContent.header.subtitle}
      />

      {selectedItem ? (
        <section className="panel club-detail-card">
          <span className="section-kicker">{selectedItem.kind === "video" ? clubContent.videosTitle : clubContent.articlesTitle}</span>
          <h2 className="panel-title">{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          <p>{clubContent.detailText}</p>
          <button className="button button--ghost u-mt-4" type="button" onClick={() => setSelectedItem(null)}>
            {clubContent.closeDetail}
          </button>
        </section>
      ) : null}

      <section className="panel club-welcome-card">
        <h2 className="panel-title">{clubContent.welcomeTitle}</h2>
        <p>{clubContent.welcomeText}</p>
      </section>

      <section className="panel club-method-card">
        <span className="section-kicker">method</span>
        <h2 className="panel-title">{clubContent.methodTitle}</h2>
        <p>{clubContent.methodText}</p>
      </section>

      <SectionHead kicker={clubContent.articlesKicker} title={clubContent.articlesTitle} />
      <div className="grid club-document-list">
        {clubArticles.map((article) => (
          <button
            className="club-document-row"
            key={article.id}
            type="button"
            onClick={() => openItem("article", article)}
          >
            <span className="club-card-icon" aria-hidden="true">
              <WellnessIcon name={article.icon} />
            </span>
            <span className="club-document-row__content">
              <span className="club-document-row__title">{article.title}</span>
              <span className="club-document-row__description">{article.description}</span>
            </span>
            <span className="club-document-row__meta">{article.readingTime}</span>
          </button>
        ))}
      </div>

      <SectionHead kicker={clubContent.videosKicker} title={clubContent.videosTitle} />
      <div className="club-practice-grid">
        {clubVideos.map((video) => {
          const completed = completedVideos.includes(video.id);

          return (
            <button
              className={`club-practice-tile ${completed ? "is-completed" : ""}`}
              key={video.id}
              type="button"
              onClick={() => onToggleVideo(video.id)}
              onDoubleClick={() => openItem("video", video)}
            >
              <span className="club-card-icon" aria-hidden="true">
                <WellnessIcon name={video.icon} />
              </span>
              <span className="club-practice-tile__body">
                <span className="club-practice-tile__title">{video.title}</span>
                <span className="club-practice-tile__description">{video.description}</span>
              </span>
              <span className="club-practice-tile__meta">
                {video.category} · {video.duration}
              </span>
              <span className="club-practice-tile__status">{getStatus(completed)}</span>
            </button>
          );
        })}
      </div>

    </main>
  );
}

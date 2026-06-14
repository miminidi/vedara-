import { useState } from "react";
import { SectionHead } from "../components/SectionHead";
import { WellnessIcon } from "../components/icons/WellnessIcons";
import { assets } from "../data/assets";
import { clubArticles, clubContent, clubVideos } from "../data/content";
import type { ClubArticle, ClubVideo } from "../data/types";

type ClubItemKind = "video" | "article";

interface SelectedClubItem {
  id: string;
  kind: ClubItemKind;
  title: string;
  description: string;
}

interface ClubPageProps {
  completedVideos: string[];
  onToggleVideo: (videoId: string) => void;
}

export function ClubPage({
  completedVideos,
  onToggleVideo,
}: ClubPageProps) {
  const [selectedItem, setSelectedItem] = useState<SelectedClubItem | null>(null);

  const openItem = (kind: ClubItemKind, item: ClubVideo | ClubArticle) => {
    setSelectedItem({
      id: item.id,
      kind,
      title: item.title,
      description: item.description,
    });
  };

  return (
    <main className="screen">
      <section className="club-hero">
        <img className="club-hero__img" src={assets.photos.clubHero} alt="" />
        <div className="club-hero__overlay">
          <span className="club-hero__kicker">{clubContent.header.kicker}</span>
          <h1 className="club-hero__title">{clubContent.header.title}</h1>
          <p className="club-hero__subtitle">{clubContent.header.subtitle}</p>
        </div>
      </section>

      {selectedItem ? (
        <section className="panel club-detail-card glass-surface">
          <span className="section-kicker">{selectedItem.kind === "video" ? clubContent.videosTitle : clubContent.articlesTitle}</span>
          <h2 className="panel-title">{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          <p>{clubContent.detailText}</p>
          <div className="button-row u-mt-4">
            {selectedItem.kind === "video" ? (
              <button
                className={`button ${completedVideos.includes(selectedItem.id) ? "button--secondary" : "button--primary"}`}
                type="button"
                onClick={() => onToggleVideo(selectedItem.id)}
              >
                {completedVideos.includes(selectedItem.id) ? clubContent.watched : clubContent.markWatched}
              </button>
            ) : null}
            <button className="button button--ghost" type="button" onClick={() => setSelectedItem(null)}>
              {clubContent.closeDetail}
            </button>
          </div>
        </section>
      ) : null}

      <section className="panel club-welcome-card">
        <h2 className="panel-title">{clubContent.welcomeTitle}</h2>
        <p>{clubContent.welcomeText}</p>
      </section>

      <section className="panel club-method-card">
        <span className="section-kicker">метод</span>
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
      <div className="club-tile-grid">
        {clubVideos.map((video) => {
          const completed = completedVideos.includes(video.id);

          return (
            <button
              className={`club-tile ${completed ? "is-completed" : ""}`}
              key={video.id}
              type="button"
              onClick={() => openItem("video", video)}
            >
              <span className="club-tile__media" aria-hidden="true">
                <span className="club-tile__icon">
                  <WellnessIcon name={video.icon} />
                </span>
                {completed ? <span className="club-tile__badge">{clubContent.watched}</span> : null}
              </span>
              <span className="club-tile__body">
                <span className="club-tile__title">{video.title}</span>
                <span className="club-tile__meta">{video.category} · {video.duration}</span>
              </span>
            </button>
          );
        })}
      </div>

    </main>
  );
}

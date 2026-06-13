import { useState } from "react";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionHead } from "../components/SectionHead";
import { WellnessIcon } from "../components/icons/WellnessIcons";
import { chatContent, clubArticles, clubContent, clubVideos } from "../data/content";
import type { AccessState, ClubArticle, ClubVideo, ScreenId } from "../data/types";

type ClubItemKind = "video" | "article";

interface SelectedClubItem {
  kind: ClubItemKind;
  title: string;
  description: string;
}

interface ClinicPageProps {
  access: AccessState;
  completedArticles: string[];
  completedVideos: string[];
  onNavigate: (screen: ScreenId) => void;
  onToggleArticle: (articleId: string) => void;
  onToggleVideo: (videoId: string) => void;
}

function getAccessStatus(access: AccessState) {
  if (access === "trial") {
    return clubContent.access.trial;
  }

  if (access === "clubMonthly" || access === "clubAnnual") {
    return clubContent.access.premium;
  }

  return clubContent.access.guestStatus;
}

function getStatus(completed: boolean) {
  return completed ? clubContent.watched : clubContent.available;
}

function getArticleStatus(completed: boolean) {
  return completed ? clubContent.read : clubContent.available;
}

export function ClinicPage({
  access,
  completedArticles,
  completedVideos,
  onNavigate,
  onToggleArticle,
  onToggleVideo,
}: ClinicPageProps) {
  const [selectedItem, setSelectedItem] = useState<SelectedClubItem | null>(null);
  const accessStatus = getAccessStatus(access);

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

      <div className="club-status-line">{accessStatus}</div>

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
        {clubArticles.map((article) => {
          const completed = completedArticles.includes(article.id);

          return (
            <article className={`panel club-document-card ${completed ? "is-completed" : ""}`} key={article.id}>
              <div className="club-card-icon" aria-hidden="true">
                <WellnessIcon name={article.icon} />
              </div>
              <div className="program-card__top">
                <div>
                  <h2 className="panel-title">{article.title}</h2>
                  <span className="club-card-meta">{article.readingTime}</span>
                </div>
                <span className="badge">{getArticleStatus(completed)}</span>
              </div>
              <p>{article.description}</p>
              <div className="button-row u-mt-4">
                <button
                  className="button button--primary"
                  type="button"
                  onClick={() => openItem("article", article)}
                >
                  {clubContent.open}
                </button>
                <button className="button button--secondary" type="button" onClick={() => onToggleArticle(article.id)}>
                  {completed ? clubContent.read : clubContent.markRead}
                </button>
              </div>
            </article>
          );
        })}
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

      <SectionHead kicker={clubContent.communityKicker} title={clubContent.communityTitle} />
      <section className="panel club-community-card">
        <p>{clubContent.communityText}</p>
        <ul className="check-list u-mt-4">
          <li>{chatContent.liveTitle}</li>
          <li>{chatContent.weekTitle}</li>
          <li>{chatContent.curatorTitle}</li>
        </ul>
        <button className="button button--primary u-mt-4" type="button" onClick={() => onNavigate("chat")}>
          {clubContent.chatCta}
        </button>
      </section>
    </main>
  );
}

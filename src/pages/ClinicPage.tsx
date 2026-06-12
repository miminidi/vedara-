import { useState } from "react";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionHead } from "../components/SectionHead";
import { clubArticles, clubContent, clubVideos } from "../data/content";
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
  onSetAccess: (access: AccessState) => void;
  onToggleArticle: (articleId: string) => void;
  onToggleVideo: (videoId: string) => void;
}

function isClubAccessActive(access: AccessState) {
  return access === "trial" || access === "clubMonthly" || access === "clubAnnual";
}

function isPremiumAccessActive(access: AccessState) {
  return access === "clubMonthly" || access === "clubAnnual";
}

function getAccessCopy(access: AccessState) {
  if (access === "trial") {
    return {
      title: clubContent.access.trial,
      text: clubContent.access.trialText,
    };
  }

  if (isPremiumAccessActive(access)) {
    return {
      title: clubContent.access.premium,
      text: clubContent.access.premiumText,
    };
  }

  return {
    title: clubContent.access.guest,
    text: clubContent.access.guestText,
  };
}

function getStatus(isLocked: boolean, completed: boolean) {
  if (isLocked) {
    return clubContent.locked;
  }
  return completed ? clubContent.watched : clubContent.available;
}

function getArticleStatus(isLocked: boolean, completed: boolean) {
  if (isLocked) {
    return clubContent.locked;
  }
  return completed ? clubContent.read : clubContent.available;
}

export function ClinicPage({
  access,
  completedArticles,
  completedVideos,
  onNavigate,
  onSetAccess,
  onToggleArticle,
  onToggleVideo,
}: ClinicPageProps) {
  const [selectedItem, setSelectedItem] = useState<SelectedClubItem | null>(null);
  const hasClubAccess = isClubAccessActive(access);
  const accessCopy = getAccessCopy(access);

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

      <section className="premium-card club-access-card">
        <div>
          <span className="section-kicker">{accessCopy.title}</span>
          <h3>{clubContent.header.title}</h3>
          <p>{accessCopy.text}</p>
          <div className="button-row u-mt-4">
            <button className="button button--secondary" type="button" onClick={() => onSetAccess("trial")}>
              {clubContent.trialCta}
            </button>
            <button className="button button--primary" type="button" onClick={() => onSetAccess("clubMonthly")}>
              {clubContent.tariff.cta}
            </button>
          </div>
        </div>
      </section>

      <section className="panel club-tariff-card">
        <span className="section-kicker">{clubContent.tariff.kicker}</span>
        <h2 className="panel-title">{clubContent.tariff.title}</h2>
        <p>{clubContent.tariff.text}</p>
      </section>

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

      <SectionHead kicker={clubContent.videosKicker} title={clubContent.videosTitle} />
      <div className="grid club-library-grid">
        {clubVideos.map((video) => {
          const completed = completedVideos.includes(video.id);
          const locked = !hasClubAccess;

          return (
            <article className="panel club-library-card" key={video.id}>
              <div className="program-card__top">
                <h2 className="panel-title">{video.title}</h2>
                <span className="badge">{getStatus(locked, completed)}</span>
              </div>
              <p>{video.description}</p>
              <span className="club-card-meta">{video.duration}</span>
              <div className="button-row u-mt-4">
                <button
                  className="button button--primary"
                  type="button"
                  onClick={() => (locked ? onSetAccess("trial") : openItem("video", video))}
                >
                  {locked ? clubContent.openAccess : clubContent.open}
                </button>
                {!locked ? (
                  <button className="button button--secondary" type="button" onClick={() => onToggleVideo(video.id)}>
                    {completed ? clubContent.watched : clubContent.markWatched}
                  </button>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>

      <SectionHead kicker={clubContent.articlesKicker} title={clubContent.articlesTitle} />
      <div className="grid club-library-grid">
        {clubArticles.map((article) => {
          const completed = completedArticles.includes(article.id);
          const locked = !hasClubAccess;

          return (
            <article className="panel club-library-card" key={article.id}>
              <div className="program-card__top">
                <h2 className="panel-title">{article.title}</h2>
                <span className="badge">{getArticleStatus(locked, completed)}</span>
              </div>
              <p>{article.description}</p>
              <span className="club-card-meta">{article.readingTime}</span>
              <div className="button-row u-mt-4">
                <button
                  className="button button--primary"
                  type="button"
                  onClick={() => (locked ? onSetAccess("trial") : openItem("article", article))}
                >
                  {locked ? clubContent.openAccess : clubContent.open}
                </button>
                {!locked ? (
                  <button className="button button--secondary" type="button" onClick={() => onToggleArticle(article.id)}>
                    {completed ? clubContent.read : clubContent.markRead}
                  </button>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>

      <SectionHead kicker={clubContent.communityKicker} title={clubContent.communityTitle} />
      <section className="panel club-community-card">
        <p>{clubContent.communityText}</p>
        <button className="button button--primary u-mt-4" type="button" onClick={() => onNavigate("chat")}>
          {clubContent.chatCta}
        </button>
      </section>
    </main>
  );
}

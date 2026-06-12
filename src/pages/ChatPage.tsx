import { useState } from "react";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionHead } from "../components/SectionHead";
import { chatContent } from "../data/content";
import type { ScreenId } from "../data/types";

interface ChatPageProps {
  onNavigate: (screen: ScreenId) => void;
}

export function ChatPage({ onNavigate }: ChatPageProps) {
  const [questionSaved, setQuestionSaved] = useState(false);

  return (
    <main className="screen">
      <ScreenHeader
        kicker={chatContent.header.kicker}
        title={chatContent.header.title}
        subtitle={chatContent.header.subtitle}
      />

      <section className="premium-card chat-hero-card">
        <span className="section-kicker">{chatContent.status}</span>
        <h3>{chatContent.introTitle}</h3>
        <p>{chatContent.introText}</p>
      </section>

      <section className="panel chat-live-card">
        <span className="section-kicker">{chatContent.liveKicker}</span>
        <h2 className="panel-title">{chatContent.liveTitle}</h2>
        <p>{chatContent.liveText}</p>
      </section>

      <div className="grid grid--two">
        <section className="panel chat-info-card">
          <h2 className="panel-title">{chatContent.weekTitle}</h2>
          <p>{chatContent.weekText}</p>
        </section>

        <section className="panel chat-info-card">
          <h2 className="panel-title">{chatContent.curatorTitle}</h2>
          <p>{chatContent.curatorText}</p>
          <button className="button button--ghost u-mt-4" type="button" onClick={() => setQuestionSaved(true)}>
            {questionSaved ? chatContent.questionSaved : chatContent.questionCta}
          </button>
        </section>
      </div>

      <SectionHead kicker="updates" title={chatContent.announcementsTitle} />
      <section className="panel chat-info-card">
        <ul className="check-list">
          {chatContent.announcements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button className="button button--secondary u-mt-4" type="button" onClick={() => onNavigate("club")}>
          {chatContent.clubCta}
        </button>
      </section>
    </main>
  );
}

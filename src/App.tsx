import { useEffect, useMemo, useState } from "react";
import { BottomNav } from "./components/BottomNav";
import { CabinetPage } from "./pages/CabinetPage";
import { ChatPage } from "./pages/ChatPage";
import { ClinicPage } from "./pages/ClinicPage";
import { ClubPage } from "./pages/ClubPage";
import { HomePage } from "./pages/HomePage";
import { UniversityPage } from "./pages/UniversityPage";
import { leadTitles, userProfile } from "./data/content";
import type { AccessState, DailyCheckIn, Lead, LeadType, ScreenId } from "./data/types";
import "./styles/base.css";
import "./styles/app.css";

const ACCESS_KEY = "vedara.access";
const CHECK_INS_KEY = "vedara.checkIns";
const HABITS_KEY = "vedara.completedHabits";
const MATERIALS_KEY = "vedara.completedMaterials";
const PROTOCOL_TASKS_KEY = "vedara.completedProtocolTasks";
const CLUB_VIDEOS_KEY = "vedara.completedClubVideos";
const CLUB_ARTICLES_KEY = "vedara.completedClubArticles";
const LEADS_KEY = "vedara.leads";

const screenIds: ScreenId[] = ["home", "practices", "tracker", "club", "chat", "profile"];

const legacyScreenAliases: Record<string, ScreenId> = {
  today: "home",
  home: "home",
  main: "home",
  protocols: "practices",
  materials: "practices",
  practices: "practices",
  clinic: "practices",
  university: "practices",
  club: "club",
  chat: "chat",
  community: "chat",
  cabinet: "profile",
};

type CheckInPatch = Partial<Pick<DailyCheckIn, "energy" | "mood" | "sleep" | "stress" | "note">>;

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

function getDateKey() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getInitialScreen(): ScreenId {
  const hash = window.location.hash.replace("#", "");
  if (screenIds.includes(hash as ScreenId)) {
    return hash as ScreenId;
  }
  return legacyScreenAliases[hash] ?? "home";
}

function clampMetric(value: number) {
  return Math.max(1, Math.min(10, Math.round(value)));
}

function buildCheckIn(date: string, previous?: DailyCheckIn, patch: CheckInPatch = {}): DailyCheckIn {
  const next: DailyCheckIn = {
    ...previous,
    date,
    savedAt: new Date().toISOString(),
  };

  if (patch.energy !== undefined) {
    next.energy = clampMetric(patch.energy);
  }
  if (patch.mood !== undefined) {
    next.mood = clampMetric(patch.mood);
  }
  if (patch.sleep !== undefined) {
    next.sleep = clampMetric(patch.sleep);
  }
  if (patch.stress !== undefined) {
    next.stress = clampMetric(patch.stress);
  }
  if (patch.note !== undefined) {
    next.note = patch.note;
  }

  return next;
}

function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

export default function App() {
  const todayKey = getDateKey();
  const [screen, setScreen] = useState<ScreenId>(getInitialScreen);
  const [access, setAccess] = useState<AccessState>(() => readStorage<AccessState>(ACCESS_KEY, "guest"));
  const [checkIns, setCheckIns] = useState<Record<string, DailyCheckIn>>(() =>
    readStorage<Record<string, DailyCheckIn>>(CHECK_INS_KEY, {}),
  );
  const [completedHabitKeys, setCompletedHabitKeys] = useState<string[]>(() => readStorage<string[]>(HABITS_KEY, []));
  const [completedMaterials, setCompletedMaterials] = useState<string[]>(() => readStorage<string[]>(MATERIALS_KEY, []));
  const [completedProtocolTasks, setCompletedProtocolTasks] = useState<string[]>(() =>
    readStorage<string[]>(PROTOCOL_TASKS_KEY, []),
  );
  const [completedClubVideos, setCompletedClubVideos] = useState<string[]>(() =>
    readStorage<string[]>(CLUB_VIDEOS_KEY, []),
  );
  const [completedClubArticles, setCompletedClubArticles] = useState<string[]>(() =>
    readStorage<string[]>(CLUB_ARTICLES_KEY, []),
  );
  const [leads, setLeads] = useState<Lead[]>(() => readStorage<Lead[]>(LEADS_KEY, []));

  useEffect(() => {
    const onHashChange = () => setScreen(getInitialScreen());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => writeStorage(ACCESS_KEY, access), [access]);
  useEffect(() => writeStorage(CHECK_INS_KEY, checkIns), [checkIns]);
  useEffect(() => writeStorage(HABITS_KEY, completedHabitKeys), [completedHabitKeys]);
  useEffect(() => writeStorage(MATERIALS_KEY, completedMaterials), [completedMaterials]);
  useEffect(() => writeStorage(PROTOCOL_TASKS_KEY, completedProtocolTasks), [completedProtocolTasks]);
  useEffect(() => writeStorage(CLUB_VIDEOS_KEY, completedClubVideos), [completedClubVideos]);
  useEffect(() => writeStorage(CLUB_ARTICLES_KEY, completedClubArticles), [completedClubArticles]);
  useEffect(() => writeStorage(LEADS_KEY, leads), [leads]);

  const todayCheckIn = checkIns[todayKey];

  const completedHabits = useMemo(() => {
    const prefix = `${todayKey}:`;
    return completedHabitKeys.filter((key) => key.startsWith(prefix)).map((key) => key.replace(prefix, ""));
  }, [completedHabitKeys, todayKey]);

  const navigate = (next: ScreenId) => {
    setScreen(next);
    window.history.replaceState(null, "", `#${next}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const saveCheckInForDate = (date: string, patch: CheckInPatch = {}) => {
    setCheckIns((current) => ({
      ...current,
      [date]: buildCheckIn(date, current[date], patch),
    }));
  };

  const toggleHabitForDate = (date: string, habitId: string) => {
    setCompletedHabitKeys((current) => toggleValue(current, `${date}:${habitId}`));
  };

  const toggleMaterial = (materialId: string) => {
    setCompletedMaterials((current) => toggleValue(current, materialId));
  };

  const toggleProtocolTask = (taskId: string) => {
    setCompletedProtocolTasks((current) => toggleValue(current, taskId));
  };

  const toggleClubVideo = (videoId: string) => {
    setCompletedClubVideos((current) => toggleValue(current, videoId));
  };

  const toggleClubArticle = (articleId: string) => {
    setCompletedClubArticles((current) => toggleValue(current, articleId));
  };

  const createLead = (type: LeadType) => {
    const accessByLead: Record<LeadType, AccessState> = {
      clinic: "clinicLead",
      university: "universityLead",
    };

    setAccess(accessByLead[type]);
    setLeads((current) => {
      if (current.some((lead) => lead.type === type)) {
        return current;
      }

      return [
        ...current,
        {
          id: `${type}-${Date.now()}`,
          type,
          title: leadTitles[type],
          createdAt: new Date().toISOString(),
          status: "Mock-заявка сохранена локально",
        },
      ];
    });
  };

  const resetDemo = () => {
    setAccess("guest");
    setCheckIns({});
    setCompletedHabitKeys([]);
    setCompletedMaterials([]);
    setCompletedProtocolTasks([]);
    setCompletedClubVideos([]);
    setCompletedClubArticles([]);
    setLeads([]);
  };

  const currentPage = useMemo(() => {
    switch (screen) {
      case "tracker":
        return (
          <ClubPage
            checkIns={checkIns}
            completedHabitKeys={completedHabitKeys}
            onNavigate={navigate}
            onSaveCheckIn={saveCheckInForDate}
            onToggleHabit={toggleHabitForDate}
          />
        );
      case "club":
        return (
          <ClinicPage
            access={access}
            completedArticles={completedClubArticles}
            completedVideos={completedClubVideos}
            onNavigate={navigate}
            onSetAccess={setAccess}
            onToggleArticle={toggleClubArticle}
            onToggleVideo={toggleClubVideo}
          />
        );
      case "chat":
        return <ChatPage onNavigate={navigate} />;
      case "practices":
        return (
          <UniversityPage
            completedMaterials={completedMaterials}
            completedProtocolTasks={completedProtocolTasks}
            onNavigate={navigate}
            onSetAccess={setAccess}
            onToggleMaterial={toggleMaterial}
            onToggleProtocolTask={toggleProtocolTask}
          />
        );
      case "profile":
        return (
          <CabinetPage
            access={access}
            checkIn={todayCheckIn}
            completedHabits={completedHabits}
            completedMaterials={completedMaterials}
            completedProtocolTasks={completedProtocolTasks}
            leads={leads}
            profile={userProfile}
            onCreateLead={createLead}
            onNavigate={navigate}
            onResetDemo={resetDemo}
            onSetAccess={setAccess}
          />
        );
      case "home":
      default:
        return (
          <HomePage
            access={access}
            onNavigate={navigate}
            onSetAccess={setAccess}
          />
        );
    }
  }, [
    access,
    checkIns,
    completedClubArticles,
    completedClubVideos,
    completedHabitKeys,
    completedHabits,
    completedMaterials,
    completedProtocolTasks,
    leads,
    screen,
    todayCheckIn,
  ]);

  return (
    <div className="app-shell">
      <div className="app-content">{currentPage}</div>
      <BottomNav active={screen} onNavigate={navigate} />
    </div>
  );
}

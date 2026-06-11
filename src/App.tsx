import { useEffect, useMemo, useState } from "react";
import { BottomNav } from "./components/BottomNav";
import { CabinetPage } from "./pages/CabinetPage";
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
const LEADS_KEY = "vedara.leads";

const screenIds: ScreenId[] = ["today", "tracker", "protocols", "materials", "profile"];

const legacyScreenAliases: Record<string, ScreenId> = {
  home: "today",
  club: "tracker",
  clinic: "protocols",
  university: "materials",
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
  return new Date().toISOString().slice(0, 10);
}

function getInitialScreen(): ScreenId {
  const hash = window.location.hash.replace("#", "");
  if (screenIds.includes(hash as ScreenId)) {
    return hash as ScreenId;
  }
  return legacyScreenAliases[hash] ?? "today";
}

function clampMetric(value: number) {
  return Math.max(1, Math.min(10, Math.round(value)));
}

function buildCheckIn(date: string, previous?: DailyCheckIn, patch: CheckInPatch = {}): DailyCheckIn {
  return {
    date,
    energy: clampMetric(patch.energy ?? previous?.energy ?? 6),
    mood: clampMetric(patch.mood ?? previous?.mood ?? 7),
    sleep: clampMetric(patch.sleep ?? previous?.sleep ?? 6),
    stress: clampMetric(patch.stress ?? previous?.stress ?? 4),
    note: patch.note ?? previous?.note,
    savedAt: new Date().toISOString(),
  };
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

  const saveCheckIn = (patch: CheckInPatch = {}) => {
    setCheckIns((current) => ({
      ...current,
      [todayKey]: buildCheckIn(todayKey, current[todayKey], patch),
    }));
  };

  const toggleHabit = (habitId: string) => {
    setCompletedHabitKeys((current) => toggleValue(current, `${todayKey}:${habitId}`));
  };

  const toggleMaterial = (materialId: string) => {
    setCompletedMaterials((current) => toggleValue(current, materialId));
  };

  const toggleProtocolTask = (taskId: string) => {
    setCompletedProtocolTasks((current) => toggleValue(current, taskId));
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
    setLeads([]);
  };

  const currentPage = useMemo(() => {
    switch (screen) {
      case "tracker":
        return (
          <ClubPage
            checkIn={todayCheckIn}
            completedHabits={completedHabits}
            onNavigate={navigate}
            onSaveCheckIn={saveCheckIn}
            onToggleHabit={toggleHabit}
          />
        );
      case "protocols":
        return (
          <ClinicPage
            access={access}
            completedProtocolTasks={completedProtocolTasks}
            onCreateLead={createLead}
            onNavigate={navigate}
            onSetAccess={setAccess}
            onToggleProtocolTask={toggleProtocolTask}
          />
        );
      case "materials":
        return (
          <UniversityPage
            completedMaterials={completedMaterials}
            onCreateLead={createLead}
            onNavigate={navigate}
            onSetAccess={setAccess}
            onToggleMaterial={toggleMaterial}
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
      case "today":
      default:
        return (
          <HomePage
            access={access}
            checkIn={todayCheckIn}
            completedHabits={completedHabits}
            completedProtocolTasks={completedProtocolTasks}
            profile={userProfile}
            onNavigate={navigate}
            onSaveCheckIn={saveCheckIn}
            onToggleHabit={toggleHabit}
            onToggleProtocolTask={toggleProtocolTask}
          />
        );
    }
  }, [access, completedHabits, completedMaterials, completedProtocolTasks, leads, screen, todayCheckIn]);

  return (
    <div className="app-shell">
      <div className="app-content">{currentPage}</div>
      <BottomNav active={screen} onNavigate={navigate} />
    </div>
  );
}

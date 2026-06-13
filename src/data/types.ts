export type ScreenId = "home" | "practices" | "tracker" | "club" | "chat" | "profile";

export type AccessState = "guest" | "trial" | "clubMonthly" | "clubAnnual" | "clinicLead" | "universityLead";

export type LeadType = "clinic" | "university" | "diagnostics" | "individualProtocol";

export interface NavItem {
  id: ScreenId;
  label: string;
  icon: ScreenId;
  center?: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  subtitle: string;
  focus: string;
  goals: string[];
}

export interface TeamMember {
  id: string;
  role: string;
  description: string;
  initials: string;
  photoUrl?: string;
}

export interface DailyCheckIn {
  date: string;
  energy?: number;
  mood?: number;
  sleep?: number;
  stress?: number;
  note?: string;
  savedAt: string;
}

export type CheckMetricId = "energy" | "mood" | "sleep" | "stress";

export interface CheckMetric {
  id: CheckMetricId;
  label: string;
  helper: string;
  minLabel: string;
  maxLabel: string;
}

export interface Habit {
  id: string;
  title: string;
  description: string;
  category: "water" | "nutrition" | "movement" | "practice" | "sleep";
  target: string;
}

export interface DayPlanItem {
  id: string;
  title: string;
  subtitle: string;
  habitId?: string;
  protocolTaskId?: string;
  action: "habit" | "practice" | "protocol" | "material";
}

export type ProtocolTaskKind = "habit" | "practice" | "lesson" | "reflection";

export interface ProtocolTask {
  id: string;
  title: string;
  description: string;
  kind: ProtocolTaskKind;
  minutes?: number;
}

export interface ProtocolDay {
  day: number;
  title: string;
  summary: string;
  tasks: ProtocolTask[];
}

export interface Protocol {
  id: string;
  title: string;
  subtitle: string;
  durationDays: number;
  statusLabel: string;
  access: "free" | "premium";
  currentDay: number;
  days: ProtocolDay[];
}

export type MaterialKind = "lesson" | "practice" | "article" | "meditation" | "club" | "university";

export interface Material {
  id: string;
  title: string;
  description: string;
  kind: MaterialKind;
  duration: string;
  access: "free" | "premium" | "university";
  tag: string;
}

export interface ClubVideo {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  icon: "water" | "nutrition" | "movement" | "practice" | "sleep" | "material" | "protocol" | "clinic";
  access: "club" | "premium";
  completed: boolean;
}

export interface ClubArticle {
  id: string;
  title: string;
  description: string;
  readingTime: string;
  icon: "water" | "nutrition" | "movement" | "practice" | "sleep" | "material" | "protocol" | "clinic";
  access: "club" | "premium";
  completed: boolean;
}

export interface ProductCta {
  id: string;
  title: string;
  text: string;
  cta: string;
  target?: ScreenId;
  leadType?: LeadType;
}

export type VedaraProductAccessType = "open" | "premium" | "purchase" | "lead";

export interface VedaraProduct {
  id: string;
  title: string;
  description: string;
  status: string;
  accessType: VedaraProductAccessType;
  actionLabel: string;
  route?: ScreenId;
  leadType?: LeadType;
  intentId?: string;
  icon: "water" | "nutrition" | "movement" | "practice" | "sleep" | "material" | "protocol" | "clinic";
}

export interface Lead {
  id: string;
  type: LeadType;
  title: string;
  createdAt: string;
  status: string;
}

export interface EcosystemDirection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  screen: ScreenId;
  index: string;
}

export interface Program {
  id: string;
  title: string;
  eyebrow?: string;
  description: string;
  tag: string;
  access?: "free" | "club" | "clinic" | "university" | "premium";
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  access: "free" | "club" | "university" | "premium";
}

export type ScreenId = "home" | "club" | "clinic" | "university" | "cabinet";

export type AccessState = "guest" | "trial" | "clubMonthly" | "clubAnnual" | "clinicLead" | "universityLead";

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
  access?: "free" | "club" | "clinic" | "university";
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  access: "free" | "club" | "university";
}

export interface NavItem {
  id: ScreenId;
  label: string;
  icon: string;
}

import type { PhotoKey } from "./data/assets";

export type AccessLevel = "demo" | "full" | "locked";

export type ProductFilter = "all" | "mine" | "completed";

export type Screen =
  | "home"
  | "body"
  | "nutrition"
  | "useful"
  | "purchases"
  | "product-detail"
  | "profile"
  | "services";

export type CoverTone = "body" | "nutrition" | "rehab" | "wellness" | "service" | "mind";

export type Product = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  priceRub: number;
  accessLevel: AccessLevel;
  coverTone: CoverTone;
  imageKey?: PhotoKey;
  included: string[];
};

export type Program = {
  id: string;
  section: "body" | "nutrition" | "rehabilitation";
  audience: "women" | "men" | "all";
  title: string;
  description: string;
  access: "demo" | "full";
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  durationMin?: number;
  description: string;
  access: "demo" | "full";
};

export type Material = {
  id: string;
  title: string;
  category: "nutrition" | "body" | "mind" | "balance";
  description: string;
  access: "demo" | "full";
  readTimeMin?: number;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  priceLabel: string;
  access: "demo" | "full";
};

export type AccessState = {
  onboardingCompleted: boolean;
  demoAccess: boolean;
  fullAccess: boolean;
  completedLessonIds: string[];
  completedMaterialIds: string[];
  serviceRequests: string[];
  activeProductFilter: ProductFilter;
};

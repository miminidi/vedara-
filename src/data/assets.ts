import vedaraLogo from "../assets/brand/vedara-logo.svg";
import vedaraTreeMark from "../assets/brand/vedara-tree-mark.png";
import heroYoga from "../assets/photos/hero-yoga.png";
import bodyPeople from "../assets/photos/body-people.png";
import nutritionBowl from "../assets/photos/nutrition-bowl.png";
import wellnessClub from "../assets/photos/wellness-club.png";

export const assets = {
  logoFull: vedaraLogo,
  logoMark: vedaraTreeMark,
  photos: {
    heroYoga,
    bodyPeople,
    nutritionBowl,
    wellnessClub,
  },
} as const;

export const appAssets = {
  brand: {
    logoPrimary: vedaraLogo,
    logoMark: vedaraLogo,
    logoFallback: vedaraLogo,
    markFallback: vedaraLogo,
  },
  photos: assets.photos,
} as const;

export type PhotoKey = keyof typeof assets.photos;

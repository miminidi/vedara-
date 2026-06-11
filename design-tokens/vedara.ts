export const vedaraTokens = {
  color: {
    purple950: "#241336",
    graphite900: "#2B2B2F",
    gold500: "#C6A75E",
    pearl100: "#EDEAF4",
    pearl50: "#FAF8FC",
    white: "#FFFFFF",
    lavender50: "#F8F3FF",
    lavender100: "#EEE4FB",
    lavender200: "#DBC8F3",
    lilac100: "#E9DDF4",
    lilac200: "#D6BFE9",
  },
  font: {
    display: `"Prata", Georgia, "Times New Roman", serif`,
    ui: `Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
  },
  radius: {
    lg: "28px",
    xl: "36px",
    pill: "999px",
  },
  layout: {
    mobileMaxWidth: "480px",
    bottomNavHeight: "88px",
  },
} as const;

export const vedaraSemantic = {
  pageBg: "var(--color-page-bg)",
  surface: "var(--color-surface)",
  heading: "var(--color-text-heading)",
  text: "var(--color-text-primary)",
  muted: "var(--color-text-muted)",
  primary: "var(--color-accent-primary)",
  gold: "var(--color-accent-gold)",
} as const;

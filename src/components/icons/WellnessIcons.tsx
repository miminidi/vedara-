import type { ReactNode } from "react";

export type WellnessIconName =
  | "water"
  | "nutrition"
  | "movement"
  | "practice"
  | "sleep"
  | "material"
  | "protocol"
  | "clinic";

type IconProps = {
  size?: number;
  strokeWidth?: number;
};

function IconFrame({ children, size = 21, strokeWidth = 1.8 }: IconProps & { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      className="svg-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function WaterIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 4.5c2.8 3.2 5 6.1 5 9.1a5 5 0 0 1-10 0c0-3 2.2-5.9 5-9.1Z" />
      <path d="M9.5 14.2c.4 1.3 1.2 2 2.5 2.2" />
    </IconFrame>
  );
}

function NutritionIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M5.5 12.5c4.9.1 8.4-2.2 10.3-6.8 2.2 4.2 1.4 8.2-1.8 10.3-2.7 1.8-6.2.9-8.5-3.5Z" />
      <path d="M5.5 12.5c2.6.8 5.2.7 7.7-.3" />
      <path d="M6 19c2.1-2.9 4.4-5.2 7.2-6.8" />
    </IconFrame>
  );
}

function MovementIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M5 15.5c2.1-3.2 4.2-3.2 6.3 0 2.1 3.1 4.7 2.9 7.7-.5" />
      <path d="M7.2 8.8a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
      <path d="M10.2 10.2 13 7.8l2.5 2.6" />
    </IconFrame>
  );
}

function PracticeIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 18.5c-2.9-1.5-4.4-3.4-4.4-5.7S9.1 8.5 12 6c2.9 2.5 4.4 4.8 4.4 6.8s-1.5 4.2-4.4 5.7Z" />
      <path d="M7.4 17.2c-2.1-.4-3.3-1.4-3.7-3.1-.4-1.7.2-3.4 1.8-5 1.2.8 2 1.8 2.4 3" />
      <path d="M16.6 17.2c2.1-.4 3.3-1.4 3.7-3.1.4-1.7-.2-3.4-1.8-5-1.2.8-2 1.8-2.4 3" />
    </IconFrame>
  );
}

function SleepIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M18.8 15.8A7.2 7.2 0 0 1 8.2 5.2 7.7 7.7 0 1 0 18.8 15.8Z" />
      <path d="M15.5 5.5h3" />
      <path d="M17 4v3" />
    </IconFrame>
  );
}

function MaterialIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M6.5 4.8h8.2A2.8 2.8 0 0 1 17.5 7.6v11.6H8.2a2.7 2.7 0 0 1-2.7-2.7V5.8a1 1 0 0 1 1-1Z" />
      <path d="M8.5 15.8h9" />
      <path d="M9 8.5h5.2" />
      <path d="M9 11.5h4" />
    </IconFrame>
  );
}

function ProtocolIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M7 4.5h10A1.5 1.5 0 0 1 18.5 6v12A1.5 1.5 0 0 1 17 19.5H7A1.5 1.5 0 0 1 5.5 18V6A1.5 1.5 0 0 1 7 4.5Z" />
      <path d="m8.8 9.2.9.9 1.7-1.9" />
      <path d="M13.2 9.2h2.4" />
      <path d="m8.8 14.4.9.9 1.7-1.9" />
      <path d="M13.2 14.4h2.4" />
    </IconFrame>
  );
}

function ClinicIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 4.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z" />
      <path d="M12 8.8v6.4" />
      <path d="M8.8 12h6.4" />
    </IconFrame>
  );
}

const iconMap = {
  water: WaterIcon,
  nutrition: NutritionIcon,
  movement: MovementIcon,
  practice: PracticeIcon,
  sleep: SleepIcon,
  material: MaterialIcon,
  protocol: ProtocolIcon,
  clinic: ClinicIcon,
} satisfies Record<WellnessIconName, (props: IconProps) => ReactNode>;

export function WellnessIcon({ name, ...props }: IconProps & { name: WellnessIconName }) {
  const Icon = iconMap[name];
  return <Icon {...props} />;
}

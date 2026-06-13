import type { ReactElement, ReactNode } from "react";
import type { ScreenId } from "../../data/types";

type IconProps = {
  size?: number;
  strokeWidth?: number;
};

function IconFrame({ children, size = 22, strokeWidth = 1.3 }: IconProps & { children: ReactNode }) {
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

// Главная — дом с арочной дверью
export function TodayIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M3.5 11.5 12 4.8l8.5 6.7" />
      <path d="M6.5 11V20h4v-4.5a1.5 1.5 0 0 0 3 0V20H17V11" />
    </IconFrame>
  );
}

// Уроки — трёхлепестковый лотос
export function PracticesIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 19.5V14" />
      <path d="M12 14c0-3.5-2.5-6.5-5.5-8 .5 3.5 2 6.5 5.5 8Z" />
      <path d="M12 14c0-3.5 2.5-6.5 5.5-8-.5 3.5-2 6.5-5.5 8Z" />
      <path d="M12 14c-1.5-3-1.5-7 0-9 1.5 2 1.5 6 0 9Z" />
    </IconFrame>
  );
}

// Трекер — кольцо с пульсовой линией
export function TrackerIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <circle cx="12" cy="12" r="7.8" />
      <path d="M7.5 12h2l1.5-3.5 3 7 1.5-3.5H17" />
    </IconFrame>
  );
}

// Клуб — корона с тремя пиками и камнями
export function ClubNavIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M5 17h14" />
      <path d="M5 17 7.5 9 12 13.5 16.5 9 19 17" />
      <path d="M12 13.5V7.5" />
      <circle cx="12" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="9" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="9" r="0.8" fill="currentColor" stroke="none" />
    </IconFrame>
  );
}

// Чат — речевой пузырь с тремя точками
export function ChatNavIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M4 12C4 8.1 7.6 5 12 5S20 8.1 20 12C20 15.9 16.4 19 12 19a9 9 0 0 1-3.5-.7L4.5 21l.5-4A6.5 6.5 0 0 1 4 12Z" />
      <circle cx="9.5" cy="12" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </IconFrame>
  );
}

// Профиль — силуэт персоны
export function ProfileIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 21c.7-3.8 3.4-6 7-6s6.3 2.2 7 6" />
    </IconFrame>
  );
}

// Иконка кабинета в шапке (круг + персона)
export function CabinetCircleIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="8.7" r="2.5" />
      <path d="M7.8 17.1c.7-2.3 2.2-3.5 4.2-3.5s3.5 1.2 4.2 3.5" />
    </IconFrame>
  );
}

export function CrownIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M5 17h14" />
      <path d="M5 17 7.5 9 12 13.5 16.5 9 19 17" />
      <path d="M12 13.5V7.5" />
      <circle cx="12" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
    </IconFrame>
  );
}

export function ProtocolsIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M7 4.5h10A1.5 1.5 0 0 1 18.5 6v12A1.5 1.5 0 0 1 17 19.5H7A1.5 1.5 0 0 1 5.5 18V6A1.5 1.5 0 0 1 7 4.5Z" />
      <path d="M9 8.2h6" />
      <path d="M9 12h6" />
      <path d="M9 15.8h3.5" />
    </IconFrame>
  );
}

export function MaterialsIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M6.5 4.8h8.2A2.8 2.8 0 0 1 17.5 7.6v11.6H8.2a2.7 2.7 0 0 1-2.7-2.7V5.8a1 1 0 0 1 1-1Z" />
      <path d="M8.5 15.8h9" />
      <path d="M9 8.5h5.2" />
      <path d="M9 11.5h4" />
    </IconFrame>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </IconFrame>
  );
}

export const HomeIcon = TodayIcon;
export const ClubIcon = ClubNavIcon;
export const ClinicIcon = ProtocolsIcon;
export const UniversityIcon = MaterialsIcon;
export const CabinetIcon = ProfileIcon;

const navIconMap = {
  home: TodayIcon,
  practices: PracticesIcon,
  tracker: TrackerIcon,
  club: ClubNavIcon,
  chat: ChatNavIcon,
  profile: ProfileIcon,
} satisfies Record<ScreenId, (props: IconProps) => ReactElement>;

export function NavIcon({ screen, ...props }: IconProps & { screen: ScreenId }) {
  const Icon = navIconMap[screen];
  return <Icon {...props} />;
}

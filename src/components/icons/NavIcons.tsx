import type { ReactElement, ReactNode } from "react";
import type { ScreenId } from "../../data/types";

type IconProps = {
  size?: number;
  strokeWidth?: number;
};

function IconFrame({ children, size = 22, strokeWidth = 1.8 }: IconProps & { children: ReactNode }) {
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

export function TodayIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M3.5 11.2 12 4l8.5 7.2" />
      <path d="M5.5 10.5V20h5v-5.5h3V20h5v-9.5" />
    </IconFrame>
  );
}

export function PracticesIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 20c4.5-2.2 7-5.5 7-10.2V5.5h-4.2C13.2 5.5 12 4.7 12 4s-1.2 1.5-2.8 1.5H5v4.3C5 14.5 7.5 17.8 12 20Z" />
      <path d="M9 12.5c1.5.1 3.4-.5 5-2.7" />
      <path d="M12.5 9.8c.7 1.9.5 3.8-.5 5.7" />
    </IconFrame>
  );
}

export function TrackerIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M4.5 13.2h3l2-5.2 3.3 8 2.2-5h4.5" />
      <path d="M20 12a8 8 0 1 1-2.35-5.66" />
    </IconFrame>
  );
}

export function ClubNavIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M8 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M16 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M4.5 19c.5-3 1.9-4.8 3.5-4.8s3 1.8 3.5 4.8" />
      <path d="M12.5 19c.5-3 1.9-4.8 3.5-4.8s3 1.8 3.5 4.8" />
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

export function ProfileIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M5 20c.9-3.4 3.3-5.2 7-5.2s6.1 1.8 7 5.2" />
    </IconFrame>
  );
}

export function CabinetCircleIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 3.8a8.2 8.2 0 1 0 0 16.4 8.2 8.2 0 0 0 0-16.4Z" />
      <path d="M12 11.2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M7.8 17.1c.7-2.3 2.2-3.5 4.2-3.5s3.5 1.2 4.2 3.5" />
    </IconFrame>
  );
}

export function CrownIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="m4.8 8.2 3.6 3.5L12 6l3.6 5.7 3.6-3.5-1.1 8.8H5.9L4.8 8.2Z" />
      <path d="M7 20h10" />
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
  chat: ClubNavIcon,
  profile: ProfileIcon,
} satisfies Record<ScreenId, (props: IconProps) => ReactElement>;

export function NavIcon({ screen, ...props }: IconProps & { screen: ScreenId }) {
  const Icon = navIconMap[screen];
  return <Icon {...props} />;
}

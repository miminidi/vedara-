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
      <path d="M12 4.5v2.3" />
      <path d="M12 17.2v2.3" />
      <path d="M4.5 12h2.3" />
      <path d="M17.2 12h2.3" />
      <path d="M7 7l1.6 1.6" />
      <path d="m15.4 15.4 1.6 1.6" />
      <path d="m17 7-1.6 1.6" />
      <path d="m8.6 15.4-1.6 1.6" />
      <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </IconFrame>
  );
}

export function TrackerIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M5 19V5" />
      <path d="M19 19H5" />
      <path d="M8 15.5v-3" />
      <path d="M12 15.5v-7" />
      <path d="M16 15.5v-5" />
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
export const ClubIcon = TrackerIcon;
export const ClinicIcon = ProtocolsIcon;
export const UniversityIcon = MaterialsIcon;
export const CabinetIcon = ProfileIcon;

const navIconMap = {
  today: TodayIcon,
  tracker: TrackerIcon,
  protocols: ProtocolsIcon,
  materials: MaterialsIcon,
  profile: ProfileIcon,
} satisfies Record<ScreenId, (props: IconProps) => ReactElement>;

export function NavIcon({ screen, ...props }: IconProps & { screen: ScreenId }) {
  const Icon = navIconMap[screen];
  return <Icon {...props} />;
}

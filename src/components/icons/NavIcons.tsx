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

export function HomeIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M4.5 11.5 12 5l7.5 6.5" />
      <path d="M6.5 10.5v8h11v-8" />
      <path d="M10 18.5v-5h4v5" />
    </IconFrame>
  );
}

export function ClubIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 3.8 19.2 12 12 20.2 4.8 12 12 3.8Z" />
      <path d="M8.7 12h6.6" />
      <path d="M12 8.7v6.6" />
    </IconFrame>
  );
}

export function ClinicIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 4.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z" />
      <path d="M12 8.5v7" />
      <path d="M8.5 12h7" />
    </IconFrame>
  );
}

export function UniversityIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="m4 9 8-4 8 4-8 4-8-4Z" />
      <path d="M7 11v4.2c1.3 1.2 3 1.8 5 1.8s3.7-.6 5-1.8V11" />
      <path d="M20 9v5" />
    </IconFrame>
  );
}

export function CabinetIcon(props: IconProps) {
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

const navIconMap = {
  home: HomeIcon,
  club: ClubIcon,
  clinic: ClinicIcon,
  university: UniversityIcon,
  cabinet: CabinetIcon,
} satisfies Record<ScreenId, (props: IconProps) => ReactElement>;

export function NavIcon({ screen, ...props }: IconProps & { screen: ScreenId }) {
  const Icon = navIconMap[screen];
  return <Icon {...props} />;
}

export type IconName =
  | "arrow-left"
  | "arrow-right"
  | "arrow-down"
  | "calendar"
  | "chart"
  | "chevron-down"
  | "close"
  | "building"
  | "book"
  | "dumbbell"
  | "document"
  | "expand"
  | "graduation"
  | "home"
  | "image"
  | "lightbulb"
  | "link"
  | "location"
  | "menu"
  | "sun"
  | "moon"
  | "message"
  | "paperclip"
  | "person"
  | "puzzle"
  | "runner"
  | "search"
  | "settings"
  | "sprout"
  | "tag"
  | "users";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 20, className = "" }: IconProps) {
  const common = {
    className: `icon ${className}`.trim(),
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "sun":
      return <svg {...common}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" /></svg>;
    case "moon":
      return <svg {...common}><path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z" /></svg>;
    case "arrow-left":
      return <svg {...common}><path d="M19 12H5" /><path d="m11 18-6-6 6-6" /></svg>;
    case "arrow-right":
      return <svg {...common}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>;
    case "arrow-down":
      return <svg {...common}><path d="M12 5v14" /><path d="m18 13-6 6-6-6" /></svg>;
    case "calendar":
      return <svg {...common}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" /></svg>;
    case "chart":
      return <svg {...common}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>;
    case "chevron-down":
      return <svg {...common}><path d="m6 9 6 6 6-6" /></svg>;
    case "close":
      return <svg {...common}><path d="M18 6 6 18M6 6l12 12" /></svg>;
    case "building":
      return <svg {...common}><path d="M3 21h18M5 21V5l7-3 7 3v16M9 21v-4h6v4M8 8h1M12 8h1M16 8h1M8 12h1M12 12h1M16 12h1" /></svg>;
    case "book":
      return <svg {...common}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z" /><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M8 7h8M8 11h8" /></svg>;
    case "dumbbell":
      return <svg {...common}><path d="M6 8v8M3 10v4M9 6v12M15 6v12M18 8v8M21 10v4M9 12h6" /></svg>;
    case "document":
      return <svg {...common}><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v5h5M9 12h6M9 16h6" /></svg>;
    case "expand":
      return <svg {...common}><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" /><path d="m3 8 6-6M21 8l-6-6M3 16l6 6M21 16l-6 6" /></svg>;
    case "graduation":
      return <svg {...common}><path d="m3 9 9-5 9 5-9 5-9-5Z" /><path d="M7 12v5c2.8 2.2 7.2 2.2 10 0v-5M21 10v5" /></svg>;
    case "home":
      return <svg {...common}><path d="m3 11 9-8 9 8" /><path d="M5 10v11h14V10M9 21v-6h6v6" /></svg>;
    case "image":
      return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.5" /><path d="m4 17 5-5 4 4 2-2 5 5" /></svg>;
    case "lightbulb":
      return <svg {...common}><path d="M9 18h6M10 22h4M8.2 14.4A7 7 0 1 1 15.8 14c-1 .8-1.3 1.6-1.3 2.5h-5c0-.8-.3-1.4-1.3-2.1Z" /></svg>;
    case "link":
      return <svg {...common}><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2" /><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2" /></svg>;
    case "location":
      return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "menu":
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "message":
      return <svg {...common}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /><path d="M8 10h.01M12 10h.01M16 10h.01" /></svg>;
    case "paperclip":
      return <svg {...common}><path d="m21.4 11.6-8.9 8.9a6 6 0 0 1-8.5-8.5l9.6-9.6a4 4 0 0 1 5.7 5.7l-9.6 9.6a2 2 0 1 1-2.8-2.8l8.9-8.9" /></svg>;
    case "person":
      return <svg {...common}><circle cx="12" cy="8" r="3.5" /><path d="M5 21a7 7 0 0 1 14 0" /></svg>;
    case "puzzle":
      return <svg {...common}><path d="M8.5 3H3v5.5a2.5 2.5 0 1 1 0 5V21h7.5a2.5 2.5 0 1 0 5 0H21v-7.5a2.5 2.5 0 1 0 0-5V3h-5.5a2.5 2.5 0 1 1-5 0Z" /></svg>;
    case "runner":
      return <svg {...common}><circle cx="14" cy="4" r="2" /><path d="m12 8 3 3 3-1M12 8l-2 5 4 2 2 5M10 13l-5 3M14 16l-4 5" /></svg>;
    case "search":
      return <svg {...common}><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>;
    case "settings":
      return <svg {...common}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></svg>;
    case "sprout":
      return <svg {...common}><path d="M12 22V10" /><path d="M12 13C8 13 5 10.5 5 6c4 0 7 2.5 7 7ZM12 16c0-4.5 3-7 7-7 0 4.5-3 7-7 7Z" /><path d="M8 22h8" /></svg>;
    case "tag":
      return <svg {...common}><path d="M20 13 13 20l-9-9V4h7l9 9Z" /><circle cx="8.5" cy="8.5" r="1.5" /></svg>;
    case "users":
      return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></svg>;
  }
}

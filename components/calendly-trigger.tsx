"use client";

import type { MouseEvent, ReactNode } from "react";

type CalendlyTriggerProps = {
  children: ReactNode;
  className?: string;
  url?: string;
};

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const DEFAULT_CALENDLY_URL = "https://calendly.com/immanuel-o-onum/30min";

export function CalendlyTrigger({
  children,
  className,
  url = DEFAULT_CALENDLY_URL,
}: CalendlyTriggerProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <a href={url} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
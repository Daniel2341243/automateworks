"use client";

import { trackCalendlyOpen } from "@/lib/analytics";

const CALENDLY_URL = "https://calendly.com/endlichunendlichkeit/new-meeting";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  children: React.ReactNode;
  className?: string;
  source?: string;
}

export default function CalendlyButton({
  children,
  className,
  source = "unknown",
}: CalendlyButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackCalendlyOpen(source);

    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback: open in new tab if script hasn't loaded
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

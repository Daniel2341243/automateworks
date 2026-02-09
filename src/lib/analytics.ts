type EventName =
  | "cta_click"
  | "calendly_open"
  | "case_study_view"
  | "faq_toggle"
  | "scroll_depth"
  | "video_play"
  | "pricing_view"
  | "section_view";

interface AnalyticsEvent {
  event: EventName;
  category: string;
  label?: string;
  value?: number;
}

export function trackEvent({ event, category, label, value }: AnalyticsEvent) {
  // Google Analytics 4 - replace with actual gtag when ready
  if (typeof window !== "undefined" && "gtag" in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag("event", event, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Console logging for development/demo
  console.log(`[Analytics] ${event}`, { category, label, value });
}

export function trackCTAClick(ctaName: string, location: string) {
  trackEvent({
    event: "cta_click",
    category: "conversion",
    label: `${ctaName} - ${location}`,
  });
}

export function trackCalendlyOpen(source: string) {
  trackEvent({
    event: "calendly_open",
    category: "conversion",
    label: source,
  });
}

export function trackSectionView(sectionName: string) {
  trackEvent({
    event: "section_view",
    category: "engagement",
    label: sectionName,
  });
}

export function trackScrollDepth(percentage: number) {
  trackEvent({
    event: "scroll_depth",
    category: "engagement",
    value: percentage,
  });
}

export function trackFAQToggle(question: string) {
  trackEvent({
    event: "faq_toggle",
    category: "engagement",
    label: question,
  });
}

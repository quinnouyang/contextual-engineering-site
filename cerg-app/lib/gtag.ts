export const GA_TRACKING_ID = "G-E0DZ1M3H2X";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
  if (typeof window !== "undefined")
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

export const trackPageView = (url) => {
    window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: url,
    });
};

export const trackEvent = (action, category, label, value) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
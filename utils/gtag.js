export const pageview = (url) => {
  window.gtag("config", "G-9506GFX7X1", {
    page_path: url,
  });
};

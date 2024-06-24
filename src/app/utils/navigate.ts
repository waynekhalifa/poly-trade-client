export const navigateInternal = (url: string): void => {
  if (typeof window !== "undefined") {
    window.open(url, "_self");
  }
};

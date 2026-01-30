// This optional code is used to register a service worker.

export function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(reg => {
          console.log("Service Worker registered:", reg);
        })
        .catch(err => {
          console.log("Service Worker registration failed:", err);
        });
    });
  }
}

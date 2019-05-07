const VERSION = 0.2;

window.addEventListener("load", () => {
  registerServiceWorker();
  log(`Version ${VERSION} of scripts.js has been loaded.`);
});

const log = newText => {
  const logEl = document.querySelector(".log");
  const currentText = logEl.value;
  const lineBreaks = `${String.fromCharCode(13, 10)}${String.fromCharCode(13, 10)}`;
  logEl.value = `${currentText ? `${currentText}${lineBreaks}` : ""}${newText}`;
}

const registerServiceWorker = () => {
  if (!("serviceWorker" in navigator)) { return false }

  navigator.serviceWorker
    .register("/service-worker.js")
    .then(registration => {
      console.log("ServiceWorker registration successful with scope: ", registration.scope);
    }, function(err) {
      console.log("ServiceWorker registration failed: ", err);
    });
}

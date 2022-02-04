//* restore settings
document.addEventListener("DOMContentLoaded", () =>
  // suitable for Firefox and Chrome
  chrome.storage.local.get(["links"], (result) => {
    if (
      result.links === "icons" ||
      (result.links !== "icons" && result.links !== "underlined")
    ) {
      document.querySelector("#iconsRadioBtn").checked = true;
    } else if (result.links === "underlined") {
      document.querySelector("#underlinedRadioBtn").checked = true;
    }
  })
);

//* add listener
document
  .querySelector("#iconsRadioBtn")
  .addEventListener("change", saveOptions);
document
  .querySelector("#underlinedRadioBtn")
  .addEventListener("change", saveOptions);

//* save settings
function saveOptions(e) {
  e.preventDefault();
  document.querySelector("#info").style.display = "block";
  const settingsObject = {
    links: document.querySelector("#iconsRadioBtn").checked
      ? "icons"
      : "underlined",
  };
  // suitable for Firefox and Chrome
  chrome.storage.local.set(settingsObject);
}

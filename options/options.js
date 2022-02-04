// restore settings
document.addEventListener("DOMContentLoaded", () => browser.storage.local.get("links").then((result) => {
    // success
    if (result.links === "icons" || (result.links !== "icons" && result.links !== "underlined")) {
        document.querySelector("#iconsRadioBtn").checked = true
    } else if (result.links === "underlined") {
        document.querySelector("#underlinedRadioBtn").checked = true
    }
}, (error) => {
    // error
    console.log(`Error: ${error}`)
}))

// add listener
document.querySelector("#iconsRadioBtn").addEventListener("change", saveOptions)
document.querySelector("#underlinedRadioBtn").addEventListener("change", saveOptions)

// save settings
function saveOptions(e) {
    e.preventDefault()
    document.querySelector("#info").style.display = "block"
    const settingsObject = {
        links: document.querySelector("#iconsRadioBtn").checked ? "icons" : "underlined",
    }
    browser.storage.local.set(settingsObject)
}
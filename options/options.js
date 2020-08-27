function saveOptions(e) {
    e.preventDefault()
    document.querySelector("#info").style.display = "block"
    browser.storage.local.set({
        links: document.querySelector("#icons").checked ? "icons" : "links",
    })
}

function restoreOptions() {
    function setCurrentChoice(result) {
        if (
            result.links === "icons" ||
            (result.links !== "icons" && result.links !== "links")
        ) {
            document.querySelector("#icons").checked = true
        } else if (result.links === "links") {
            document.querySelector("#links").checked = true
        }
    }

    function onError(error) {
        console.log(`Error: ${error}`)
    }

    let getting = browser.storage.local.get("links")
    getting.then(setCurrentChoice, onError)
}

document.addEventListener("DOMContentLoaded", restoreOptions)
document.querySelector("form").addEventListener("submit", saveOptions)

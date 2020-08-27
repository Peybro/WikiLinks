function saveOptions(e) {
    e.preventDefault()
    document.querySelector("#info").style.display = "block"
    browser.storage.sync.set({
        links: document.querySelector("#icons").checked ? "icons" : "links",
    })
}

function restoreOptions() {
    function setCurrentChoice(result) {
        if (result.links === "icons") {
            document.querySelector("#icons").checked = true
        } else if (result.links === "links") {
            document.querySelector("#links").checked = true
        } else {
            document.querySelector("#icons").checked = false
            document.querySelector("#links").checked = false
        }
    }

    function onError(error) {
        console.log(`Error: ${error}`)
    }

    let getting = browser.storage.sync.get("links")
    getting.then(setCurrentChoice, onError)
}

document.addEventListener("DOMContentLoaded", restoreOptions)
document.querySelector("form").addEventListener("submit", saveOptions)

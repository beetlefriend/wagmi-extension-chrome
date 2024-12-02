document.getElementById("togglePhoton").addEventListener("click", () => {
    chrome.storage.local.get(["hidePhoton"], (result) => {
        const shouldHide = !result.hidePhoton;
        chrome.storage.local.set({ hidePhoton: shouldHide });
        document.getElementById("photonText").textContent = shouldHide
            ? "Unhide Photon-Sol"
            : "Hide Photon-Sol";
    });
});

document.getElementById("toggleBullx").addEventListener("click", () => {
    chrome.storage.local.get(["hideBullx"], (result) => {
        const shouldHide = !result.hideBullx;
        chrome.storage.local.set({ hideBullx: shouldHide });
        document.getElementById("bullxText").textContent = shouldHide
            ? "Unhide Bullx"
            : "Hide Bullx";
    });
});

console.log("Popup script loaded.");

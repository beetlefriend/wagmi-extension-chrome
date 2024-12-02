// Function to toggle visibility of the "Sell" tab on Photon
function togglePhotonSell(hide) {
    const photonSellTab = document.querySelector(
        ".p-show__widget__tab[data-tab-id='sell']"
    );

    if (photonSellTab) {
        photonSellTab.style.display = hide ? "none" : "flex";
        console.log("Photon 'Sell' tab visibility toggled:", hide);
    } else {
        console.warn("Photon 'Sell' tab not found.");
    }
}

// Function to toggle visibility of the "Sell" label on Bullx
function toggleBullxSell(hide) {
    const bullxSellLabel = Array.from(
        document.querySelectorAll("label.ant-segmented-item")
    ).find((label) => {
        const title = label.querySelector(".ant-segmented-item-label");
        return title && title.getAttribute("title") === "Sell";
    });

    if (bullxSellLabel) {
        bullxSellLabel.style.display = hide ? "none" : "inline-block";
        console.log("Bullx 'Sell' label visibility toggled:", hide);
    } else {
        console.warn("Bullx 'Sell' label not found.");
    }
}

// Main function to apply settings for both platforms
function applySettings() {
    chrome.storage.local.get(["hidePhoton", "hideBullx"], (settings) => {
        const currentDomain = window.location.hostname;

        if (currentDomain.includes("photon-sol")) {
            togglePhotonSell(settings.hidePhoton || false);
        }

        if (currentDomain.includes("bullx")) {
            toggleBullxSell(settings.hideBullx || false);
        }
    });
}

// Listen for changes in the settings and update dynamically
chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "local") {
        if ("hidePhoton" in changes) {
            togglePhotonSell(changes.hidePhoton.newValue);
        }
        if ("hideBullx" in changes) {
            toggleBullxSell(changes.hideBullx.newValue);
        }
    }
});

// Apply settings on page load
applySettings();
console.log("Content script loaded and settings applied.");

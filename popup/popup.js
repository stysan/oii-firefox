document.addEventListener('DOMContentLoaded', () => {
    const additionalPlaytimeHours = document.getElementById("additionalPlaytimeHours");

    // Listen for when the user inputs a value
    additionalPlaytimeHours.addEventListener('change', async () => {
        // Only run the code when the user has entered a value
        if (additionalPlaytimeHours.value) {
            const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
            const response = await chrome.tabs.sendMessage(tab.id, { additionalPlaytimeHours: additionalPlaytimeHours.value });
            console.log("sending playtime...");
            console.log(response);
        }
    });
});
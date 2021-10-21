chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" });
    });
});

chrome.runtime.onMessage.addListener(
    function (request) {
        if (request.message === "open_new_tab") {
            chrome.tabs.create({ "url": request.url });
        }
    }
);
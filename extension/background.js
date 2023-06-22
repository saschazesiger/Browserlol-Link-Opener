chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      id: "openInBrowserLol",
      title: "Open in Browser.lol",
      contexts: ["link"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "openInBrowserLol" && info.linkUrl) {
      var newUrl = "https://browser.lol/create?url=" + encodeURIComponent(info.linkUrl);
      chrome.tabs.create({ url: newUrl });
    }
  });
  
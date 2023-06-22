window.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var url = "https://browser.lol/create?url=" + encodeURIComponent(tabs[0].url);
      chrome.tabs.create({ url: url });
    });
  });
  
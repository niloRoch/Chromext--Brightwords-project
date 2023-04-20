chrome.runtime.onInstalled.addListener(function() {
    chrome.browserAction.onClicked.addListener(function() {
      chrome.tabs.executeScript(null, {file: "content.js"});
      chrome.tabs.insertCSS(null, {file: "style.css"});
    });
  });
  
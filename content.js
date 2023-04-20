$(document).ready(function() {
    $("body").append("<div id='my-extension'></div>");
    $("#my-extension").load(chrome.extension.getURL("popup.html"));
  });
  
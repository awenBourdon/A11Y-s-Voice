chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message && message.action === "sendText") {
    console.log("Texte selectionné :", message.text);
    sendResponse;
  }
});




  
  

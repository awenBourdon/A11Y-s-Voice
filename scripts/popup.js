const pauseButton = document.querySelector("#pauseButton");
const stopButton = document.querySelector("#stopButton");
const playButton = document.querySelector("#playButton");




pauseButton.onclick = function () {
    chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
        console.log(tabs);
        chrome.tabs.sendMessage(tabs[0].id,{command: "pause"}).then(response => {
            console.log(response);
        });
    });
  };

  playButton.onclick = function () {
    chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
        console.log(tabs);
        chrome.tabs.sendMessage(tabs[0].id,{command: "resume"}).then(response => {
            console.log(response);
        });
    });
  };

  stopButton.onclick = function () {
    chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
        console.log(tabs);
        chrome.tabs.sendMessage(tabs[0].id,{command: "cancel"}).then(response => {
            console.log(response);
        });
    });
  };
  
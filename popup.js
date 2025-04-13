document.getElementById("logBtn").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length === 0) {
        console.log("No active tab found.");
        return;
      }
  
      const tab = tabs[0];
      if (tab.url && tab.url.includes("youtube.com")) {
        console.log("YouTube URL:", tab.url);
      } else {
        console.log("This is not a YouTube tab.");
      }
    });
  });
  
setTimeout(function() {
    alert("Você já usou o Instagram por muito tempo.");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.remove(tabs[0].id);
    });
  }, 60000);
  
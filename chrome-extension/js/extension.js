document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    if(url !==  "https://leetcode.com/api/problems/algorithms/"){
      var newURL = "https://leetcode.com/api/problems/algorithms/";
      chrome.tabs.create({ url: newURL });
    }
  });
}, false);
!function() {
  document.getElementById('showdata').onclick = function() {
    GetData('like', function(count) {
      document.getElementById('like').innerHTML = count; 
    });
    GetData('share', function(count) {
      document.getElementById('share').innerHTML = count; 
    });
    GetData('comment', function(count) {
      document.getElementById('comment').innerHTML = count; 
    });
  };
  function GetData(key, cb) {
    chrome.storage.sync.get([key], function(result) {
      if (Object.keys(result).length === 0) {
        cb(0);
      } else {
        cb(result[key]);
      }
    })
  }
}();
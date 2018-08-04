document.addEventListener('DOMContentLoaded', function () {
  // 向页面注入JS
  !function injectCustomJs(jsPath) {
    jsPath = jsPath || 'js/inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath);
    temp.onload = function () {
      // 放在页面不好看，执行完后移除掉
      this.parentNode.removeChild(this);
    };
    document.head.appendChild(temp);
  }();
});

window.addEventListener('message', function (e) {
  if (!e.data.type) {
    return;
  }
  const type = e.data.type;
  var key = 'like';
  if (type === 'share') {
    key = 'share';
  } else if (type === 'like') {
    key = 'like';
  } else if (type === 'comment') {
    key = 'comment';
  }
  SaveData(key);
})

function SaveData(key) {
  console.log('savedata:' + key);
  chrome.storage.sync.get([key], function(result) {
    var count = 0;
    var obj = {};
    if (Object.keys(result).length === 0) {
      count = 1;
    } else {
      var count = result[key] + 1;
    }
    obj[key] = count;
    chrome.storage.sync.set(obj, function() {
      console.log(`保存成功${key}`); 
    })
  });
}
window.addEventListener("message", function(e) {
  const type = e.data.type;
  if (type === 'xyinfo') {
    chrome.runtime.sendMessage({"type":"xyinfo", "data": e.data.info}, function (response) {return;})
  } else if (type === 'bsinfo') {
    chrome.runtime.sendMessage({"type":"bsinfo", "data": e.data.info}, function (response){return;})
  }
}, false);

// 向页面注入JS
!function injectCustomJs(jsPath)
{
  jsPath = jsPath || 'js/inject.js';
  var temp = document.createElement('script');
  temp.setAttribute('type', 'text/javascript');
  // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
  temp.src = chrome.extension.getURL(jsPath);
  temp.onload = function()
  {
      // 放在页面不好看，执行完后移除掉
      this.parentNode.removeChild(this);
  };
  document.head.appendChild(temp);
}();
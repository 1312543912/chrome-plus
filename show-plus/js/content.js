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
  console.log(e);
  const type = e.data.type;
  // 保存数据
  chrome.storage.sync.set({ color: 'blue' }, function () {
    console.log('保存成功！');
  });
})

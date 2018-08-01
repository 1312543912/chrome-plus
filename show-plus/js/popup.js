!function() {
  // 绑定查看数据事件
  document.getElementById('showdata').onclick = function() {
    // 查看点赞
    GetData('like', function(count) {
      document.getElementById('like').innerHTML = count; 
    });
    // 查看分享
    GetData('share', function(count) {
      document.getElementById('share').innerHTML = count; 
    });
    // 查看评论
    GetData('comment', function(count) {
      document.getElementById('comment').innerHTML = count; 
    });
  };
  // 获取数据通用方法
  function GetData(key, cb) {
    chrome.storage.sync.get([key], function(result) {
      if (Object.keys(result).length === 0) {
        cb(0);
      } else {
        cb(result[key]);
      }
    })
  }
  // 点击清空事件
  document.getElementById('clear').onclick = function() {
    chrome.storage.sync.clear(function(){
      alert('清除成功');
    });
  }
}();
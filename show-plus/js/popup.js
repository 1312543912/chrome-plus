!function() {
  var isSending = false;

  var likeFlag = false;
  var commentFlag = false;
  var shareFlag = false;

  var likeCount = 0;
  var commentCount = 0;
  var shareCount = 0;
  // 发送数据
  function sendData() {
    if (isSending) {
      return;
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          isSending = false;
          InitData();
        }
    }
    var url = 'http://118.89.24.36:8080/facedata/addface?faceLike='+likeCount+'&faceComment='+commentCount+'&faceShare='+shareCount+'&faceAgent=' + 'xxq'; 
    xhr.open('GET', url, true);
    xhr.send();
    isSending = true;
  }
  // 绑定查看数据事件
  document.getElementById('showdata').onclick = function() {
    // 查看点赞
    GetData('like', function(count) {
      likeFlag = true;
      likeCount = count;
      document.getElementById('like').innerHTML = count;
      IsSend();
    });
    // 查看分享
    GetData('share', function(count) {
      commentFlag = true;
      commentCount = count;
      document.getElementById('share').innerHTML = count;
      IsSend();
    });
    // 查看评论
    GetData('comment', function(count) {
      shareFlag = true;
      shareCount = count;
      document.getElementById('comment').innerHTML = count; 
      IsSend();
    });
  };
  // 判断是否发送网络请求
  function IsSend() {
    if (likeCount === 0 && commentCount === 0 && shareCount === 0) return;
    if (likeFlag && commentFlag && shareFlag) {
      sendData();
    }
  }
  // 发送完数据后清空数据记录
  function InitData() {
    likeFlag = false;
    commentFlag = false;
    shareFlag = false;
  
    likeCount = 0;
    commentCount = 0;
    shareCount = 0;
    chrome.storage.sync.clear(function(){
    });
  }
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
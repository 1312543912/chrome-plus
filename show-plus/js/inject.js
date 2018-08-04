var interval = 5 * 1000;
if (window.location.href.indexOf('facebook') > 0) {
  alert("spring插件可能会泄露个人信息");
}
!function () {
  console.log('inject.js');
  var likeLeng = 0;
  // 延时定时器保证事件可以成功绑定
  setInterval(() => {
    var like = document.getElementsByClassName('UFILikeLink');
    console.log(like.length);
    console.log(likeLeng);
    if (like.length > likeLeng) {
      console.log('重新绑定');
      likeLeng = like.length;
      var comment = document.getElementsByClassName('comment_link _5yxe');
      var share = document.querySelectorAll('._42nr > ._1mto:nth-of-type(3)');
      console.log('share' + share.length);
      if (share.length === 0) {
        var share = document.querySelectorAll('._42nr > ._1mto:nth-of-type(2)');
      }
      BindData(like, comment, share);
    }
  }, interval);

  function BindData(like, comment, share) {
    // 绑定like
    console.log(like.length);
    for (let i = 0; i < like.length; i++) {
      like[i].onmousedown = function () {
        window.postMessage({ type: "like", info: "1" }, '*');
      }
    }
    // 绑定comment
    console.log(comment.length);
    for (let j = 0; j < comment.length; j++) {
      comment[j].onmousedown = function () {
        window.postMessage({ type: "comment", info: "1" }, '*');
      }
    }
    // 绑定share
    for (let k = 0; k < share.length; k++) {
      share[k].onmousedown = function () {
        window.postMessage({ type: "share", info: "1" }, '*');
      }
    }
  }
}();

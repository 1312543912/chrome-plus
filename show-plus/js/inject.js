!function () {
  var likeLeng = 0;
  // 延时定时器保证事件可以成功绑定
  setInterval(() => {
    var like = document.getElementsByClassName('UFILikeLink');
    if (like > likeLeng) {
      likeLeng = like;
      var comment = document.getElementsByClassName('comment_link _5yxe');
      var share = document.querySelectorAll('._42nr > ._1mto:nth-of-type(3)');
      BindData(like, comment, share);
    }
  }, 10000);

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

// 延时定时器保证事件可以成功绑定
setTimeout(() => {
  console.log('this is inject.js');
  // 绑定like
  var like = document.getElementsByClassName('UFILikeLink');
  console.log(like.length);
  for (let i = 0; i < like.length; i++) {
    like[i].onmousedown = function () {
      console.error('like');
      window.postMessage({ type: "like", info: "1" }, '*');
    }
  }
  // 绑定comment
  var comment = document.getElementsByClassName('comment_link _5yxe');
  console.log(comment.length);
  for (let j = 0; j < comment.length; j++) {
    comment[j].onmousedown = function () {
      console.error('error');
      window.postMessage({ type: "comment", info: "1" }, '*');
    }
  }
  // 绑定share
  var share = document.querySelectorAll('._42nr > ._1mto:nth-of-type(3)');
  for (let k = 0; k < share.length; k++) {
    share[k].onmousedown = function () {
      console.error('error');
      window.postMessage({ type: "share", info: "1" }, '*');
    }
  }
}, 15000);
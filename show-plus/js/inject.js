setTimeout(() => {

  console.log('this is inject');
  var x = document.getElementsByClassName('pos');
  for (let i = 0; i < x.length; i++) {
    x[i].onmousedown = function () {
      console.log('sss');
      window.postMessage({ type: "dddd", info: "ddd" }, '*');
    }
  }

}, 1500);
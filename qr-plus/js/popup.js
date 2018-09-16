chrome.runtime.onMessage.addListener(function(request, response) {
  console.log(request.type);
  const defaultUrl = request.data;
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: defaultUrl,
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
});
document.getElementById('refresh').onclick = function() {
  const currentUrl = window.location.href;
  console.log(currentUrl);
  qrcode.clear(); // clear the code.
  qrcode.makeCode(currentUrl); // make another code.
}
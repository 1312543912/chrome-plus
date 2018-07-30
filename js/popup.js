chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    document.getElementById('message').innerHTML = document.getElementById("message").innerHTML + "<br/>" + JSON.stringify(request);
  });
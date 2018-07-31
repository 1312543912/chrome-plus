chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.type === 'xyinfo') {
      document.getElementById('skj-message').innerHTML = document.getElementById("skj-message").innerHTML + "<br/>" + JSON.stringify(request.data);
    } else if (request.type === 'bsinfo') {
      let msg = '';
      const keys = Object.keys(request.data);
      const values = request.data;
      for (let i = 0; i < keys.length; i++) {
        msg += keys[i] + ':' + JSON.stringify(values[keys[i]]) + '<br/>';
      }
      document.getElementById('bs-message').innerHTML = document.getElementById("bs-message").innerHTML + "<br/>" + msg;
    }
    
  });
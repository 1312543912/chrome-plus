'use strict';

window.xyhelper = window.helper || {};

window.xyhelper.onInfo = function(mes) {
  window.postMessage({type: 'xyinfo', info: mes}, '*');
};

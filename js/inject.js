'use strict';

window.xyhelper = window.helper || {};

window.xyhelper.onInfo = function(mes) {
  window.postMessage({type: 'xyinfo', info: mes}, '*');
};

window.xyhelper.onBsInfo = function() {
  window.postMessage({type: 'bsinfo', info: window.objBS}, '*');
}
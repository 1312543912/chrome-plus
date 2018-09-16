!function(wd) {
  console.log('欢迎使用spring插件');
  const defaultUrl = wd.location.href;
  console.log(defaultUrl);
  window.postMessage({ type: "defaultUrl", info: defaultUrl}, '*');
}(window);
chrome.webRequest.onBeforeRequest.addListener(
  () => ({ redirectUrl: 'https://telex.hu/' }),
  { urls: ['*://*.index.hu/'] },
  ['blocking']
);
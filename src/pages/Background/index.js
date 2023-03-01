console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.offscreen.createDocument({
    url: chrome.runtime.getURL('offscreen.html'),
    reasons: ['IFRAME_SCRIPTING'],
    justification: 'reason for needing the document',
});
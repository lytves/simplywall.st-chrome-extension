'use strict';

chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'simplywall.st'},
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

        const myRegExp = /https?:\/\/simplywall\.st\/.*/;
        const currentUrl = tab.url;

        if (myRegExp.test(currentUrl)) {
            let stepScriptFile = "step1.js";
            if (stepScriptFile) {
                chrome.tabs.query({active: true, currentWindow: true}, function () {
                    chrome.tabs.executeScript(
                        tab.id,
                        {file: stepScriptFile});
                });
            }
        }

});

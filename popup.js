// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//window.location.href="popup.html";
chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.remove(tabs[i].id);
    }
});
window.open('https://google.com','_blank');
'use strict';


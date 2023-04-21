// ==UserScript==
// @name         Script to disable the save all buttons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Tobias
// @match        https://www.hsbi.de/elearning/ilias.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hsbi.de
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  document.querySelectorAll("input[name='cmd[saveStatusAll]']").forEach((btn) => {
    btn.disabled = true;
  });
})();

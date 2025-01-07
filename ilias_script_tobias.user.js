// ==UserScript==
// @name         Disable Save All Buttons in ILIAS
// @namespace    https://openuserjs.org/users/tgrothe
// @version      0.2
// @description  Script to disable the save all buttons in ILIAS to prevent accidental saving of unwanted changes
// @author       tgrothe
// @match        https://www.hsbi.de/elearning/ilias.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hsbi.de
// @grant        none
// @license      MIT
// ==/UserScript==

// ==OpenUserJS==
// @author tgrothe
// ==/OpenUserJS==

(function () {
  "use strict";
  document
    .querySelectorAll("input[name='cmd[saveStatusAll]']")
    .forEach(function (btn) {
      btn.disabled = true;
    });
})();

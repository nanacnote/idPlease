(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});
/**
 * Main class object for idPlease library
 * @param options determines how to interact with the API
 */

var _ID =
/** @class */
function () {
  function _ID(options) {
    if (options === void 0) {
      options = undefined;
    }

    this.options = options;
    this.detectENV = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";
  }
  /**
   * pulls in all information from visitor on load
   * @private method
   * @returns JSON
   */


  _ID.prototype._request = function () {
    if (this.detectENV) {
      var _data = {
        _navigator: window.navigator,
        _cookies: document.cookie
      };
      return _data;
    }
  };
  /**
   * Returns the "COMPLETE" vistor information credentials
   * @returns JSON
   */


  _ID.prototype.showAll = function () {
    var _a;

    if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.type) === "COMPLETE") {
      var res = this._request();

      return JSON.stringify({
        os: res === null || res === void 0 ? void 0 : res._navigator.appVersion,
        browser: res === null || res === void 0 ? void 0 : res._navigator.appName,
        language: res === null || res === void 0 ? void 0 : res._navigator.language
      });
    }
  };

  return _ID;
}();

var idPlease = new _ID({
  type: "COMPLETE"
});
exports.idPlease = idPlease;

},{}],2:[function(require,module,exports){
"use strict";

var _index = require("../dist/index");

// handle all js interactions on document ready state
$(document).ready(function () {
  // responsive navbar handler
  $("#navbar-xs-button").on("click", function (e) {
    $("#navbar-xs-drawer").hasClass("d-none") ? $("#navbar-xs-drawer").removeClass("d-none") : $("#navbar-xs-drawer").addClass("d-none"); // clone sidebar into popup menu

    var siderContent = $("#sider-content").clone(true);
    $("#insert-sider-content").empty().html(siderContent);
  }); // inject getting started content on load

  $("#stage").load("content/gettingStarted.html"); // inject examples content on button click

  $(".examples-btn").on("click", function (e) {
    // $("#stage").text(idPlease.showAll());
    $("#stage").load("content/example.html");
  });
});

},{"../dist/index":1}]},{},[2]);

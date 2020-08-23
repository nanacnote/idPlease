/*! idPlease.JS by Owusu K. CC0 1.0 Universal © open-source library | 2020 adjeibohyen@hotmail.co.uk 2020-08-23 */ 
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

    this._options = options;
    this._detectENV = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";
  }
  /**
   * pulls in all information from visitor on load
   * @private method
   * @returns JSON
   */


  _ID.prototype._request = function () {
    if (this._detectENV) {
      var _data = {
        _navigator: window.navigator,
        _cookies: document.cookie
      };
      return _data;
    }
  };
  /**
   * Returns the "COMPLETE" vistor information credentials
   * @returns object
   */


  _ID.prototype.getAll = function () {
    var _a;

    if (((_a = this._options) === null || _a === void 0 ? void 0 : _a.type) === "COMPLETE") {
      var res = this._request();

      return {
        os: res === null || res === void 0 ? void 0 : res._navigator.appVersion,
        browser: res === null || res === void 0 ? void 0 : res._navigator.appName,
        language: res === null || res === void 0 ? void 0 : res._navigator.language,
        test: res === null || res === void 0 ? void 0 : res._navigator.userAgent.indexOf("Chrome")
      };
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

var _examples = require("./scripts/examples.getAll");

// handle all js interactions on document ready state
$(document).ready(function () {
  // responsive navbar handler
  $("#navbar-xs-button").on("click", function () {
    $("#navbar-xs-drawer").hasClass("d-none") ? $("#navbar-xs-drawer").removeClass("d-none") : $("#navbar-xs-drawer").addClass("d-none"); // clone sidebar into popup menu

    var siderContent = $("#sider-content").clone(true);
    $("#insert-sider-content").empty().append(siderContent);
  }); // inject getting started content on load

  $("#stage-content").load("content/gettingStarted.html");
  $("#stage-edit-link>a").attr("href", "".concat(ROOT_URL, "/idPlease/tree/master/docs/content/gettingStarted.html"));
  $('button[data-content-ref="gettingStarted"]').addClass("selected-left"); // capture only sider button clicks and inject content onto stage

  $("#sider-content").delegate(".btn-no-decoration", "click", function () {
    var btnCurrentRef = $(this).data("content-ref");
    $("#stage-content").load("content/".concat(btnCurrentRef, ".html"));
    $("#stage-edit-link>a").attr("href", "".concat(ROOT_URL, "/idPlease/tree/master/docs/content/").concat(btnCurrentRef, ".html")); // adds selected right border stylin

    $(".btn-no-decoration").removeClass("selected-left");
    $("button[data-content-ref=".concat(btnCurrentRef, "]")).addClass("selected-left");
  }); // capture only stage button clicks and hydrate content as appropriate

  $("#stage").delegate(".btn-no-decoration", "click", function (e) {
    var btnCurrentRef = $(this).data("content-ref");

    switch (btnCurrentRef) {
      case "fullList":
        $("#examples-stage-highlight").empty().append((0, _examples.getAll)()); // hydrate by importing and calling the examples.getAll script

        break;

      default:
        break;
    }
  }); // DEVELOPMENT CODE -- comment out before deployment
  // $("#stage-content").load("content/examples.html");
  // setTimeout(() => {
  //   $("#examples-stage-highlight").empty().append(getAll());
  // }, 500);
}); // important global variables

var ROOT_URL = "https://github.com/nanacnote";

},{"./scripts/examples.getAll":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = void 0;

var _index = require("../../dist/index");

var getAll = function getAll() {
  var html = "\n    <div class=\"p-5\">\n      <h6>Stringify JSON of all data received during handshake:</h6>\n      <div>" + Object.entries(_index.idPlease.getAll()).map(function (e) {
    return "<div><span>".concat(e[0], "</span> ---> ").concat(e[1], "</div>");
  }) + "\n      </div>\n    </div>\n  ";
  return html;
};

exports.getAll = getAll;

},{"../../dist/index":1}]},{},[2]);

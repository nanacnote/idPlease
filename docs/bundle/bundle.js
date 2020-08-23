/*! idPlease.JS by Owusu K. CC0 1.0 Universal © open-source library | 2020 adjeibohyen@hotmail.co.uk 2020-08-23 */ 
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * idplease
 * v1.0.0
 * CC0-1.0
 * by Owusu K
 * contributors 
 * A Javascript library to make getting website visitor's information easy and simple no dependencies and can run both server side and client side.
 * https://github.com/nanacnote/idPlease#readme
 */
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});
/**
 * This function parses a userAgent string exposed on window.navigator.userAgent
 * @param string
 * @return object
 *
 * @example
 *      userAgentParser("Mozilla/5.0 (X11; CrOS x86_64 11895.118.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.159 Safari/537.36")
 *      // return Chrome 74 on Chrome OS 11895
 */

var userAgentParser = function userAgentParser(param) {
  if (param) {
    console.log(param);
    return {
      osName: "",
      osVersion: "",
      browserName: "",
      browserVersion: ""
    };
  }

  return undefined;
};
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
      var res = this._request(); // request header information from visitor


      var userAgent = userAgentParser(res === null || res === void 0 ? void 0 : res._navigator.userAgent); // pass userAgent string to the parser

      return {
        os: userAgent === null || userAgent === void 0 ? void 0 : userAgent.osName,
        osVersion: userAgent === null || userAgent === void 0 ? void 0 : userAgent.osVersion,
        browserName: userAgent === null || userAgent === void 0 ? void 0 : userAgent.browserName,
        browserVersion: userAgent === null || userAgent === void 0 ? void 0 : userAgent.browserVersion
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

  $("#stage-content").load("content/examples.html");
  setTimeout(function () {
    $("#examples-stage-highlight").empty().append((0, _examples.getAll)());
  }, 500);
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
  var html = "\n    <div class=\"p-5\">\n      <h6>Stringify JSON of all data received during handshake:</h6>\n      <div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">key</th>\n            <th scope=\"col\">value</th>\n          </tr>\n        </thead>\n        <tbody>\n      " + Object.entries(_index.idPlease.getAll()).map(function (e, i) {
    return "<tr>\n          <th scope=\"row\">".concat(i + 1, "</th>\n          <td>").concat(e[0].replace(/([a-z])([A-Z])/g, "$1 $2").toLocaleUpperCase(), "</td>\n          <td>").concat(e[1], "</td>\n        </tr>");
  }).join(" ") + "</tbody>\n        </table>\n      </div>\n    </div>\n  ";
  return html;
};

exports.getAll = getAll;

},{"../../dist/index":1}]},{},[2]);

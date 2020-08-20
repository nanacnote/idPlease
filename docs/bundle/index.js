(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Main class object for idPlease library
 * @param options determines how to interact with the API
 */
var idPlease = /** @class */ (function () {
    function idPlease(options) {
        if (options === void 0) { options = undefined; }
        this.options = options;
    }
    /**
     * Returns the entire vistor information collected
     * @returns JSON
     */
    idPlease.prototype._raw = function () {
        return this.options;
    };
    return idPlease;
}());

exports.idPlease = idPlease;

},{}],2:[function(require,module,exports){
"use strict";

var _index = require("../dist/index");

// const idPlease = require("../dist/index");
// import types from "../dist";
$(document).ready(function () {
  $("#vistor-details").on("click", function (e) {
    const visitor = new _index.idPlease("hello");
    console.log(visitor._raw());
    $("#stdout").text("pending");
  });
});

},{"../dist/index":1}]},{},[2]);

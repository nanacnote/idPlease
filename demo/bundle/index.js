(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const idPlease = require("../dist/index");

$(document).ready(function () {
  $("#vistor-details").on("click", function (e) {
    const foo = idPlease.idPlease();
    console.log(foo);
    $("#stdout").text("pending");
  });
});

},{"../dist/index":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Main class object for idPlease library
 * @param options determines how to interact with the API
 */
var idPlease = /** @class */ (function () {
    function idPlease(options) {
        this.options = options;
        this.detectENV = function () {
            console.log(options);
        };
    }
    /**
     * Returns the entire vistor information collected
     * @returns JSON
     */
    idPlease.prototype._raw = function () {
        return "entire visitor data";
    };
    return idPlease;
}());

exports.idPlease = idPlease;

},{}]},{},[1]);

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

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * This function parses a userAgent string exposed on window.navigator.userAgent
 * @param string
 * @return object
 *
 * @example
 *      userAgentParser("Mozilla/5.0 (X11; CrOS x86_64 11895.118.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.159 Safari/537.36")
 *      // return Chrome 74 on Chrome OS 11895
 */
var userAgentParser = function (param) {
    var _a;
    if (param) {
        // remove all elements in parenthesis an group in a separate array
        var removeParen = param
            .replace(/\(([^()]+)\)/g, "")
            .split(" ")
            .filter(function (e) { return e.length > 1; });
        var groupParen = param.match(/\(([^()]+)\)/g);
        var osDeviceString = groupParen
            ? groupParen[0].replace("(", "").replace(")", "").split(";")
            : [];
        console.log(osDeviceString);
        console.log(removeParen);
        return {
            device: (_a = osDeviceString[0]) !== null && _a !== void 0 ? _a : "",
            osName: "",
            osVersion: "",
            browserName: "",
            browserVersion: "",
        };
    }
    return undefined;
};

/**
 * Main class object for idPlease library
 * @param options determines how to interact with the API
 */
var _ID = /** @class */ (function () {
    function _ID(options) {
        if (options === void 0) { options = undefined; }
        this._options = options;
        this._detectENV = typeof window === "object";
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
                _cookies: document.cookie,
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
                device: userAgent === null || userAgent === void 0 ? void 0 : userAgent.device,
                os: userAgent === null || userAgent === void 0 ? void 0 : userAgent.osName,
                osVersion: userAgent === null || userAgent === void 0 ? void 0 : userAgent.osVersion,
                browserName: userAgent === null || userAgent === void 0 ? void 0 : userAgent.browserName,
                browserVersion: userAgent === null || userAgent === void 0 ? void 0 : userAgent.browserVersion,
            };
        }
    };
    return _ID;
}());

var idPlease = new _ID({ type: "COMPLETE" });

exports.idPlease = idPlease;

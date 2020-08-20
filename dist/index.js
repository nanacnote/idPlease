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

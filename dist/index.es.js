/**
 * Main class object for idPlease library
 * @param options determines how to interact with the API
 */
var _ID = /** @class */ (function () {
    function _ID(options) {
        if (options === void 0) { options = undefined; }
        this.options = options;
        this.detectENV = typeof window === "object";
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
                _cookies: document.cookie,
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
                language: res === null || res === void 0 ? void 0 : res._navigator.language,
            });
        }
    };
    return _ID;
}());

var idPlease = new _ID({ type: "COMPLETE" });

export { idPlease };

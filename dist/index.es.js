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

export { idPlease };

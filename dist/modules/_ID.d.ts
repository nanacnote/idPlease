/**
 *  Parameters type declarations
 */
export declare type TParams = {
    options?: {
        type: "COMPLETE" | "COMPACT" | "BASIC";
    };
};
/**
 * Main class object for idPlease library
 * @param options determines how to interact with the API
 */
export declare class _ID {
    /**@private determines if javascript is runing in a window object (browser) or global object (node js) environment */
    private _detectENV;
    /**@private contains the options parameter object */
    private _options;
    constructor(options?: TParams["options"]);
    /**
     * pulls in all information from visitor on load
     * @private method
     * @returns JSON
     */
    private _request;
    /**
     * Returns the "COMPLETE" vistor information credentials
     * @returns object
     */
    getAll(): {
        device: string | undefined;
        os: string | undefined;
        osVersion: string | undefined;
        browserName: string | undefined;
        browserVersion: string | undefined;
    } | undefined;
}

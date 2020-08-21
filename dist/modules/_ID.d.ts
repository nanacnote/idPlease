/**
 *  Parameters type declarations
 */
export declare type TParams = {
    options?: {
        type: "COMPLETE" | "COMPACT" | "BASIC";
    };
};
/**
 *  Properties type declarations
 */
export declare type TProps = {};
/**
 * Main class object for idPlease library
 * @param options determines how to interact with the API
 */
export declare class _ID {
    /**determines if javascript is runing in a window object (browser) or global object (node js) environment */
    private detectENV;
    /**contains the options parameter object */
    private options;
    constructor(options?: TParams["options"]);
    /**
     * pulls in all information from visitor on load
     * @private method
     * @returns JSON
     */
    private _request;
    /**
     * Returns the "COMPLETE" vistor information credentials
     * @returns JSON
     */
    showAll(): string | undefined;
}

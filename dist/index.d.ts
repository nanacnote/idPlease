/**
 *  Parameters type declarations
 */
declare type TParams = {
    options?: string;
};
/**
 * Main class object for idPlease library
 * @param options determines how to interact with the API
 */
export declare class idPlease {
    /**determines if javascript is runing in a window object (browser) or global object (node js) environment */
    private detectENV;
    /**contains the options parameter object */
    private options;
    constructor(options: TParams["options"]);
    /**
     * Returns the entire vistor information collected
     * @returns JSON
     */
    _raw(): string;
}
export {};

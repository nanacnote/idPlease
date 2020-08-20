/**
 *  Parameters type declarations
 */
type TParams = {
  options?: string;
};

/**
 *  Properties type declarations
 */
type TProps = {};

/**
 * Main class object for idPlease library
 * @param options determines how to interact with the API
 */
export class idPlease {
  /**determines if javascript is runing in a window object (browser) or global object (node js) environment */
  private detectENV: any;

  /**contains the options parameter object */
  private options: TParams["options"];

  constructor(options: TParams["options"] = undefined) {
    this.options = options;
  }

  /**
   * Returns the entire vistor information collected
   * @returns JSON
   */
  public _raw() {
    return this.options;
  }
}

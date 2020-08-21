/**
 *  Parameters type declarations
 */
export type TParams = {
  options?: {
    type: "COMPLETE" | "COMPACT" | "BASIC";
  };
};

/**
 *  Properties type declarations
 */
export type TProps = {};

/**
 * Main class object for idPlease library
 * @param options determines how to interact with the API
 */
export class _ID {
  /**determines if javascript is runing in a window object (browser) or global object (node js) environment */
  private detectENV: any;

  /**contains the options parameter object */
  private options: TParams["options"];

  constructor(options: TParams["options"] = undefined) {
    this.options = options;
    this.detectENV = typeof window === "object";
  }

  /**
   * pulls in all information from visitor on load
   * @private method
   * @returns JSON
   */
  private _request() {
    if (this.detectENV) {
      const _data = {
        _navigator: window.navigator,
        _cookies: document.cookie,
      };
      return _data;
    }
  }

  /**
   * Returns the "COMPLETE" vistor information credentials
   * @returns JSON
   */
  public showAll() {
    if (this.options?.type === "COMPLETE") {
      const res = this._request();
      return JSON.stringify({
        os: res?._navigator.appVersion,
        browser: res?._navigator.appName,
        language: res?._navigator.language,
      });
    }
  }
}

/**
 *  Parameters type declarations
 */
export type TParams = {
  options?: {
    type: "COMPLETE" | "COMPACT" | "BASIC";
  };
};

/**
 * Main class object for idPlease library
 * @param options determines how to interact with the API
 */
export class _ID {
  /**@private determines if javascript is runing in a window object (browser) or global object (node js) environment */
  private _detectENV: any;
  /**@private contains the options parameter object */
  private _options: TParams["options"];

  constructor(options: TParams["options"] = undefined) {
    this._options = options;
    this._detectENV = typeof window === "object";
  }

  /**
   * pulls in all information from visitor on load
   * @private method
   * @returns JSON
   */
  private _request() {
    if (this._detectENV) {
      const _data = {
        _navigator: window.navigator,
        _cookies: document.cookie,
      };
      return _data;
    }
  }

  /**
   * Returns the "COMPLETE" vistor information credentials
   * @returns object
   */
  public getAll() {
    if (this._options?.type === "COMPLETE") {
      const res = this._request();
      return {
        os: res?._navigator.appVersion,
        browser: res?._navigator.appName,
        language: res?._navigator.language,
        test: (<any>res?._navigator).keyboard,
      };
    }
  }
}

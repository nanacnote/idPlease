/**
 * This function parses a userAgent string exposed on window.navigator.userAgent
 * @param string
 * @return object
 *
 * @example
 *      userAgentParser("Mozilla/5.0 (X11; CrOS x86_64 11895.118.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.159 Safari/537.36")
 *      // return Chrome 74 on Chrome OS 11895
 */
export declare const userAgentParser: (param: string | undefined) => {
    device: string;
    osName: string;
    osVersion: string;
    browserName: string;
    browserVersion: string;
} | undefined;

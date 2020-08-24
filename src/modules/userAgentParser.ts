/**
 * This function parses a userAgent string exposed on window.navigator.userAgent
 * @param string
 * @return object
 *
 * @example
 *      userAgentParser("Mozilla/5.0 (X11; CrOS x86_64 11895.118.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.159 Safari/537.36")
 *      // return Chrome 74 on Chrome OS 11895
 */
export const userAgentParser = (param: string | undefined) => {
  if (param) {
    // remove all elements in parenthesis an group in a separate array
    const removeParen = param
      .replace(/\(([^()]+)\)/g, "")
      .split(" ")
      .filter((e) => e.length > 1);
    const groupParen = param.match(/\(([^()]+)\)/g);
    const osDeviceString = groupParen
      ? groupParen[0].replace("(", "").replace(")", "").split(";")
      : [];
    console.log(osDeviceString);
    console.log(removeParen);
    return {
      device: osDeviceString[0] ?? "",
      osName: "",
      osVersion: "",
      browserName: "",
      browserVersion: "",
    };
  }
  return undefined;
};

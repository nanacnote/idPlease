import { _ID } from "../src/modules/_ID";

test("should return instance of _ID", () => {
  expect(new _ID({ type: "COMPLETE" }).getAll()).toReturn();
});

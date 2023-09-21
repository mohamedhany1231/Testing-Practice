import { reverseString } from "./reverseString";

test("handle empty string", () => {
  expect(reverseString("")).toEqual("");
});
test("handle 1 char", () => {
  expect(reverseString("a")).toEqual("a");
});
test("handle 2 char", () => {
  expect(reverseString("ab")).toEqual("ba");
});
test("handle sentence", () => {
  expect(reverseString("Ahmed like working out.")).toEqual(
    ".tuo gnikrow ekil demhA"
  );
});
test("handle number", () => {
  expect(reverseString(12345)).toEqual("54321");
});

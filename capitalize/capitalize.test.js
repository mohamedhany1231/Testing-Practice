import { capitalize } from "./capitalize";

test("handle 1 letter", () => {
  expect(capitalize("a")).toEqual("A");
});
test("handle empty string", () => {
  expect(capitalize("")).toEqual("");
});
test("handle lower case string", () => {
  expect(capitalize("ahmed like eating apples.")).toEqual(
    "Ahmed like eating apples."
  );
});
test("handle upper case", () => {
  expect(capitalize("AHMED LIKE WORKING OUT")).toEqual(
    "AHMED LIKE WORKING OUT"
  );
});

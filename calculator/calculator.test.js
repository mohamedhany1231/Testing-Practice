import { Calculator } from "./calculator";

test("handle missing add argument", () => {
  expect(Calculator.add(2)).toEqual(2);
});
test("handle  missing divide argument", () => {
  expect(Calculator.divide(2)).toEqual(2);
});
test("handle  missing subtract argument", () => {
  expect(Calculator.divide(2)).toEqual(2);
});
test("handle  missing multiply argument", () => {
  expect(Calculator.divide(2)).toEqual(2);
});

test("handle  add", () => {
  expect(Calculator.add(1, 2)).toEqual(3);
});
test("handle fraction add", () => {
  expect(Calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("handle  multiply", () => {
  expect(Calculator.multiply(4, 7)).toEqual(28);
});
test("handle  divide", () => {
  expect(Calculator.divide(4, 8)).toEqual(0.5);
});
test("handle  subtract", () => {
  expect(Calculator.sub(4, 8)).toEqual(-4);
});

test("handle  multiple operations", () => {
  expect(
    Calculator.divide(
      Calculator.add(Calculator.sub(4, 8), Calculator.multiply(2, 3)),
      Calculator.add(0.2, 0.3)
    )
  ).toEqual(4);
});

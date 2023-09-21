import { analyzeArray } from "./analyzeArray";

test("handel 1 value array", () => {
  expect(analyzeArray([1])).toEqual({ average: 1, min: 1, max: 1, length: 1 });
});
test("handel  number 1 to 5", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
test("handel  larger numbers", () => {
  expect(analyzeArray([101, 202, 303, 404, 505])).toEqual({
    average: 303,
    min: 101,
    max: 505,
    length: 5,
  });
});
// test("handel  fraction numbers", () => {
//   expect(analyzeArray([0.101, 0.202, 0.303, 0.404, 0.505])).toEqual({
//     average: 0.303,
//     min: 0.101,
//     max: 0.505,
//     length: 5,
//   });
// });

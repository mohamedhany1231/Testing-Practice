import { caesarCipher } from "./caesarCipher";

test("handle empty", () => {
  expect(caesarCipher("")).toEqual("");
});

test("handle 1 char", () => {
  expect(caesarCipher("a")).toEqual("b");
});
test("handle shifting  z to a", () => {
  expect(caesarCipher("z")).toEqual("a");
});

test("handle all chars", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toEqual(
    "bcdefghijklmnopqrstuvwxyza"
  );
});
test("handle upper case", () => {
  expect(caesarCipher("CaT doG")).toEqual("DbU epH");
});
test("signs doesnt change", () => {
  expect(caesarCipher('!@#%^&*()_+?><":{}[]')).toEqual('!@#%^&*()_+?><":{}[]');
});
test("handle a paragraph", () => {
  expect(
    caesarCipher(
      "To pass an encrypted message from one person to another, it is first necessary that both parties have the 'key' for the cipher, so that the sender may encrypt it and the receiver may decrypt it. For the caesar cipher, the key is the number of characters to shift the cipher alphabet."
    )
  ).toEqual(
    "Up qbtt bo fodszqufe nfttbhf gspn pof qfstpo up bopuifs, ju jt gjstu ofdfttbsz uibu cpui qbsujft ibwf uif 'lfz' gps uif djqifs, tp uibu uif tfoefs nbz fodszqu ju boe uif sfdfjwfs nbz efdszqu ju. Gps uif dbftbs djqifs, uif lfz jt uif ovncfs pg dibsbdufst up tijgu uif djqifs bmqibcfu."
  );
});

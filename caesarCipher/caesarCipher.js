export function caesarCipher(str) {
  if (!(str && str.length > 0)) return str;
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (isLetter(str[i])) {
      output += shift(str[i]);
    } else output += str[i];
  }
  return output;
}

function isLetter(char) {
  let charCode = char.charCodeAt(0);
  return (
    (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
  );
}
function shift(char) {
  // check z
  if (char.charCodeAt(0) == 90 || char.charCodeAt(0) == 122) {
    return String.fromCharCode(char.charCodeAt(0) - 25);
  }
  return String.fromCharCode(char.charCodeAt(0) + 1);
}

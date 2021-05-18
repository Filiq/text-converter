const wide = (str) => {
  let changedStr = "";

  const translate = (char) => {
    let diff;
    if (/[A-Z]/.test(char)) {
      diff = "Ａ".codePointAt(0) - "A".codePointAt(0);
    } else if (/[a-z]/.test(char)) {
      diff = "ａ".codePointAt(0) - "a".codePointAt(0);
    } else if (/[0-9]/.test(char)) {
      diff = "０".codePointAt(0) - "0".codePointAt(0);
    } else {
      diff = 0;
    }

    return String.fromCodePoint(char.codePointAt(0) + diff);
  };

  for (let i = 0; i < str.length; i++) {
    changedStr += translate(str[i]);
  }

  return changedStr;
};

export default wide;

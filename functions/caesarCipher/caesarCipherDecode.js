const caesarCipherDecode = (str, shift, alphabet, ignoreCase) => {
  const setCase = (char) => {
    if (ignoreCase) {
      return char.toLowerCase();
    }

    return char;
  };

  const length = alphabet.length - 1;

  if (shift > length) {
    shift = shift % (length + 1);
  }

  while (shift < 0) {
    shift = length + 1 - Math.abs(shift);
  }

  let encoded = [];

  str.split("").forEach((char) => {
    if (char === "") {
      encoded.push("");
    } else if (alphabet.indexOf(setCase(char)) === -1) {
      encoded.push(char);
    } else {
      const index = alphabet.indexOf(setCase(char));

      console.log(
        index - shift < 0
          ? console.log(shift + (length - index))
          : console.log(index - shift)
      );

      encoded.push(
        index - shift < 0
          ? setCase(alphabet[shift - (shift - length)])
          : setCase(alphabet[index - shift])
      );
    }
  });
  return encoded.join("");
};

export default caesarCipherDecode;

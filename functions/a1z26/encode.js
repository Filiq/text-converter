const encode = (str, separator, alphabet, ignoreCase) => {
  const setCase = (char) => {
    if (ignoreCase) {
      return char.toLowerCase();
    }

    return char;
  };

  let encoded = [];

  str.split("").forEach((char) => {
    if (alphabet.indexOf(setCase(char)) !== -1) {
      encoded.push(alphabet.indexOf(char) + 1);
      encoded.push(separator);
    }
  });

  encoded.pop();

  return encoded.join("");
};

export default encode;

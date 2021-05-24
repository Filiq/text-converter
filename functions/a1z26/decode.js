const decode = (str, separator, alphabet) => {
  let decoded = [];

  str.split(separator).forEach((char) => {
    if (alphabet[parseInt(char) - 1] !== undefined) {
      decoded.push(alphabet[parseInt(char) - 1]);
    }
  });

  return decoded.join("");
};

export default decode;

const decode = (str, l1, l2) => {
  const alphabet = {
    [l1 + l1 + l1 + l1 + l1]: "a",
    [l1 + l1 + l1 + l1 + l2]: "b",
    [l1 + l1 + l1 + l2 + l1]: "c",
    [l1 + l1 + l1 + l2 + l2]: "d",
    [l1 + l1 + l2 + l1 + l1]: "e",
    [l1 + l1 + l2 + l1 + l2]: "f",
    [l1 + l1 + l2 + l2 + l1]: "g",
    [l1 + l1 + l2 + l2 + l2]: "h",
    [l1 + l2 + l1 + l1 + l1]: "i",
    [l1 + l2 + l1 + l1 + l1]: "j",
    [l1 + l2 + l1 + l1 + l2]: "k",
    [l1 + l2 + l1 + l2 + l1]: "l",
    [l1 + l2 + l1 + l2 + l2]: "m",
    [l1 + l2 + l2 + l1 + l1]: "n",
    [l1 + l2 + l2 + l1 + l2]: "o",
    [l1 + l2 + l2 + l2 + l1]: "p",
    [l1 + l2 + l2 + l2 + l2]: "q",
    [l2 + l1 + l1 + l1 + l1]: "r",
    [l2 + l1 + l1 + l1 + l2]: "s",
    [l2 + l1 + l1 + l2 + l1]: "t",
    [l2 + l1 + l1 + l2 + l2]: "u",
    [l2 + l1 + l1 + l2 + l2]: "v",
    [l2 + l1 + l2 + l1 + l1]: "w",
    [l2 + l1 + l2 + l1 + l2]: "x",
    [l2 + l1 + l2 + l2 + l1]: "y",
    [l2 + l1 + l2 + l2 + l2]: "z",
  };

  let decoded = [];

  str.split(" ").forEach((char) => {
    if (alphabet.hasOwnProperty(char)) {
      decoded.push(alphabet[char]);
    }
  });

  return decoded.join("");
};

export default decode;

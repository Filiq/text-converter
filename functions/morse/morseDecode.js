const morseDecode = (str, s, l, space) => {
  const alphabet = {
    [s + l]: "a",
    [l + s + s + s]: "b",
    [l + s + l + s]: "c",
    [l + s + s]: "d",
    [s]: "e",
    [s + s + l + s]: "f",
    [l + l + s]: "g",
    [s + s + s + s]: "h",
    [s + s]: "i",
    [s + l + l + l]: "j",
    [l + s + l]: "k",
    [s + l + s + s]: "l",
    [l + l]: "m",
    [l + s]: "n",
    [l + l + l]: "o",
    [s + l + l + s]: "p",
    [l + l + s + l]: "q",
    [s + l + s]: "r",
    [s + s + s]: "s",
    [l]: "t",
    [s + s + l]: "u",
    [s + s + s + l]: "v",
    [s + l + l]: "w",
    [l + s + s + l]: "x",
    [l + s + l + l]: "y",
    [l + l + s + s]: "z",
    [l + l + l + l + l]: "0",
    [s + l + l + l + l]: "1",
    [s + s + l + l + l]: "2",
    [s + s + s + l + l]: "3",
    [s + s + s + s + l]: "4",
    [s + s + s + s + s]: "5",
    [l + s + s + s + s]: "6",
    [l + l + s + s + s]: "7",
    [l + l + l + s + s]: "8",
    [l + l + l + l + s]: "9",
    [s + l + s + l + s + l]: ".",
    [l + l + s + s + l + l]: ",",
    [s + s + l + l + s + s]: "?",
    [s + l + l + l + l + s]: "'",
    [l + s + s + l + s]: "/",
    [l + s + l + l + s]: "(",
    [l + s + l + l + s + l]: ")",
    [s + l + s + s + s]: "&",
    [l + l + l + s + s + s]: ":",
    [l + s + l + s + l + s]: ";",
    [l + s + s + s + l]: "=",
    [s + l + s + l + s]: "+",
    [l + s + s + s + s + l]: "-",
    [s + s + l + l + s + l]: "_",
    [s + l + s + s + l + s]: '"',
    [s + s + s + l + s + s + l]: "$",
    [l + s + l + s + l + l]: "!",
    [s + l + l + s + l + s]: "@",
    [space]: " ",
  };

  return str
    .split("   ")
    .map((a) =>
      a
        .split(" ")
        .map((b) => alphabet[b])
        .join("")
    )
    .join(" ");
};

export default morseDecode;

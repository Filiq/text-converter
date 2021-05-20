const dutch = (str) => {
  const alphabet = {
    A: "Anton",
    B: "Bernard",
    C: "Cornelis",
    D: "Dirk",
    E: "Eduard",
    F: "Ferdinand",
    G: "Gerard",
    H: "Hendrik",
    I: "Izaak",
    J: "Johannes",
    K: "Karel",
    L: "Leo",
    M: "Maria",
    N: "Nico",
    O: "Otto",
    P: "Pieter",
    Q: "Quirinus",
    R: "Rudolf",
    S: "Simon",
    T: "Theodoor",
    U: "Utrecht",
    V: "Victor",
    W: "Willem",
    X: "Xantippe",
    Y: "Ypsilon",
    Z: "Zacharias",
    0: "Nul",
    1: "Een",
    2: "Twee",
    3: "Drie",
    4: "Vier",
    5: "Vijf",
    6: "Zes",
    7: "Zeven",
    8: "Acht",
    9: "Negen",
    " ": "(spatiebalk)",
  };

  str = str
    .toUpperCase()
    .split("")
    .map((char) => alphabet[char])
    .join(" ");

  return str;
};

export default dutch;

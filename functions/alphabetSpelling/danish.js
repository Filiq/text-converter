const danish = (str) => {
  const alphabet = {
    A: "Anna",
    Ä: "Ægir",
    Å: "Aase",
    B: "Bernhard",
    C: "Cecilie",
    D: "David",
    E: "Erik",
    F: "Frederik",
    G: "Georg",
    H: "Hans",
    I: "Ida",
    J: "Johan",
    K: "Karen",
    L: "Ludvig",
    M: "Mari",
    N: "Nikolaj",
    O: "Odin",
    Ö: "Øresund",
    P: "Peter",
    Q: "Quintus",
    R: "Rasmus",
    S: "Søren",
    T: "Theodor",
    U: "Ulla",
    V: "Viggo",
    W: "William",
    X: "Xerxes",
    Y: "Yrsa",
    Z: "Zackarias",
    0: "Nul",
    1: "En",
    2: "To",
    3: "Tre",
    4: "Fire",
    5: "Fem",
    6: "Seks",
    7: "Syv",
    8: "Otte",
    9: "Ni",
    " ": "(mellemrum)",
  };

  str = str
    .toUpperCase()
    .split("")
    .map((char) => alphabet[char])
    .join(" ");

  return str;
};

export default danish;

const norwegian = (str) => {
  const alphabet = {
    A: "Anna",
    Ä: "Ærlig",
    Å: "Åse",
    B: "Bernhard",
    C: "Caesar",
    D: "David",
    E: "Edith",
    F: "Fredrik",
    G: "Gustav",
    H: "Harald",
    I: "Ivar",
    J: "Johan",
    K: "Karin",
    L: "Ludvig",
    M: "Martin",
    N: "Nils",
    O: "Olivia",
    Ö: "Østen",
    P: "Petter",
    Q: "Quintus",
    R: "Rikard",
    S: "Sigrid",
    T: "Teodor",
    U: "Ulrik",
    V: "Enkelt-v",
    W: "Dobbelt-v",
    X: "Xerxes",
    Y: "Yngling",
    Z: "Zakarias",
    0: "Null",
    1: "En",
    2: "To",
    3: "Tre",
    4: "Fire",
    5: "Fem",
    6: "Seks",
    7: "Sju",
    8: "Åtte",
    9: "Ni",
    " ": "(mellomrom)",
  };

  str = str
    .toUpperCase()
    .split("")
    .map((char) => alphabet[char])
    .join(" ");

  return str;
};

export default norwegian;

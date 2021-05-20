const swedish = (str) => {
  const alphabet = {
    A: "Adam",
    Å: "Åke",
    Ä: "Ärlig",
    B: "Bertil",
    C: "Cesar",
    D: "David",
    E: "Erik",
    F: "Filip",
    G: "Gustav",
    H: "Helge",
    I: "Ivar",
    J: "Johan",
    K: "Kalle",
    L: "Ludvig",
    M: "Martin",
    N: "Niklas",
    O: "Olof",
    Ö: "Östen",
    P: "Petter",
    Q: "Qvintus",
    R: "Rudolf",
    S: "Sigurd",
    T: "Tore",
    U: "Urban",
    V: "Viktor",
    W: "Wilhelm",
    X: "Xerxes",
    Y: "Yngve",
    Z: "Zäta",
    0: "Nolla",
    1: "Ett",
    2: "Tvåa",
    3: "Trea",
    4: "Fyra",
    5: "Femma",
    6: "Sexa",
    7: "Sju",
    8: "Åtta",
    9: "Nia",
    " ": "(mellanslag)",
  };

  str = str
    .toUpperCase()
    .split("")
    .map((char) => alphabet[char])
    .join(" ");

  return str;
};

export default swedish;

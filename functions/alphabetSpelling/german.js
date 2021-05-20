const german = (str) => {
  const alphabet = {
    A: "Anto",
    Ä: "Ärger",
    B: "Berta",
    C: "Cäsar",
    D: "Dora",
    E: "Emil",
    F: "Friedrich",
    G: "Gustav",
    H: "Heinrich",
    I: "Ida",
    J: "Julius",
    K: "Kaufmann",
    L: "Ludwig",
    M: "Martha",
    N: "Nordpol",
    O: "Otto",
    Ö: "Ökonom",
    P: "Paula",
    Q: "Quelle",
    R: "Richard",
    S: "Samuel",
    T: "Theodor",
    U: "Ulrich",
    Ü: "Übermut",
    V: "Viktor",
    W: "Wilhelm",
    X: "Xanthippe",
    Y: "Ypsilon",
    Z: "Zacharias",
    0: "Null",
    1: "Eins",
    2: "Zwai",
    3: "Drei",
    4: "Vier",
    5: "Fünf",
    6: "Sechs",
    7: "Sieben",
    8: "Acht",
    9: "Neun",
    " ": "(leertaste)",
  };

  str = str
    .toUpperCase()
    .split("")
    .map((char) => alphabet[char])
    .join(" ");

  return str;
};

export default german;

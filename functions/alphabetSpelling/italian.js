const italian = (str) => {
  const alphabet = {
    A: "Ancona",
    B: "Bologna",
    C: "Como",
    D: "Domodossola",
    E: "Empoli",
    F: "Firenze",
    G: "Genova",
    H: "Hotel",
    I: "Imola",
    J: "Jolly",
    K: "Kursaal",
    L: "Livorno",
    M: "Milano",
    N: "Napoli",
    O: "Otranto",
    P: "Padova",
    Q: "Quarto",
    R: "Roma",
    S: "Savona",
    T: "Torino",
    U: "Udine",
    V: "Venezia",
    W: "Washington",
    X: "Xeres",
    Y: "Yacht",
    Z: "Zara",
    0: "Zero",
    1: "Uno",
    2: "Due",
    3: "Tre",
    4: "Quattro",
    5: "Cinque",
    6: "Sei",
    7: "Sette",
    8: "Otto",
    9: "Nove",
    " ": "(spazio)",
  };

  str = str
    .toUpperCase()
    .split("")
    .map((char) => alphabet[char])
    .join(" ");

  return str;
};

export default italian;

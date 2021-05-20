const french = (str) => {
  const alphabet = {
    A: "Anatole",
    B: "Berthe",
    C: "Célestin",
    D: "Désiré",
    E: "Eugène",
    F: "François",
    G: "Gaston",
    H: "Henri",
    I: "Irma",
    J: "Joseph",
    K: "Kléber",
    L: "Louis",
    M: "Marcel",
    N: "Nicolas",
    O: "Oscar",
    P: "Pierre",
    Q: "Quintal",
    R: "Raoul",
    S: "Suzanne",
    T: "Thérèse",
    U: "Ursule",
    V: "Victor",
    W: "William",
    X: "Xavier",
    Y: "Yvonne",
    Z: "Zoé",
    0: "Zéro",
    1: "Un",
    2: "Deux",
    3: "Trois",
    4: "Quatre",
    5: "Cinq",
    6: "Six",
    7: "Sept",
    8: "Huit",
    9: "Neuf",
    " ": "(espace)",
  };

  str = str
    .toUpperCase()
    .split("")
    .map((char) => alphabet[char])
    .join(" ");

  return str;
};

export default french;

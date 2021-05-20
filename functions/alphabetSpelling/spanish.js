const spanish = (str) => {
  const alphabet = {
    A: "Antonio",
    B: "Burgos",
    C: "Carmen",
    D: "Dolores",
    E: "España",
    F: "Francia",
    G: "Granada",
    H: "Historia",
    I: "Inés",
    J: "José",
    K: "Kilo",
    L: "Lorenzo",
    M: "Madrid",
    N: "Navarra",
    Ñ: "Ñoño",
    O: "Oviedo",
    P: "Paris",
    Q: "Queso",
    R: "Ramón",
    S: "Sábado",
    T: "Toledo",
    U: "Ulises",
    V: "Valencia",
    W: "Washington",
    X: "Xilófono",
    Y: "Yegua",
    Z: "Zaragoza",
    0: "Cero",
    1: "Uno",
    2: "Dos",
    3: "Tres",
    4: "Cuatro",
    5: "Cinco",
    6: "Seis",
    7: "Siete",
    8: "Ocho",
    9: "Nueve",
    " ": "(espacio)",
  };

  str = str
    .toUpperCase()
    .split("")
    .map((char) => alphabet[char])
    .join(" ");

  return str;
};

export default spanish;

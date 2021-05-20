const portuguese = (str) => {
  const alphabet = {
    A: "Aveiro",
    B: "Bragança",
    C: "Coimbra",
    D: "Dafundo",
    E: "Évora",
    F: "Faro",
    G: "Guarda",
    H: "Horta",
    I: "Itália",
    J: "José",
    K: "Kilograma",
    L: "Lisboa",
    M: "Maria",
    N: "Nazaré",
    O: "Ovar",
    P: "Porto",
    Q: "Queluz",
    R: "Rossio",
    S: "Setúbal",
    T: "Tavira",
    U: "Unidade",
    V: "Viseu",
    W: "Washington",
    X: "Xavier",
    Y: "York",
    Z: "Zulmira",
    0: "Zero",
    1: "Um",
    2: "Dois",
    3: "Três",
    4: "Quatro",
    5: "Cinco",
    6: "Seis",
    7: "Sete",
    8: "Oito",
    9: "Nove",
    " ": "(espaço)",
  };

  str = str
    .toUpperCase()
    .split("")
    .map((char) => alphabet[char])
    .join(" ");

  return str;
};

export default portuguese;

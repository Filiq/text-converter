const finnish = (str) => {
  const alphabet = {
    A: "Aarne",
    Å: "Åke",
    Ä: "Äiti",
    B: "Bertta",
    C: "Celsius	",
    D: "Daavid",
    E: "Eemeli",
    F: "Faarao",
    G: "Gideon",
    H: "Heikki",
    I: "Iivari",
    J: "Jussi",
    K: "Kalle",
    L: "Lauri",
    M: "Matti",
    N: "Niilo",
    O: "Otto",
    Ö: "Öljy",
    P: "Paavo",
    Q: "Kuu",
    R: "Risto",
    S: "Sakari",
    T: "Tyyne",
    U: "Urho",
    V: "Vihtori",
    W: "Wiski",
    X: "Äksä",
    Y: "Yrjö",
    Z: "Tseta",
    0: "Nolla",
    1: "Yksi",
    2: "Kaksi",
    3: "Kolme",
    4: "Neljä",
    5: "Viisi",
    6: "Kuusi",
    7: "Seitsemän",
    8: "Kahdeksan",
    9: "Yhdeksän",
    " ": "(tilaa)",
  };

  str = str
    .toUpperCase()
    .split("")
    .map((char) => alphabet[char])
    .join(" ");

  return str;
};

export default finnish;

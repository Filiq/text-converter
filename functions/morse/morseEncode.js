const morseEncode = (str, s, l, space) => {
  str = str.toLowerCase();
  const alphabet = {
    a: s + l,
    b: l + s + s + s,
    c: l + s + l + s,
    d: l + s + s,
    e: s,
    f: s + s + l + s,
    g: l + l + s,
    h: s + s + s + s,
    i: s + s,
    j: s + l + l + l,
    k: l + s + l,
    l: s + l + s + s,
    m: l + l,
    n: l + s,
    o: l + l + l,
    p: s + l + l + s,
    q: l + l + s + l,
    r: s + l + s,
    s: s + s + s,
    t: l,
    u: s + s + l,
    v: s + s + s + l,
    w: s + l + l,
    x: l + s + s + l,
    y: l + s + l + l,
    z: l + l + s + s,
    0: l + l + l + l + l,
    1: s + l + l + l + l,
    2: s + s + l + l + l,
    3: s + s + s + l + l,
    4: s + s + s + s + l,
    5: s + s + s + s + s,
    6: l + s + s + s + s,
    7: l + l + s + s + s,
    8: l + l + l + s + s,
    9: l + l + l + l + s,
    ".": s + l + s + l + s + l,
    ",": l + l + s + s + l + l,
    "?": s + s + l + l + s + s,
    "'": s + l + l + l + l + s,
    "/": l + s + s + l + s,
    "(": l + s + l + l + s,
    ")": l + s + l + l + s + l,
    "&": s + l + s + s + s,
    ":": l + l + l + s + s + s,
    ";": l + s + l + s + l + s,
    "=": l + s + s + s + l,
    "+": s + l + s + l + s,
    "-": l + s + s + s + s + l,
    _: s + s + l + l + s + l,
    '"': s + l + s + s + l + s,
    "`": s + l + s + s + l + s,
    $: s + s + s + l + s + s + l,
    "!": l + s + l + s + l + l,
    "@": s + l + l + s + l + s,
    " ": space,
  };

  return str
    .split("")
    .map((char) => alphabet[char] || "")
    .join(" ")
    .replace(/ +/g, " ");
};

export default morseEncode;

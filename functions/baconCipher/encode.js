const encode = (str, l1, l2) => {
  const alphabet = {
    a: l1 + l1 + l1 + l1 + l1,
    b: l1 + l1 + l1 + l1 + l2,
    c: l1 + l1 + l1 + l2 + l1,
    d: l1 + l1 + l1 + l2 + l2,
    e: l1 + l1 + l2 + l1 + l1,
    f: l1 + l1 + l2 + l1 + l2,
    g: l1 + l1 + l2 + l2 + l1,
    h: l1 + l1 + l2 + l2 + l2,
    i: l1 + l2 + l1 + l1 + l1,
    j: l1 + l2 + l1 + l1 + l1,
    k: l1 + l2 + l1 + l1 + l2,
    l: l1 + l2 + l1 + l2 + l1,
    m: l1 + l2 + l1 + l2 + l2,
    n: l1 + l2 + l2 + l1 + l1,
    o: l1 + l2 + l2 + l1 + l2,
    p: l1 + l2 + l2 + l2 + l1,
    q: l1 + l2 + l2 + l2 + l2,
    r: l2 + l1 + l1 + l1 + l1,
    s: l2 + l1 + l1 + l1 + l2,
    t: l2 + l1 + l1 + l2 + l1,
    u: l2 + l1 + l1 + l2 + l2,
    v: l2 + l1 + l1 + l2 + l2,
    w: l2 + l1 + l2 + l1 + l1,
    x: l2 + l1 + l2 + l1 + l2,
    y: l2 + l1 + l2 + l2 + l1,
    z: l2 + l1 + l2 + l2 + l2,
  };

  let encoded = [];

  str.split("").forEach((char) => {
    if (alphabet.hasOwnProperty(char)) {
      encoded.push(alphabet[char]);
      encoded.push(" ");
    }
  });

  encoded.pop();

  return encoded.join("");
};

export default encode;

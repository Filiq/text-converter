const alternate = (str) => {
  return str
    .split("")
    .map((el, index) => (index % 2 === 0 ? el.toLowerCase() : el.toUpperCase()))
    .join("");
};

export default alternate;

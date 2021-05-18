const inverse = (str) => {
  return str
    .split("")
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    )
    .join("");
};

export default inverse;

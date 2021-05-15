const capitalize = (str) => {
  return str
    .split(" ")
    .map((el) => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase())
    .join(" ");
};

export default capitalize;

const reverse = (str) => {
  if (str === "") return "";

  return str.split("").reverse().join("");
};

export default reverse;

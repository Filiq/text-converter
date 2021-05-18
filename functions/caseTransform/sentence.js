const sentence = (str) => {
  str =
    str[str.length - 1] !== "." &&
    str[str.length - 1] !== "?" &&
    str[str.length - 1] !== "!"
      ? (str += ".")
      : str;

  str = str.match(/\(?[^\.\?\!]+[\.!\?]\)?/g);

  str.forEach((el) => {
    if (
      el[el.length - 1] === "." ||
      el[el.length - 1] === "?" ||
      el[el.length - 1] === "!"
    ) {
      el.slice(1, 1).toUpperCase() + el.slice(2).toLowerCase();
    }
  });

  str = str.join("");

  function firstLetterUpper(theString) {
    var newString = theString
      .toLowerCase()
      .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
        return c.toUpperCase();
      });
    return newString;
  }

  return firstLetterUpper(str);
};

export default sentence;

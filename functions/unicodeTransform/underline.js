const underline = (str) => {
  let underlineStr = "";

  const translate = (char) => {
    return char + "\u0332";
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "\u0332") underlineStr += translate(str[i]);
  }

  return underlineStr;
};

export default underline;

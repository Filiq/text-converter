const strikethrough = (str) => {
  let strikethroughStr = "";

  const translate = (char) => {
    return char + "\u0336";
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "\u0336") strikethroughStr += translate(str[i]);
  }

  return strikethroughStr;
};

export default strikethrough;

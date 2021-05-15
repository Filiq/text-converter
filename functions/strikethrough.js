const strikethrough = (str) => {
  let strikethroughStr = "";

  const translate = (char) => {
    return char + "\u0336";
  };

  for (let i = 0; i < str.length; i++) {
    strikethroughStr += translate(str[i]);
  }

  return strikethroughStr;
};

export default strikethrough;

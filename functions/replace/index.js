const replace = (str, findValue, replaceValue, caseSensitivity) => {
  if (str === "" || findValue === "") return str;

  const regex = new RegExp(
    caseSensitivity ? findValue : findValue.toLowerCase(),
    "g"
  );

  return str.replace(regex, replaceValue);
};

export default replace;

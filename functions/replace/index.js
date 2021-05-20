const replace = (str, subcategory) => {
  const { findValue, replaceValue, caseSensitivity } = subcategory;

  if (str === "" || findValue === "") return "";

  const regex = new RegExp(
    caseSensitivity ? findValue : findValue.toLowerCase(),
    "g"
  );

  return str.replace(regex, replaceValue);
};

export default replace;

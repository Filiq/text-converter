const numeralSystem = (str, type) => {
  if (str === "" || isNaN(parseInt(str, 16))) return "";

  const { from, to } = type;

  return parseInt(
    str,
    from === "binary" ? 2 : from === "octal" ? 8 : from === "decimal" ? 10 : 16
  )
    .toString(
      to === "binary" ? 2 : to === "octal" ? 8 : to === "decimal" ? 10 : 16
    )
    .toUpperCase();
};

export default numeralSystem;

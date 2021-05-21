const words = (str) => {
  let wordCount = 0;
  let spaces = 0;
  str.split("\n").forEach((line) => {
    line.split(" ").forEach((word) => {
      if (word === "") {
        spaces++;
      }
    });

    wordCount += line.split(" ").length;
  });

  return wordCount - spaces;
};

export default words;

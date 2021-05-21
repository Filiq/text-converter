import chars from "./chars";
import words from "./words";
import lines from "./lines";

const counters = (str, type) => {
  switch (type) {
    case "chars":
      return chars(str);
    case "words":
      return words(str);
    case "lines":
      return lines(str);
  }
};

export default counters;

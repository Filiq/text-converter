import alternate from "./alternate";
import capitalize from "./capitalize";
import inverse from "./inverse";
import sentence from "./sentence";

const caseTransform = (str, type) => {
  if (str === "") return "";
  switch (type) {
    case "lower":
      return str.toLowerCase();
    case "upper":
      return str.toUpperCase();
    case "alternate":
      return alternate(str);
    case "capitalize":
      return capitalize(str);
    case "inverse":
      return inverse(str);
    case "sentence":
      return sentence(str);
    default:
      return str;
  }
};

export default caseTransform;

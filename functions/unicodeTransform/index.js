import bold from "./bold";
import italic from "./italic";
import boldItalic from "./boldItalic";
import strikethrough from "./strikethrough";
import underline from "./underline";
import upsideDown from "./upsideDown";
import wide from "./wide";

const unicodeTransform = (str, type) => {
  if (str === "") return "";
  switch (type) {
    case "bold":
      return bold(str);
    case "italic":
      return italic(str);
    case "boldItalic":
      return boldItalic(str);
    case "strikethrough":
      return strikethrough(str);
    case "underline":
      return underline(str);
    case "upsideDown":
      return upsideDown(str);
    case "wide":
      return wide(str);
    default:
      return str;
  }
};

export default unicodeTransform;

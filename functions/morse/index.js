import morseEncode from "./morseEncode";
import morseDecode from "./morseDecode";

const morse = (str, type) => {
  if (str === "") return "";
  switch (type) {
    case "encode":
      return morseEncode(str);
    case "decode":
      return morseDecode(str);
    default:
      return str;
  }
};

export default morse;

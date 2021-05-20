import morseEncode from "./morseEncode";
import morseDecode from "./morseDecode";

const morse = (str, subcategory) => {
  if (str === "") return "";

  const { type, short, long, space } = subcategory;

  switch (type) {
    case "encode":
      return morseEncode(str, short, long, space);
    case "decode":
      return morseDecode(str, short, long, space);
    default:
      return str;
  }
};

export default morse;

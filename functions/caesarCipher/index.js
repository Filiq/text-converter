import encode from "./encode";
import decode from "./decode";

const caesarCipher = (str, subcategory) => {
  if (str === "") return "";

  const { type, shift, alphabet, ignoreCase } = subcategory;

  switch (type) {
    case "encode":
      return encode(
        str,
        shift === "-" || shift === "" ? 0 : shift,
        alphabet,
        ignoreCase
      );
    case "decode":
      return decode(
        str,
        shift === "-" || shift === "" ? 0 : shift,
        alphabet,
        ignoreCase
      );
    default:
      return str;
  }
};

export default caesarCipher;

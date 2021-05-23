import caesarCipherEncode from "./caesarCipherEncode";
import caesarCipherDecode from "./caesarCipherDecode";

const caesarCipher = (str, subcategory) => {
  if (str === "") return "";

  const { type, shift, alphabet, ignoreCase } = subcategory;

  switch (type) {
    case "encode":
      return caesarCipherEncode(
        str,
        shift === "-" || shift === "" ? 0 : shift,
        alphabet,
        ignoreCase
      );
    case "decode":
      return caesarCipherDecode(
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

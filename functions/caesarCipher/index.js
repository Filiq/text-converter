import caesarCipherEncode from "./caesarCipherEncode";
import caesarCipherDecode from "./caesarCipherDecode";

const caesarCipher = (str, subcategory) => {
  if (str === "") return "";

  const { type, shift, alphabet, ignoreCase } = subcategory;

  switch (type) {
    case "encode":
      return caesarCipherEncode(str, shift, alphabet, ignoreCase);
    case "decode":
      return caesarCipherDecode(str, shift, alphabet, ignoreCase);
    default:
      return str;
  }
};

export default caesarCipher;

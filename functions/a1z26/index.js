import encode from "./encode";
import decode from "./decode";

const a1z26 = (str, subcategory) => {
  if (str === "") return "";

  const { type, separator, alphabet, ignoreCase } = subcategory;

  switch (type) {
    case "encode":
      return encode(str, separator, alphabet, ignoreCase);
    case "decode":
      return decode(str, separator, alphabet);
  }
};

export default a1z26;

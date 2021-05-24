import encode from "./encode";
import decode from "./decode";

const baconCipher = (str, subcategory) => {
  const { type, letter1, letter2 } = subcategory;

  switch (type) {
    case "encode":
      return encode(str, letter1, letter2);
    case "decode":
      return decode(str, letter1, letter2);
  }
};

export default baconCipher;

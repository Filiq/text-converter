import base64decode from "./base64decode";
import base64encode from "./base64encode";

const base64 = (str, type) => {
  switch (type) {
    case "encode":
      return base64encode(str);
    case "decode":
      return base64decode(str);
  }
};

export default base64;

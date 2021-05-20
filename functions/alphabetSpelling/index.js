import danish from "./danish";
import dutch from "./dutch";
import finnish from "./finnish";
import french from "./french";
import german from "./german";
import italian from "./italian";
import natoPhonetic from "./natoPhonetic";
import norwegian from "./norwegian";
import portuguese from "./portuguese";
import spanish from "./spanish";
import swedish from "./swedish";

const alphabestSpelling = (str, language) => {
  if (str === "") return "";

  switch (language) {
    case "nato":
      return natoPhonetic(str);
    case "german":
      return german(str);
    case "danish":
      return danish(str);
    case "dutch":
      return dutch(str);
    case "finnish":
      return finnish(str);
    case "french":
      return french(str);
    case "italian":
      return italian(str);
    case "norwegian":
      return norwegian(str);
    case "portuguese":
      return portuguese(str);
    case "swedish":
      return swedish(str);
    case "spanish":
      return spanish(str);
  }
};

export default alphabestSpelling;

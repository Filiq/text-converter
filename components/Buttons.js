import styled from "styled-components";
import alternate from "../functions/alternate";
import capitalize from "../functions/capitalize";
import inverse from "../functions/inverse";
import sentence from "../functions/sentence";
import spaces from "../functions/spaces";
import reverse from "../functions/reverse";
import bold from "../functions/bold";
import strikethrough from "../functions/strikethrough";
import upsideDown from "../functions/upsideDown";

const Buttons = ({ text, setText }) => {
  const changeText = (str) => {
    switch (str) {
      case "sentence":
        setText(sentence(text));
        break;
      case "lower":
        setText(text.toLowerCase());
        break;
      case "upper":
        setText(text.toUpperCase());
        break;
      case "capitalize":
        setText(capitalize(text));
        break;
      case "alternate":
        setText(alternate(text));
        break;
      case "inverse":
        setText(inverse(text));
        break;
      case "spaces":
        setText(spaces(text));
        break;
      case "reverse":
        setText(reverse(text));
        break;
      case "bold":
        setText(bold(text));
        break;
      case "strikethrough":
        setText(strikethrough(text));
        break;
      case "upsidedown":
        setText(upsideDown(text));
        break;
      case "copy":
        const textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
        break;
      case "clear":
        setText("");
        break;
      default:
        setText(text);
    }
  };

  return (
    <SCButtons>
      <button onClick={() => changeText("sentence")}>Sentence case</button>
      <button onClick={() => changeText("lower")}>lower case</button>
      <button onClick={() => changeText("upper")}>UPPER CASE</button>
      <button onClick={() => changeText("capitalize")}>Capitalized Case</button>
      <button onClick={() => changeText("alternate")}>aLtErNaTiNg cAsE</button>
      <button onClick={() => changeText("inverse")}>iNVERSE cASE</button>
      <button onClick={() => changeText("spaces")}>Remove Extra Spaces</button>
      <button onClick={() => changeText("reverse")}>Reverse Text</button>
      <button onClick={() => changeText("bold")}>Bold Text</button>
      <button onClick={() => changeText("strikethrough")}>
        Strikethrough Text
      </button>
      <button onClick={() => changeText("upsidedown")}>Upside Down Text</button>
      <button onClick={() => changeText("copy")}>Copy to Clipboard</button>
      <button onClick={() => changeText("clear")}>Clear Text</button>
    </SCButtons>
  );
};

const SCButtons = styled.div`
  width: 95%;
  height: 5rem;
  display: flex;
  align-items: center;

  button {
    padding: 0.25rem;
    font-family: inherit;
    margin-right: 0.5rem;
  }
`;

export default Buttons;

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
import italic from "../functions/italic";
import boldItalic from "../functions/boldItalic";
import underline from "../functions/underline";
import wide from "../functions/wide";

const Buttons = ({ text, setText }) => {
  const changeText = (str) => {
    if (text === "") return;
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
      case "italic":
        setText(italic(text));
        break;
      case "bolditalic":
        setText(boldItalic(text));
        break;
      case "strikethrough":
        setText(strikethrough(text));
        break;
      case "underline":
        setText(underline(text));
        break;
      case "upsidedown":
        setText(upsideDown(text));
        break;
      case "wide":
        setText(wide(text));
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
      <div className="mainButtons">
        <button onClick={() => changeText("sentence")}>Sentence case</button>
        <button onClick={() => changeText("lower")}>lower case</button>
        <button onClick={() => changeText("upper")}>UPPER CASE</button>
        <button onClick={() => changeText("capitalize")}>
          Capitalized Case
        </button>
        <button onClick={() => changeText("alternate")}>
          aLtErNaTiNg cAsE
        </button>
        <button onClick={() => changeText("inverse")}>iNVERSE cASE</button>
        <button onClick={() => changeText("spaces")}>
          Remove Extra Spaces
        </button>
        <button onClick={() => changeText("reverse")}>Reverse Text</button>
        <button onClick={() => changeText("bold")}>Bold Text</button>
        <button onClick={() => changeText("italic")}>Italic Text</button>
        <button onClick={() => changeText("bolditalic")}>
          Bold Italic Text
        </button>
        <button onClick={() => changeText("strikethrough")}>
          Strikethrough Text
        </button>
        <button onClick={() => changeText("underline")}>Underline Text</button>
        <button onClick={() => changeText("upsidedown")}>
          Upside Down Text
        </button>
        <button onClick={() => changeText("wide")}>Wide Text</button>
      </div>
      <div className="otherButtons">
        <button onClick={() => changeText("copy")}>Copy to Clipboard</button>
        <button onClick={() => changeText("clear")}>Clear Text</button>
      </div>
    </SCButtons>
  );
};

const SCButtons = styled.div`
  width: 95%;
  min-height: 5rem;
  margin: 0.5rem 0;
  display: flex;

  button {
    padding: 0.5rem;
    height: 2.5rem;
    width: 11rem;
    font-family: inherit;
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  .mainButtons {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    button {
      margin: 0.25rem 0.5rem;
      background-image: linear-gradient(
        to bottom right,
        #fff 50%,
        #f2f2f2 80%,
        #eee
      );
      color: #1f1f1f;
      border: 0;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      transition: all 0.1s ease;

      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.97);
      }
    }
  }

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;

    .mainButtons {
      justify-content: center;
    }
  }

  .otherButtons {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 1214px) {
      justify-content: flex-start;
      flex-direction: column;
    }

    button {
      margin: 0.25rem 0.5rem;
      background-image: linear-gradient(
        to bottom right,
        #373737 60%,
        #575757 85%,
        #777777
      );
      color: #f2f2f2;
      border: 0;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      font-weight: 400;
      transition: all 0.1s ease;

      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.97);
      }
    }
  }
`;

export default Buttons;

import styled from "styled-components";
import spaces from "../functions/spaces";
import reverse from "../functions/reverse";
import bold from "../functions/bold";
import strikethrough from "../functions/strikethrough";
import upsideDown from "../functions/upsideDown";
import italic from "../functions/italic";
import boldItalic from "../functions/boldItalic";
import underline from "../functions/underline";
import wide from "../functions/wide";
import morseEncode from "../functions/morseEncode";
import morseDecode from "../functions/morseDecode";

const Buttons = ({ text, setText }) => {
  const changeText = (str) => {
    if (text === "") return;
    switch (str) {
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
      case "morseencode":
        setText(morseEncode(text));
        break;
      case "morsedecode":
        setText(morseDecode(text));
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
        <button onClick={() => changeText("spaces")}>
          Remove Extra Spaces
        </button>
        <button onClick={() => changeText("bold")}>
          <b>Bold Text</b>
        </button>
        <button onClick={() => changeText("italic")}>
          <i>Italic Text</i>
        </button>
        <button onClick={() => changeText("bolditalic")}>
          <b>
            <i>Bold Italic Text</i>
          </b>
        </button>
        <button onClick={() => changeText("strikethrough")}>
          S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ ̶T̶e̶x̶t̶
        </button>
        <button onClick={() => changeText("underline")}>U̲n̲d̲e̲r̲l̲i̲n̲e̲ ̲T̲e̲x̲t̲</button>
        <button onClick={() => changeText("upsidedown")}>
          ʇxǝ┴ uʍoD ǝpısd∩
        </button>
        <button onClick={() => changeText("wide")}>Ｗｉｄｅ Ｔｅｘｔ</button>
        <button onClick={() => changeText("morseencode")}>Morse Encode</button>
        <button onClick={() => changeText("morsedecode")}>Morse Decode</button>
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

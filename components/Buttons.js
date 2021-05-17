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
import morseEncode from "../functions/morseEncode";
import morseDecode from "../functions/morseDecode";

const Buttons = ({ text, setText, setPlaceholder }) => {
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
        <button
          onClick={() => changeText("sentence")}
          onMouseEnter={() => setPlaceholder("Type (or paste) your text here.")}
        >
          Sentence case
        </button>
        <button
          onClick={() => changeText("lower")}
          onMouseEnter={() => setPlaceholder("type (or paste) your text here")}
        >
          lower case
        </button>
        <button
          onClick={() => changeText("upper")}
          onMouseEnter={() => setPlaceholder("TYPE (OR PASTE) YOUR TEXT HERE")}
        >
          UPPER CASE
        </button>
        <button
          onClick={() => changeText("capitalize")}
          onMouseEnter={() => setPlaceholder("Type (Or Paste) Your Text Here")}
        >
          Capitalized Case
        </button>
        <button
          onClick={() => changeText("alternate")}
          onMouseEnter={() => setPlaceholder("tYpE (oR PaStE) yOuR TeXt hErE")}
        >
          aLtErNaTiNg cAsE
        </button>
        <button
          onClick={() => changeText("inverse")}
          onMouseEnter={() => setPlaceholder("tYPE (OR PASTE) YOUR TEXT HERE")}
        >
          iNVERSE cASE
        </button>
        <button onClick={() => changeText("spaces")}>
          Remove Extra Spaces
        </button>
        <button
          onClick={() => changeText("reverse")}
          onMouseEnter={() => setPlaceholder("ereh txet ruoy )etsap ro( epyT")}
        >
          Reverse Text
        </button>
        <button
          onClick={() => changeText("bold")}
          onMouseEnter={() => setPlaceholder("𝗧𝘆𝗽𝗲 (𝗼𝗿 𝗽𝗮𝘀𝘁𝗲) 𝘆𝗼𝘂𝗿 𝘁𝗲𝘅𝘁 𝗵𝗲𝗿𝗲")}
        >
          <b>Bold Text</b>
        </button>
        <button
          onClick={() => changeText("italic")}
          onMouseEnter={() => setPlaceholder("𝘛𝘺𝘱𝘦 (𝘰𝘳 𝘱𝘢𝘴𝘵𝘦) 𝘺𝘰𝘶𝘳 𝘵𝘦𝘹𝘵 𝘩𝘦𝘳𝘦")}
        >
          <i>Italic Text</i>
        </button>
        <button
          onClick={() => changeText("bolditalic")}
          onMouseEnter={() => setPlaceholder("𝙏𝙮𝙥𝙚 (𝙤𝙧 𝙥𝙖𝙨𝙩𝙚) 𝙮𝙤𝙪𝙧 𝙩𝙚𝙭𝙩 𝙝𝙚𝙧𝙚")}
        >
          <b>
            <i>Bold Italic Text</i>
          </b>
        </button>
        <button
          onClick={() => changeText("strikethrough")}
          onMouseEnter={() => setPlaceholder("T̶y̶p̶e̶ ̶(̶o̶r̶ ̶p̶a̶s̶t̶e̶)̶ ̶y̶o̶u̶r̶ ̶t̶e̶x̶t̶ ̶h̶e̶r̶e̶")}
        >
          S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ ̶T̶e̶x̶t̶
        </button>
        <button
          onClick={() => changeText("underline")}
          onMouseEnter={() => setPlaceholder("T̲y̲p̲e̲ ̲(̲o̲r̲ ̲p̲a̲s̲t̲e̲)̲ ̲y̲o̲u̲r̲ ̲t̲e̲x̲t̲ ̲h̲e̲r̲e̲")}
        >
          U̲n̲d̲e̲r̲l̲i̲n̲e̲ ̲T̲e̲x̲t̲
        </button>
        <button
          onClick={() => changeText("upsidedown")}
          onMouseEnter={() => setPlaceholder("ǝɹǝɥ ʇxǝʇ ɹnoʎ (ǝʇsɐd ɹo) ǝdʎ┴")}
        >
          ʇxǝ┴ uʍoD ǝpısd∩
        </button>
        <button
          onClick={() => changeText("wide")}
          onMouseEnter={() =>
            setPlaceholder(
              "Ｔｙｐｅ (ｏｒ ｐａｓｔｅ) ｙｏｕｒ ｔｅｘｔ ｈｅｒｅ"
            )
          }
        >
          Ｗｉｄｅ Ｔｅｘｔ
        </button>
        <button
          onClick={() => changeText("morseencode")}
          onMouseEnter={() =>
            setPlaceholder(
              "- -.-- .--. . / -.--. --- .-. / .--. .- ... - . -.--.- / -.-- --- ..- .-. / - . -..- - / .... . .-. ."
            )
          }
        >
          Morse Encode
        </button>
        <button
          onClick={() => changeText("morsedecode")}
          onMouseEnter={() =>
            setPlaceholder(
              "- -.-- .--. . / -.--. --- .-. / .--. .- ... - . -.--.- / -.-- --- ..- .-. / - . -..- - / .... . .-. ."
            )
          }
        >
          Morse Decode
        </button>
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

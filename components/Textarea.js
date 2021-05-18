import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import caseTransform from "../functions/caseTransform";
import CaseOptions from "./options/CaseOptions";
import ReverseOptions from "./options/ReverseOptions";
import reverse from "../functions/reverse";

const Textarea = ({
  text,
  setText,
  openedSettings,
  setOpenedSettings,
  convertType,
  setConvertType,
}) => {
  const [convertedText, setConvertedText] = useState("");
  const textareaFromRef = useRef(null);
  const textareaToRef = useRef(null);
  const [characters, setCharacters] = useState(0);
  const [words, setWords] = useState(0);
  const [lines, setLines] = useState(0);

  useEffect(() => {
    let str = "";

    switch (convertType.category) {
      case "case":
        str = caseTransform(text, convertType.subcategory);
        break;
      case "reverse":
        str = reverse(text);
        break;
    }

    setConvertedText(str);

    let lineCount =
      text === "" ? 0 : textareaFromRef.current.value.split("\n").length;
    let wordCount = 0;
    let spaces = 0;
    text.split("\n").forEach((line) => {
      line.split(" ").forEach((word) => {
        if (word === "") {
          spaces++;
        }
      });

      wordCount += line.split(" ").length;
    });
    setCharacters(text.split("").length);
    setWords(wordCount - spaces);
    setLines(lineCount);
  }, [text, convertedText, convertType]);

  return (
    <SCTextarea>
      <div className="from">
        <div className="headline">
          <h3>From</h3>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={textareaFromRef}
        ></textarea>
      </div>
      <div className="settings">
        <div className="headline">
          <h3>
            {convertType.category === "case"
              ? "Case transform"
              : convertType.category === "reverse"
              ? "Reverse"
              : ""}
          </h3>
          <div
            className="settings-icon"
            onClick={() => setOpenedSettings(!openedSettings)}
          >
            <FontAwesomeIcon icon={faSortDown} size="2x" />
          </div>
        </div>
        <div className="options">
          {convertType.category === "case" ? (
            <CaseOptions
              convertType={convertType}
              setConvertType={setConvertType}
            />
          ) : convertType.category === "reverse" ? (
            <ReverseOptions />
          ) : (
            <></>
          )}
        </div>
        <div className="counters">
          <p>
            Characters: <span>{characters}</span> | Words: <span>{words}</span>{" "}
            | Lines: <span>{lines}</span>
          </p>
        </div>
      </div>
      <div className="to">
        <div className="headline">
          <h3>To</h3>
        </div>
        <textarea
          value={convertedText}
          onChange={(e) => setConvertedText(e.target.value)}
          ref={textareaToRef}
        ></textarea>
      </div>
    </SCTextarea>
  );
};

const SCTextarea = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .from,
  .to,
  .settings {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => props.theme.menuBackground};

    .headline {
      height: 2.5rem;
      padding-left: 0.75rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      .settings-icon {
        padding-right: 0.75rem;
        cursor: pointer;

        svg {
          margin-bottom: 0.75rem;
        }
      }
    }
  }

  .from,
  .to {
    border-radius: 0 0 1rem 1rem;
  }

  textarea {
    min-width: 28rem;
    resize: none;
    min-height: 10rem;
    font-family: inherit;
    padding: 0.5rem;
    border: 0;
    background: ${(props) => props.theme.textareaBackground};
    border-radius: 0 0 1rem 1rem;

    &:focus {
      outline: 0;
      border: 0;
    }
  }

  .settings {
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    min-height: 12.5rem;
    margin: 0 5rem;

    .select {
      height: 2.5rem;
      padding-left: 0.75rem;
      width: 100%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    .options {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding: 0.5rem 0.5rem 0.5rem 0.75rem;
      background: ${(props) => props.theme.textareaBackground};
      min-height: 7.5rem;

      h4 {
        padding: 0.5rem 0;
      }

      .option-radio {
        height: 2rem;
        display: flex;
        align-items: center;

        input {
          margin-right: 0.5rem;
        }
      }
    }

    .counters {
      display: flex;
      align-items: center;
      padding-left: 0.75rem;
      width: 100%;
      min-height: 2.5rem;
      background: ${(props) => props.theme.textareaBackground};
    }
  }
`;

export default Textarea;

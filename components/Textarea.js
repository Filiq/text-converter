import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const Textarea = ({ text, setText, placeholder }) => {
  const textareaRef = useRef(null);
  const [characters, setCharacters] = useState(0);
  const [words, setWords] = useState(0);
  const [lines, setLines] = useState(0);

  useEffect(() => {
    let lineCount =
      text === "" ? 0 : textareaRef.current.value.split("\n").length;
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
  }, [text]);

  return (
    <SCTextarea>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        ref={textareaRef}
      ></textarea>
      <div className="textInfo">
        <p>
          Characters: <span>{characters}</span> | Words: <span>{words}</span> |
          Lines: <span>{lines}</span>
        </p>
      </div>
    </SCTextarea>
  );
};

const SCTextarea = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  textarea {
    width: 95%;
    resize: vertical;
    min-height: 15rem;
    font-family: inherit;
    padding: 0.5rem;
    border: 0;
    box-shadow: 0 0 0 1pt #8c8c8c;

    &:focus {
      outline: 0;
      border: 0;
      box-shadow: 0 0 0 1.5pt #0060df;
    }
  }

  .textInfo {
    display: flex;
    align-items: center;
    width: 95%;
    height: 2.5rem;
  }
`;

export default Textarea;

import styled from "styled-components";

const Textarea = ({ text, setText }) => {
  return (
    <SCTextarea>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type (or paste) your text here"
      >
        {text}
      </textarea>
    </SCTextarea>
  );
};

const SCTextarea = styled.div`
  width: 100vw;
  display: flex;
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
`;

export default Textarea;

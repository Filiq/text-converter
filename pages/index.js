import GlobalStyle from "../styles/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import Textarea from "../components/Textarea";
import Buttons from "../components/Buttons";

export default function Home() {
  const theme = {
    background: "#fff",
  };

  const [text, setText] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SCMain>
        <div className="headline">
          <h2>Convert Case</h2>
        </div>
        <Textarea text={text} setText={setText} />
        <Buttons text={text} setText={setText} />
      </SCMain>
    </ThemeProvider>
  );
}

const SCMain = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .headline {
    width: 95%;
    margin: 2.5rem 0;
  }
`;

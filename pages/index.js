import GlobalStyle from "../styles/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import Settings from "../components/Settings";
import Textarea from "../components/Textarea";
import Buttons from "../components/Buttons";

export default function Home() {
  const theme = {
    background: "#121212",
    menuBackground: "#e1e1e1",
    textareaBackground: "#f2f2f2",
  };

  const [text, setText] = useState("");
  const [openedSettings, setOpenedSettings] = useState(false);
  const [convertType, setConvertType] = useState({
    category: "case",
    subcategory: "lower",
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Settings
        openedSettings={openedSettings}
        setOpenedSettings={setOpenedSettings}
        convertType={convertType}
        setConvertType={setConvertType}
      />
      <SCMain>
        <div className="main-headline">
          <h2>Text Converter</h2>
        </div>
        <Textarea
          text={text}
          setText={setText}
          openedSettings={openedSettings}
          setOpenedSettings={setOpenedSettings}
          convertType={convertType}
          setConvertType={setConvertType}
        />
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

  .main-headline {
    width: 95%;
    margin: 2.5rem 0;
  }
`;

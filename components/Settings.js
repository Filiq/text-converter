import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Settings = ({
  openedSettings,
  setOpenedSettings,
  convertType,
  setConvertType,
}) => {
  const settingsVariants = {
    hidden: {
      y: -420,
      x: "-50%",
      transition: {
        ease: "easeOut",
      },
    },
    show: {
      y: 0,
      x: "-50%",
      transition: {
        ease: "easeIn",
      },
    },
  };
  const backgroundVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  const handleClick = (category, subcategory, title) => {
    setOpenedSettings(false);
    setConvertType({ ...convertType, category, subcategory, title });
  };

  return (
    <>
      <SCSettings
        variants={settingsVariants}
        initial="hidden"
        animate={openedSettings ? "show" : "hidden"}
      >
        <header>
          <div>
            <h2>Settings</h2>
          </div>
          <div className="close-icon" onClick={() => setOpenedSettings(false)}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </div>
        </header>
        <section>
          <SCOptions>
            <h3>Transform</h3>
            <div>
              <button
                onClick={() => handleClick("case", "lower", "Case Transform")}
              >
                Case Transform
              </button>
              <button
                onClick={() =>
                  handleClick(
                    "numeralSystem",
                    { from: "binary", to: "binary" },
                    "Numeral System"
                  )
                }
              >
                Numeral System
              </button>
              <button
                onClick={() =>
                  handleClick(
                    "replace",
                    { findValue: "", replaceValue: "", caseSensitivity: false },
                    "Replace"
                  )
                }
              >
                Replace
              </button>
              <button onClick={() => handleClick("reverse", "", "Reverse")}>
                Reverse
              </button>
              <button
                onClick={() =>
                  handleClick("unicode", "bold", "Unicode Transform")
                }
              >
                Unicode Transform
              </button>
            </div>
          </SCOptions>
          <SCOptions>
            <h3>Alphabets</h3>
            <div>
              <button
                onClick={() =>
                  handleClick(
                    "morse",
                    { type: "encode", short: ".", long: "-", space: "/" },
                    "Morse"
                  )
                }
              >
                Morse code
              </button>
              <button
                onClick={() =>
                  handleClick("alphabet", "nato", "Alphabet Spelling")
                }
              >
                Alphabet Spelling
              </button>
            </div>
          </SCOptions>
          <SCOptions>
            <h3>Ciphers</h3>
            <div>
              <button
                onClick={() =>
                  handleClick(
                    "a1z26",
                    {
                      type: "encode",
                      separator: " ",
                      alphabet: "abcdefghijklmnopqrstuvwxyz",
                      ignoreCase: true,
                    },
                    "A1Z26"
                  )
                }
              >
                A1Z26
              </button>
              <button
                onClick={() =>
                  handleClick(
                    "baconCipher",
                    {
                      type: "encode",
                      letter1: "a",
                      letter2: "b",
                    },
                    "Bacon Cipher"
                  )
                }
              >
                Bacon Cipher
              </button>
              <button
                onClick={() =>
                  handleClick(
                    "caesarCipher",
                    {
                      type: "encode",
                      shift: 5,
                      alphabet: "abcdefghijklmnopqrstuvwxyz",
                      ignoreCase: true,
                    },
                    "Caesar Cipher"
                  )
                }
              >
                Caesar Cipher
              </button>
            </div>
          </SCOptions>
          <SCOptions>
            <h3>Encoding</h3>
            <div>
              <button onClick={() => handleClick("base64", "encode", "Base64")}>
                Base64
              </button>
            </div>
          </SCOptions>
        </section>
      </SCSettings>
      {openedSettings && (
        <SCBackground
          variants={backgroundVariants}
          initial="hidden"
          animate={openedSettings ? "show" : "hidden"}
          onClick={() => setOpenedSettings(false)}
        ></SCBackground>
      )}
    </>
  );
};

const SCSettings = styled(motion.div)`
  position: fixed;
  min-width: 45rem;
  left: 50%;
  top: 0;
  z-index: 2;
  background: ${(props) => props.theme.menuBackground};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 2.5rem;
    background: ${(props) => props.theme.textareaBackground};

    &:first-child {
      padding-left: 1rem;
    }

    .close-icon {
      padding-right: 1rem;
      cursor: pointer;
    }
  }
`;

const SCOptions = styled.div`
  padding: 0 1rem;
  background: ${(props) => props.theme.menuBackground};

  h3 {
    padding: 1rem 0;
  }

  div {
    display: flex;
    flex-wrap: wrap;

    button {
      padding: 0.5rem 1rem;
      margin: 0 0.5rem 0.5rem 0;
      border: 0;
      border-radius: 0.25rem;
      background: ${(props) => props.theme.background};
      color: ${(props) => props.theme.textareaBackground};
      font-family: inherit;
      cursor: pointer;
    }
  }
`;

const SCBackground = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export default Settings;

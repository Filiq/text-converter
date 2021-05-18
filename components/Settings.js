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
      y: -230,
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

  const handleClick = (category, subcategory) => {
    setOpenedSettings(false);
    setConvertType({ ...convertType, category, subcategory });
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
              <button onClick={() => handleClick("case", "lower")}>
                Case transform
              </button>
              <button>Numeral system</button>
              <button>Replace</button>
              <button onClick={() => handleClick("reverse", "")}>
                Reverse
              </button>
            </div>
          </SCOptions>
          <SCOptions>
            <h3>Alphabets</h3>
            <div>
              <button>Morse code</button>
              <button>Spelling alphabet</button>
              <button>Replace</button>
              <button>Reverse</button>
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

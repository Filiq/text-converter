import { useState, useEffect } from "react";

const A1z26Options = ({ convertType, setConvertType }) => {
  const [alphabetError, setAlphabetError] = useState({
    active: false,
    msg: "",
  });
  const [separatorError, setSeparatorError] = useState({
    active: false,
    msg: "",
  });

  useEffect(() => {
    if (convertType.subcategory.separator.length < 1) {
      setSeparatorError({
        active: true,
        msg: "Separator must be at least 1 char long",
      });
    } else {
      setSeparatorError({ active: false, msg: "" });
    }

    if (convertType.subcategory.alphabet.length < 2) {
      setAlphabetError({
        active: true,
        msg: "Alphabet must be at least 2 chars long",
      });
    } else if (convertType.subcategory.ignoreCase) {
      const sorted = convertType.subcategory.alphabet
        .toLowerCase()
        .split("")
        .sort();

      for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) {
          setAlphabetError({
            active: true,
            msg: "Alphabet cannot contains duplicate chars",
          });
        }
      }
    } else {
      const sorted = convertType.subcategory.alphabet.split("").sort();

      for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) {
          setAlphabetError({
            active: true,
            msg: "Alphabet cannot contains duplicate charsX",
          });
          break;
        }
        setAlphabetError({ active: false, msg: "" });
      }
    }
  }, [convertType]);

  return (
    <>
      <h4>A1Z26</h4>
      <div className="option-radio">
        <input
          type="radio"
          name="a1z26"
          id="encode"
          value="Encode"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: {
                type: "encode",
                separator: convertType.subcategory.separator,
                alphabet: convertType.subcategory.alphabet,
                ignoreCase: convertType.subcategory.ignoreCase,
              },
            })
          }
          checked={convertType.subcategory.type === "encode"}
        />
        <label htmlFor="encode">Encode</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="a1z26"
          id="decode"
          value="Decode"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: {
                type: "decode",
                separator: convertType.subcategory.separator,
                alphabet: convertType.subcategory.alphabet,
                ignoreCase: convertType.subcategory.ignoreCase,
              },
            })
          }
          checked={convertType.subcategory.type === "decode"}
        />
        <label htmlFor="decode">Decode</label>
      </div>
      <div className="option-long">
        <label
          htmlFor="separator"
          className={separatorError.active ? "error" : ""}
        >
          {separatorError.active ? separatorError.msg : "Separator"}
        </label>
        <input
          type="text"
          name="separator"
          id="separator"
          value={convertType.subcategory.separator}
          onChange={(e) =>
            setConvertType({
              ...convertType,
              subcategory: {
                type: convertType.subcategory.type,
                separator: e.target.value,
                alphabet: convertType.subcategory.alphabet,
                ignoreCase: convertType.subcategory.ignoreCase,
              },
            })
          }
        />
      </div>
      <div className="option-long">
        <label
          htmlFor="alphabet"
          className={alphabetError.active ? "error" : ""}
        >
          {alphabetError.active ? alphabetError.msg : "Alphabet"}
        </label>
        <input
          type="text"
          name="alphabet"
          id="alphabet"
          value={convertType.subcategory.alphabet}
          onChange={(e) =>
            setConvertType({
              ...convertType,
              subcategory: {
                type: convertType.subcategory.type,
                separator: convertType.subcategory.separator,
                alphabet: e.target.value,
                ignoreCase: convertType.subcategory.ignoreCase,
              },
            })
          }
        />
      </div>
      <div className="option-no-yes">
        <label htmlFor="replace">Ignore Case</label>
        <p>
          <span
            onClick={() =>
              setConvertType({
                ...convertType,
                subcategory: {
                  type: convertType.subcategory.type,
                  separator: convertType.subcategory.separator,
                  alphabet: convertType.subcategory.alphabet,
                  ignoreCase: false,
                },
              })
            }
          >
            {convertType.subcategory.ignoreCase ? "No" : <b>No</b>}
          </span>
          <span
            onClick={() =>
              setConvertType({
                ...convertType,
                subcategory: {
                  type: convertType.subcategory.type,
                  separator: convertType.subcategory.separator,
                  alphabet: convertType.subcategory.alphabet,
                  ignoreCase: true,
                },
              })
            }
          >
            {convertType.subcategory.ignoreCase ? <b>Yes</b> : "Yes"}
          </span>
        </p>
      </div>
    </>
  );
};

export default A1z26Options;

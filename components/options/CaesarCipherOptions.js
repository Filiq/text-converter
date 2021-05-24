import { useState, useEffect } from "react";

const CaesarCipherOptions = ({ convertType, setConvertType }) => {
  const formatShift = (num) => {
    if (num > convertType.subcategory.alphabet.length - 1) {
      num = num % convertType.subcategory.alphabet.length;
    }

    while (num < 0) {
      num = convertType.subcategory.alphabet.length - Math.abs(num);
    }

    return num;
  };

  const [error, setError] = useState({ active: false, msg: "" });

  useEffect(() => {
    if (convertType.subcategory.alphabet.length < 2)
      return setError({
        active: true,
        msg: "Value must be at least 2 chars long",
      });

    if (convertType.subcategory.ignoreCase) {
      const sorted = convertType.subcategory.alphabet.toLowerCase().split("");

      for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) {
          return setError({
            active: true,
            msg: "Value cannot contains duplicate chars",
          });
        }
      }
    }

    setError({ active: false, msg: "" });
  }, [convertType]);

  return (
    <>
      <h4>Caesar Cipher</h4>
      <div className="option-radio">
        <input
          type="radio"
          name="caesarCipher"
          id="encode"
          value="Encode"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: {
                type: "encode",
                shift: convertType.subcategory.shift,
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
          name="caesarCipher"
          id="decode"
          value="Decode"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: {
                type: "decode",
                shift: convertType.subcategory.shift,
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
        <label htmlFor="shift">Shift</label>
        <div className="option-number">
          <button
            onClick={() =>
              setConvertType({
                ...convertType,
                subcategory: {
                  type: convertType.subcategory.type,
                  shift:
                    convertType.subcategory.shift === ""
                      ? -1
                      : convertType.subcategory.shift - 1,
                  alphabet: convertType.subcategory.alphabet,
                  ignoreCase: convertType.subcategory.ignoreCase,
                },
              })
            }
          >
            -
          </button>
          <input
            type="text"
            name="shift"
            id="shift"
            value={convertType.subcategory.shift}
            onChange={(e) =>
              setConvertType({
                ...convertType,
                subcategory: {
                  type: convertType.subcategory.type,
                  shift: !isNaN(parseInt(e.target.value))
                    ? parseInt(e.target.value)
                    : e.target.value === ""
                    ? ""
                    : e.target.value === "-"
                    ? "-"
                    : convertType.subcategory.shift,
                  alphabet: convertType.subcategory.alphabet,
                  ignoreCase: convertType.subcategory.ignoreCase,
                },
              })
            }
          />
          {error.active ||
          convertType.subcategory.shift === "" ||
          convertType.subcategory.shift === "-" ? (
            ""
          ) : (
            <span className="number-description">
              {convertType.subcategory.alphabet[0]}→
              {
                convertType.subcategory.alphabet[
                  formatShift(convertType.subcategory.shift)
                ]
              }
            </span>
          )}
          <button
            onClick={() =>
              setConvertType({
                ...convertType,
                subcategory: {
                  type: convertType.subcategory.type,
                  shift:
                    convertType.subcategory.shift === ""
                      ? 1
                      : convertType.subcategory.shift + 1,
                  alphabet: convertType.subcategory.alphabet,
                  ignoreCase: convertType.subcategory.ignoreCase,
                },
              })
            }
          >
            +
          </button>
        </div>
      </div>

      <div className="option-long">
        <label htmlFor="alphabet" className={error.active ? "error" : ""}>
          {error.active ? error.msg : "Alphabet"}
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
                shift: convertType.subcategory.shift,
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
                  shift: convertType.subcategory.shift,
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
                  shift: convertType.subcategory.shift,
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

export default CaesarCipherOptions;

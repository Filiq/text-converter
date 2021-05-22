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
          <span className="number-description">
            {convertType.subcategory.alphabet[0]}→
            {
              convertType.subcategory.alphabet[
                formatShift(convertType.subcategory.shift)
              ]
            }
          </span>
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
        <label htmlFor="alphabet">Alphabet</label>
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

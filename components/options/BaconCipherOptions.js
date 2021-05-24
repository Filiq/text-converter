const BaconCipherOptions = ({ convertType, setConvertType }) => {
  return (
    <>
      <h4>Bacon Cipher</h4>
      <div className="option-radio">
        <input
          type="radio"
          name="baconCipher"
          id="encode"
          value="Encode"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: {
                type: "encode",
                letter1: convertType.subcategory.letter1,
                letter2: convertType.subcategory.letter2,
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
          name="baconCipher"
          id="decode"
          value="Decode"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: {
                type: "decode",
                letter1: convertType.subcategory.letter1,
                letter2: convertType.subcategory.letter2,
              },
            })
          }
          checked={convertType.subcategory.type === "decode"}
        />
        <label htmlFor="decode">Decode</label>
      </div>
      <div className="option-short-text-container">
        <div className="option-long">
          <label htmlFor="letter1">Letter 1</label>
          <input
            type="text"
            name="letter1"
            id="letter1"
            value={convertType.subcategory.letter1}
            onChange={(e) =>
              setConvertType({
                ...convertType,
                subcategory: {
                  type: convertType.subcategory.type,
                  letter1: e.target.value,
                  letter2: convertType.subcategory.letter2,
                },
              })
            }
          />
        </div>
        <div className="option-long">
          <label htmlFor="letter2">Letter 2</label>
          <input
            type="text"
            name="letter2"
            id="letter2"
            value={convertType.subcategory.letter2}
            onChange={(e) =>
              setConvertType({
                ...convertType,
                subcategory: {
                  type: convertType.subcategory.type,
                  letter1: convertType.subcategory.letter1,
                  letter2: e.target.value,
                },
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default BaconCipherOptions;

const MorseOptions = ({ convertType, setConvertType }) => {
  return (
    <>
      <h4>Morse</h4>
      <div className="option-radio">
        <input
          type="radio"
          name="morse"
          id="encode"
          value="Encode"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: {
                type: "encode",
                short: convertType.subcategory.short,
                long: convertType.subcategory.long,
                space: convertType.subcategory.space,
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
          name="morse"
          id="decode"
          value="Decode"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: {
                type: "decode",
                short: convertType.subcategory.short,
                long: convertType.subcategory.long,
                space: convertType.subcategory.space,
              },
            })
          }
          checked={convertType.subcategory.type === "decode"}
        />
        <label htmlFor="decode">Decode</label>
      </div>
      <div className="option-short-text-container">
        <div className="option-text">
          <label htmlFor="short">Short</label>
          <input
            type="text"
            name="short"
            id="short"
            value={convertType.subcategory.short}
            onChange={(e) =>
              setConvertType({
                ...convertType,
                subcategory: {
                  type: convertType.subcategory.type,
                  short: e.target.value,
                  long: convertType.subcategory.long,
                  space: convertType.subcategory.space,
                },
              })
            }
          />
        </div>
        <div className="option-text">
          <label htmlFor="long">Long</label>
          <input
            type="text"
            name="long"
            id="long"
            value={convertType.subcategory.long}
            onChange={(e) =>
              setConvertType({
                ...convertType,
                subcategory: {
                  type: convertType.subcategory.type,
                  short: convertType.subcategory.short,
                  long: e.target.value,
                  space: convertType.subcategory.space,
                },
              })
            }
          />
        </div>
        <div className="option-text">
          <label htmlFor="space">Space</label>
          <input
            type="text"
            name="space"
            id="space"
            value={convertType.subcategory.space}
            onChange={(e) =>
              setConvertType({
                ...convertType,
                subcategory: {
                  type: convertType.subcategory.type,
                  short: convertType.subcategory.short,
                  long: convertType.subcategory.long,
                  space: e.target.value,
                },
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default MorseOptions;

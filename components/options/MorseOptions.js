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
            setConvertType({ ...convertType, subcategory: "encode" })
          }
          checked={convertType.subcategory === "encode"}
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
            setConvertType({ ...convertType, subcategory: "decode" })
          }
          checked={convertType.subcategory === "decode"}
        />
        <label htmlFor="decode">Decode</label>
      </div>
    </>
  );
};

export default MorseOptions;

const Base64Options = ({ convertType, setConvertType }) => {
  return (
    <>
      <h4>Base 64 (RFC 2045)</h4>
      <div className="option-radio">
        <input
          type="radio"
          name="base64"
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
          name="base64"
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

export default Base64Options;

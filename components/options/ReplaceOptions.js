const ReplaceOptions = ({ convertType, setConvertType }) => {
  return (
    <>
      <h4>Replace</h4>
      <div className="option-long">
        <label htmlFor="find">Find</label>
        <input
          type="text"
          name="find"
          id="find"
          value={convertType.subcategory.findValue}
          onChange={(e) =>
            setConvertType({
              ...convertType,
              subcategory: {
                findValue: e.target.value,
                replaceValue: convertType.subcategory.replaceValue,
                caseSensitivity: convertType.subcategory.caseSensitivity,
              },
            })
          }
        />
      </div>
      <div className="option-long">
        <label htmlFor="replace">Replace</label>
        <input
          type="text"
          name="replace"
          id="replace"
          value={convertType.subcategory.replaceValue}
          onChange={(e) =>
            setConvertType({
              ...convertType,
              subcategory: {
                findValue: convertType.subcategory.findValue,
                replaceValue: e.target.value,
                caseSensitivity: convertType.subcategory.caseSensitivity,
              },
            })
          }
        />
      </div>
      <div className="option-no-yes">
        <label htmlFor="replace">Case Sensitivity</label>
        <p>
          <span
            onClick={() =>
              setConvertType({
                ...convertType,
                subcategory: {
                  findValue: convertType.subcategory.findValue,
                  replaceValue: convertType.subcategory.replaceValue,
                  caseSensitivity: false,
                },
              })
            }
          >
            {convertType.subcategory.caseSensitivity ? "No" : <b>No</b>}
          </span>
          <span
            onClick={() =>
              setConvertType({
                ...convertType,
                subcategory: {
                  findValue: convertType.subcategory.findValue,
                  replaceValue: convertType.subcategory.replaceValue,
                  caseSensitivity: true,
                },
              })
            }
          >
            {convertType.subcategory.caseSensitivity ? <b>Yes</b> : "Yes"}
          </span>
        </p>
      </div>
    </>
  );
};

export default ReplaceOptions;

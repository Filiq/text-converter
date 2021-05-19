const ReplaceOptions = ({
  findValue,
  replaceValue,
  setFindValue,
  setReplaceValue,
  caseSensitivity,
  setCaseSensitivity,
}) => {
  return (
    <>
      <h4>Replace</h4>
      <div className="option-text">
        <label htmlFor="find">Find</label>
        <input
          type="text"
          name="find"
          id="find"
          value={findValue}
          onChange={(e) => setFindValue(e.target.value)}
        />
      </div>
      <div className="option-text">
        <label htmlFor="replace">Replace</label>
        <input
          type="text"
          name="replace"
          id="replace"
          value={replaceValue}
          onChange={(e) => setReplaceValue(e.target.value)}
        />
      </div>
      <div className="option-no-yes">
        <label htmlFor="replace">Case Sensitivity</label>
        <p>
          <span onClick={() => setCaseSensitivity(false)}>
            {caseSensitivity ? "No" : <b>No</b>}
          </span>
          <span onClick={() => setCaseSensitivity(true)}>
            {caseSensitivity ? <b>Yes</b> : "Yes"}
          </span>
        </p>
      </div>
    </>
  );
};

export default ReplaceOptions;

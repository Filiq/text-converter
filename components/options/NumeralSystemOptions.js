const NumeralSystemOptions = ({ convertType, setConvertType }) => {
  return (
    <>
      <h4>From</h4>
      <div className="option-radio">
        <input
          type="radio"
          name="from"
          id="binaryFrom"
          value="Binary"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: { from: "binary", to: convertType.subcategory.to },
            })
          }
          checked={convertType.subcategory.from === "binary"}
        />
        <label htmlFor="binaryFrom">Binary (2)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="from"
          id="octalFrom"
          value="Octal"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: { from: "octal", to: convertType.subcategory.to },
            })
          }
          checked={convertType.subcategory.from === "octal"}
        />
        <label htmlFor="octalFrom">Octal (8)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="from"
          id="decimalFrom"
          value="Decimal"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: { from: "decimal", to: convertType.subcategory.to },
            })
          }
          checked={convertType.subcategory.from === "decimal"}
        />
        <label htmlFor="decimalFrom">Decimal (10)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="from"
          id="hexadecimalFrom"
          value="Hexadecimal"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: {
                from: "hexadecimal",
                to: convertType.subcategory.to,
              },
            })
          }
          checked={convertType.subcategory.from === "hexadecimal"}
        />
        <label htmlFor="hexadecimalFrom">Hexadecimal (16)</label>
      </div>
      <h4>To</h4>
      <div className="option-radio">
        <input
          type="radio"
          name="to"
          id="binaryTo"
          value="Binary"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: {
                from: convertType.subcategory.from,
                to: "binary",
              },
            })
          }
          checked={convertType.subcategory.to === "binary"}
        />
        <label htmlFor="binaryTo">Binary (2)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="to"
          id="octalTo"
          value="Octal"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: {
                from: convertType.subcategory.from,
                to: "octal",
              },
            })
          }
          checked={convertType.subcategory.to === "octal"}
        />
        <label htmlFor="octalTo">Octal (8)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="to"
          id="decimalTo"
          value="Decimal"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: {
                from: convertType.subcategory.from,
                to: "decimal",
              },
            })
          }
          checked={convertType.subcategory.to === "decimal"}
        />
        <label htmlFor="decimalTo">Decimal (10)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="to"
          id="hexadecimalTo"
          value="Hexadecimal"
          onChange={() =>
            setConvertType({
              ...convertType,
              subcategory: {
                from: convertType.subcategory.from,
                to: "hexadecimal",
              },
            })
          }
          checked={convertType.subcategory.to === "hexadecimal"}
        />
        <label htmlFor="hexadecimalTo">Hexadecimal (16)</label>
      </div>
    </>
  );
};

export default NumeralSystemOptions;

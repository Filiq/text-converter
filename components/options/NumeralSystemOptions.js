const NumeralSystemOptions = ({
  fromSystem,
  setFromSystem,
  toSystem,
  setToSystem,
}) => {
  return (
    <>
      <h4>From</h4>
      <div className="option-radio">
        <input
          type="radio"
          name="from"
          id="binaryFrom"
          value="Binary"
          onChange={() => setFromSystem("binary")}
          checked={fromSystem === "binary"}
        />
        <label htmlFor="binaryFrom">Binary (2)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="from"
          id="octalFrom"
          value="Octal"
          onChange={() => setFromSystem("octal")}
          checked={fromSystem === "octal"}
        />
        <label htmlFor="octalFrom">Octal (8)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="from"
          id="decimalFrom"
          value="Decimal"
          onChange={() => setFromSystem("decimal")}
          checked={fromSystem === "decimal"}
        />
        <label htmlFor="decimalFrom">Decimal (10)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="from"
          id="hexadecimalFrom"
          value="Hexadecimal"
          onChange={() => setFromSystem("hexadecimal")}
          checked={fromSystem === "hexadecimal"}
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
          onChange={() => setToSystem("binary")}
          checked={toSystem === "binary"}
        />
        <label htmlFor="binaryTo">Binary (2)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="to"
          id="octalTo"
          value="Octal"
          onChange={() => setToSystem("octal")}
          checked={toSystem === "octal"}
        />
        <label htmlFor="octalTo">Octal (8)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="to"
          id="decimalTo"
          value="Decimal"
          onChange={() => setToSystem("decimal")}
          checked={toSystem === "decimal"}
        />
        <label htmlFor="decimalTo">Decimal (10)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="to"
          id="hexadecimalTo"
          value="Hexadecimal"
          onChange={() => setToSystem("hexadecimal")}
          checked={toSystem === "hexadecimal"}
        />
        <label htmlFor="hexadecimalTo">Hexadecimal (16)</label>
      </div>
    </>
  );
};

export default NumeralSystemOptions;

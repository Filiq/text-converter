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
          id="binary"
          value="Binary"
          onChange={() => setFromSystem("binary")}
          checked={fromSystem === "binary"}
        />
        <label htmlFor="binary">Binary (2)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="from"
          id="octal"
          value="Octal"
          onChange={() => setFromSystem("octal")}
          checked={fromSystem === "octal"}
        />
        <label htmlFor="octal">Octal (8)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="from"
          id="decimal"
          value="Decimal"
          onChange={() => setFromSystem("decimal")}
          checked={fromSystem === "decimal"}
        />
        <label htmlFor="decimal">Decimal (10)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="from"
          id="hexadecimal"
          value="Hexadecimal"
          onChange={() => setFromSystem("hexadecimal")}
          checked={fromSystem === "hexadecimal"}
        />
        <label htmlFor="hexadecimal">Hexadecimal (16)</label>
      </div>
      <h4>To</h4>
      <div className="option-radio">
        <input
          type="radio"
          name="to"
          id="binary"
          value="Binary"
          onChange={() => setToSystem("binary")}
          checked={toSystem === "binary"}
        />
        <label htmlFor="binary">Binary (2)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="to"
          id="octal"
          value="Octal"
          onChange={() => setToSystem("octal")}
          checked={toSystem === "octal"}
        />
        <label htmlFor="octal">Octal (8)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="to"
          id="decimal"
          value="Decimal"
          onChange={() => setToSystem("decimal")}
          checked={toSystem === "decimal"}
        />
        <label htmlFor="decimal">Decimal (10)</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="to"
          id="hexadecimal"
          value="Hexadecimal"
          onChange={() => setToSystem("hexadecimal")}
          checked={toSystem === "hexadecimal"}
        />
        <label htmlFor="hexadecimal">Hexadecimal (16)</label>
      </div>
    </>
  );
};

export default NumeralSystemOptions;

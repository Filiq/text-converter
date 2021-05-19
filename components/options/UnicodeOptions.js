const CaseOptions = ({ convertType, setConvertType }) => {
  return (
    <>
      <h4>Unicode Characters</h4>
      <div className="option-radio">
        <input
          type="radio"
          name="unicode"
          id="bold"
          value="Bold"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "bold" })
          }
          checked={convertType.subcategory === "bold"}
        />
        <label htmlFor="bold">Bold</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="unicode"
          id="italic"
          value="Italic"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "italic" })
          }
          checked={convertType.subcategory === "italic"}
        />
        <label htmlFor="italic">Italic</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="unicode"
          id="boldItalic"
          value="Bold Italic"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "boldItalic" })
          }
          checked={convertType.subcategory === "boldItalic"}
        />
        <label htmlFor="boldItalic">Bold Italic</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="unicode"
          id="strikethrough"
          value="Strikethrough"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "strikethrough" })
          }
          checked={convertType.subcategory === "strikethrough"}
        />
        <label htmlFor="strikethrough">Strikethrough</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="unicode"
          id="underline"
          value="Underline"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "underline" })
          }
          checked={convertType.subcategory === "underline"}
        />
        <label htmlFor="underline">Underline</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="unicode"
          id="upsideDown"
          value="Upside Down"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "upsideDown" })
          }
          checked={convertType.subcategory === "upsideDown"}
        />
        <label htmlFor="upsideDown">Upside Down</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="unicode"
          id="wide"
          value="Wide"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "wide" })
          }
          checked={convertType.subcategory === "wide"}
        />
        <label htmlFor="wide">Wide</label>
      </div>
    </>
  );
};

export default CaseOptions;

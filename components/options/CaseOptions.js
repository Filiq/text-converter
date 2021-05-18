const CaseOptions = ({ convertType, setConvertType }) => {
  return (
    <>
      <h4>Case</h4>
      <div className="option-radio">
        <input
          type="radio"
          name="case"
          id="alternatingcase"
          value="Alternating case"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "alternate" })
          }
          checked={convertType.subcategory === "alternate"}
        />
        <label htmlFor="alternatingcase">Alternating case</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="case"
          id="capitalizecase"
          value="Capitalize case"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "capitalize" })
          }
          checked={convertType.subcategory === "capitalize"}
        />
        <label htmlFor="capitalizecase">Capitalize case</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="case"
          id="inversecase"
          value="Inverse case"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "inverse" })
          }
          checked={convertType.subcategory === "inverse"}
        />
        <label htmlFor="inversecase">Inverse case</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="case"
          id="lowercase"
          value="Lower case"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "lower" })
          }
          checked={convertType.subcategory === "lower"}
        />
        <label htmlFor="lowercase">Lower case</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="case"
          id="sentence"
          value="Sentence case"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "sentence" })
          }
          checked={convertType.subcategory === "sentence"}
        />
        <label htmlFor="sentence">Sentence case</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="case"
          id="uppercase"
          value="Upper case"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "upper" })
          }
          checked={convertType.subcategory === "upper"}
        />
        <label htmlFor="uppercase">Upper case</label>
      </div>
    </>
  );
};

export default CaseOptions;

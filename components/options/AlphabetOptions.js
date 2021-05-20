const AlphabetOptions = ({ convertType, setConvertType }) => {
  return (
    <>
      <h4>Alphabet</h4>
      <div className="option-radio">
        <input
          type="radio"
          name="alphabet"
          id="nato"
          value="Nato"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "nato" })
          }
          checked={convertType.subcategory === "nato"}
        />
        <label htmlFor="nato">NATO Phonetic</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="alphabet"
          id="german"
          value="German"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "german" })
          }
          checked={convertType.subcategory === "german"}
        />
        <label htmlFor="german">German</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="alphabet"
          id="danish"
          value="Danish"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "danish" })
          }
          checked={convertType.subcategory === "danish"}
        />
        <label htmlFor="danish">Danish</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="alphabet"
          id="dutch"
          value="Dutch"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "dutch" })
          }
          checked={convertType.subcategory === "dutch"}
        />
        <label htmlFor="dutch">Dutch</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="alphabet"
          id="finnish"
          value="Finnish"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "finnish" })
          }
          checked={convertType.subcategory === "finnish"}
        />
        <label htmlFor="finnish">Finnish</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="alphabet"
          id="french"
          value="French"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "french" })
          }
          checked={convertType.subcategory === "french"}
        />
        <label htmlFor="french">French</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="alphabet"
          id="italian"
          value="Italian"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "italian" })
          }
          checked={convertType.subcategory === "italian"}
        />
        <label htmlFor="italian">Italian</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="alphabet"
          id="norwegian"
          value="Norwegian"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "norwegian" })
          }
          checked={convertType.subcategory === "norwegian"}
        />
        <label htmlFor="norwegian">Norwegian</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="alphabet"
          id="portuguese"
          value="Portuguese"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "portuguese" })
          }
          checked={convertType.subcategory === "portuguese"}
        />
        <label htmlFor="portuguese">Portuguese</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="alphabet"
          id="swedish"
          value="Swedish"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "swedish" })
          }
          checked={convertType.subcategory === "swedish"}
        />
        <label htmlFor="swedish">Swedish</label>
      </div>
      <div className="option-radio">
        <input
          type="radio"
          name="alphabet"
          id="spanish"
          value="Spanish"
          onChange={() =>
            setConvertType({ ...convertType, subcategory: "spanish" })
          }
          checked={convertType.subcategory === "spanish"}
        />
        <label htmlFor="spanish">Spanish</label>
      </div>
    </>
  );
};

export default AlphabetOptions;

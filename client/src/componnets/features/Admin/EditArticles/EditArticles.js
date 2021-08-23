import React,{useState} from "react";

const EditArticles = () => {
  const [resetField, setResetField] = useState("");

  const Fieldinput = (e) => {
    setResetField(e.target.value);
    console.log(resetField);
  };
  const clearField = () => {
    setResetField("");
    console.log(resetField);
  };

  return (
    <div>
      <h1>מאמרים - נשים אתיופיות מעצימות</h1>
      <div>
        <h2>image</h2>
        <textarea value={resetField} onChange={Fieldinput} />
        <button onClick={clearField}>מחיקה</button>
        <button>קרא עוד</button>
      </div>

      <div>
        <h2>softare Engineer</h2>
        <textarea />
        <button>מחיקה</button>
        <button>קרא עוד</button>
      </div>

      <div>
        <h2>Welcome to my editor</h2>
        <textarea />
        <button>מחיקה</button>
        <button>קרא עוד</button>
      </div>
    </div>
  );
};

export default EditArticles;

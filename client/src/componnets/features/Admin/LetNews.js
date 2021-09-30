import React, { useState } from "react";
import { addMemberToNewsletter } from "../../../service/newsletter-service";

function LetNews() {
  const [singlet, setSinglet] = useState([]);

  const saveInfoEmail = (e) => {
    setSinglet(e.target.value)
    console.log(singlet);
  };
  

  return (
    <div>
      <input type="text" onChange={saveInfoEmail} required />
      <button onClick={() => addMemberToNewsletter(singlet) }>send news</button>
    </div>
  );
}

export default LetNews;

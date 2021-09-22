import React from "react";
import { addMemberToNewsletter } from "../../../service/newsletter-service";
import { useState } from "react";

function News() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  console.log({ error });
  return (
    <div>
      <input type="email" placeholder="אימייל" onChange={handleChange} />
      <button
        onClick={async () => {
          const res = await addMemberToNewsletter(email);
          if (res.status === 403) {
            const resAsJson = await res.json();
            setError(resAsJson.error);
          } else {
            setError("בקשתך בטיפול");
          }
        }}
      >
        שלח
      </button>
      <div>{error}</div>
    </div>
  );
}

export default News;
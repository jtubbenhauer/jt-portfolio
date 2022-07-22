import React from "react";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Contact;

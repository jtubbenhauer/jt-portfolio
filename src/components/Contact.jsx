import React from "react";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-pink text-center">Get In Touch</h2>
      <form className="flex flex-col items-center gap-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={formSubmit}>Send</button>
      </form>
    </div>
  );
}

export default Contact;

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
      <h2 className="text-3xl font-bold text-pink text-center mb-5">
        Get In Touch
      </h2>
      <form className="flex flex-col items-center gap-3">
        <input
          type="text"
          placeholder="Name"
          value={name}
          className="border-pink rounded p-2 bg-slate-700 text-slate-100 placeholder:text-slate-300"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          className="border-pink rounded p-2 bg-slate-700 text-slate-100 placeholder:text-slate-300"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          className="border-pink rounded p-2 bg-slate-700 text-slate-100 placeholder:text-slate-300"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={formSubmit}
          className="rounded-lg mt-2 py-2 px-4 font-bold text-lg border-2 border-solid border-pink text-slate-200"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;

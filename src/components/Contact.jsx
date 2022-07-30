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
    <div id="contact">
      <h2 className="text-3xl lg:text-4xl font-bold text-pink text-center mb-4">
        Get In Touch
      </h2>
      <p className="text-slate-300 text-center max-w-[355px] mx-auto mb-6 px-4">
        Have a project you'd like to discuss? Send me a message below and I'll
        get back to you ASAP.
      </p>
      <form className="flex flex-col items-center gap-5">
        <input
          type="text"
          placeholder="Name"
          value={name}
          className="border-pink rounded p-2 bg-slate-700 text-slate-100 placeholder:text-slate-300 w-3/4 max-w-[355px]"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          className="border-pink rounded p-2 bg-slate-700 text-slate-100 placeholder:text-slate-300 w-3/4 max-w-[355px]"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          className="border-pink rounded p-2 bg-slate-700 text-slate-100 placeholder:text-slate-300 w-3/4 max-w-[355px]"
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

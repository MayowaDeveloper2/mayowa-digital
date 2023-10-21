import React, { useState } from "react";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:4001/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          subject: subject,
          message: message,
        }),
      });

      let data = await res.json();
      console.log(data);

      if (data.status === "success") {
        alert(
          "We have received your message! Mayowa Digital will reach you as soon as possible."
        );
        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");
        
      } else {
        alert("Oops.Something went wrong. Try again please.")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="my-mother down-3 xs-down-10">
       <div className="my-col-10"> 
        <div className="centered">BOOK A CALL TODAY</div>
        <div className="xs-off-1 centered xs-10">Send us your contact details and a brief outlibe of what you might need, and we'll be in touch within 12 hours.</div>
        <form onSubmit={handleSubmit}>
          <div className="off-4 input-area">
            <div className="name-area">
              <input
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                placeholder = "Name"
                autoComplete="name" // Add the autocomplete attribute
              />
            </div>
            <div className="email-area">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                autoComplete="email" // Add the autocomplete attribute
              />
            </div>
            <div className="subject-area">
              <input
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                id="subject"
                name="subject"
                value={subject}
                placeholder="Subject/title"
                autoComplete="subject" // Add the autocomplete attribute
              />
            </div>
            <div className="message-area">
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                value={message}
                placeholder="Message"
                id="message"
                cols="30"
                rows="10"
                autoComplete="message" // Add the autocomplete attribute
              ></textarea>
            </div>
          </div>
          <button className="button">Send</button>
        </form>
      </div>
     </div>
    </>
  );
};

export default ContactForm;

import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
        </label>
        <label>
          Phone:
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          ></input>
        </label>
        <label>
          Email:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </>
  );
};

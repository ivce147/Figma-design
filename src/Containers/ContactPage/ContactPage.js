import React, { useState } from "react";
import Union from "../../assets/Images/Union.png";
import call from "../../assets/Images/call.png";
import "./ContactPage.css";

function ContactPage() {
  const [isActive,setIsActive] = useState(false);
  const [error, setError] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [contact, setContact] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [submited, setSubmited] = useState(false);

  const handleInputChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(contact);
    setIsActive(contact => !contact)
    event.preventDefault();
    let errorState = {
      fullname: "",
      email: "",
      message: "",
    };

    let hasError = false;
    if (contact.fullname.length === 0) {
      errorState.fullname = "Please enter name";
      hasError = true;
    }
    if (contact.email.length === 0) {
      errorState.email = "Please enter email";
      hasError = true;
    }
    if (contact.message.length === 0) {
      errorState.message = "Please enter message";
      hasError = true;
    }

    setError({ ...errorState });
    //

    if (!hasError) {
      setContact({ fullname: "", email: "", message: "" });
      setSubmited(true);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact">
        <div>
          <img src={Union} alt="union" />
        </div>
        <div className="contact-girl">
          <img src={call} alt="call" />
          <h1>get in touch</h1>
          <div className="contact-text">
            <p>contact@e-comm.ng</p>
            <p>+234 4556 6665 34</p>
            <p>20 Prince Hakerem Lekki Phase 1, Lagos</p>
          </div>
        </div>
      </div>
      <div className="contact1">
        {!submited && (
          <div className="form">
            <input
              onChange={(e) => handleInputChange(e)}
              id="text-inp"
              type="text"
              name="fullname"
              placeholder="James Doe"
            />
            {error.fullname && (
              <div className="form-error">{error.fullname}</div>
            )}
            <input
              onChange={(e) => handleInputChange(e)}
              id="text-inp"
              type="email"
              name="email"
              placeholder="Jamesdoe@gmail.com"
            />
            {error.email.length > 0 && (
              <div className="form-error">{error.email}</div>
            )}
            <textarea
              onChange={(e) => handleInputChange(e)}
              id="text-inp"
              type="text"
              name="message"
              placeholder="Type your message"
            />
            {error.message && (
              <div className="form-error">{error.message}</div>
            )}
            <button className="btn-submit" style={{
            backgroundColor: isActive ? '#40BFFF' : '40BFFF'
          }}
           type="submit" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </div>
        )}
        {submited && <div className="thanks"><h2>Thank you!</h2></div>}
      </div>
    </div>
  );
}

export default ContactPage;

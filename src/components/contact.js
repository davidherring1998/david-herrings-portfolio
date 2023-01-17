import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css'




function Contact() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('default_service', 'template_phruftb', form.current, 'lT6wLIZpzCvWP-uAm')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false)

  const handleName = (e) => {
    setValues({...values, name: e.target.value})
  }

  const handleEmail = (e) => {
    setValues({...values, email: e.target.value})
  }

  const handleMessage = (e) => {
    setValues({...values, message: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.name && values.email && values.message){
      setValid(true)
    }
    setSubmitted(true)
  
  }
  return (
    <div className="boxContainer" id="form-container">
      <h2>Contact </h2>
      {submitted && valid ? <div className="submitMessage">Success! Thank you for your submission</div> : null}
      <form onSubmit={handleSubmit} className='form'ref={form}>
        <input
        onChange={handleName}
        value={values.name}
        className="form-field"
        placeholder="Name.."
        name="name" />
        {submitted && !values.name ? <span>Please enter a name</span> : null }
        <input 
        onChange={handleEmail}
        value={values.email} 
        className="form-field" 
        placeholder="Email.." 
        name="email" />{" "}
        {submitted && !values.email ? <span>Please enter a valid email</span> : null}
        <input
        onChange={handleMessage}
        value={values.message} 
        className="form-field"
        placeholder="Subject.."
        name="message" />
        { submitted && !values.message ? <span>Please enter a subject</span> : null}
       <input 
       className="submit-btn"
       type="submit"
       onClick={sendEmail}

        />
      </form>
    </div>
  );
}

export default Contact;

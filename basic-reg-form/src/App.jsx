import React, {useState} from "react";
import "./index.css";

export default function App() {



  const [submitted, setSubmitted] = useState(false);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);

  function handleSubmit(event) {
    event.preventDefault(); //prevents the 'default' which is to submit the form which allows us to check success 
    setSubmitted(true);
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return ( 
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted && firstName && lastName && email ? <div class="success-message">Success! Thank you for registering</div> : null } 
        <input
          onChange={handleFirstNameChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && (firstName === null) ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          onChange={handleLastNameChange}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && (lastName === null) ? <span id="last-name-error">Please enter a last name</span> : null }
        <input
          onChange={handleEmailChange}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && (email === null) ? <span id="email-error">Please enter an email address</span> : null } 
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );

  
}
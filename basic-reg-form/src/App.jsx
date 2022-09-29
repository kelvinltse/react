import React, {useState} from "react";
import "./index.css";

export default function App() {



  const [submitted, setSubmitted] = useState();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  function handleSubmit(event) {
    setSubmitted(true);
    alert('submitted!');
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
        {/* submitted doesn't seem to be checking as true */}
        {submitted ? <div class="success-message">Success! Thank you for registering</div> : null } 
        <input
          onChange={handleFirstNameChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          onChange={handleLastNameChange}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          onChange={handleEmailChange}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */} 
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );

  
}
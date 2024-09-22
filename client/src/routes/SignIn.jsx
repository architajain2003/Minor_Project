import React, { useRef } from "react";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const form = event.currentTarget;

    // Check if the form is valid
    if (form.checkValidity() === false) {
      event.stopPropagation(); // Prevent further actions if invalid
    } else {
      // Form is valid, handle your form submission logic here
      //   alert("Form submitted successfully!");
      // You can submit the form data here, e.g., via an API call
    }

    // Add the 'was-validated' class to show validation feedback
    form.classList.add("was-validated");

    console.log(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div className="signin-page">
      <div className="container signin-container card">
        <div className="row">
          <div className="col-12 m-auto">
            <h1>Sign In</h1>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="needs-validation"
            >
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Enter your email:
                </label>
                <input
                  type="email" // Changed to email type for better validation
                  name="email"
                  id="email"
                  ref={emailRef}
                  className="sign-in-input form-control"
                  required
                />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Enter your password:
                </label>
                <input
                  type="password" // Changed to password type for security
                  name="password"
                  id="password"
                  ref={passwordRef}
                  required
                  className="sign-in-input form-control"
                />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>

              <button
                className="btn btn-success con-btn"
                type="submit" // No need for onClick here, handle in form
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

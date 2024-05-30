import React, { useState } from "react";

function StudentForm() {
  // Define state using the useState hook
  const [student, setStudent] = useState({
    // Initialize state with an object containing username, email, and password fields
    username: "", // Initialize username field as an empty string
    email: "",    // Initialize email field as an empty string
    password: "", // Initialize password field as an empty string
  });

  // handleChange function to update state when input values change
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    console.log(e.target,name);
    setStudent({ ...student, [name]: value }); // Update state with the new value using the spread operator
  };

  // showData function to handle form submission
  const showData = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(student); // Log the student object to the console
  };

  return (
    <>
      {/* Form for student information */}
      <h1>Student Form</h1>
      <form onSubmit={showData}> {/* Call showData function on form submission */}
        <div className="container">
          {/* Input field for username */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              name="username" // Name attribute to identify the input field
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Username"
              onChange={handleChange} // Call handleChange function on input change
            />
          </div>
          {/* Input field for email */}
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              name="email" // Name attribute to identify the input field
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Email"
              onChange={handleChange} // Call handleChange function on input change
            />
          </div>
          {/* Input field for password */}
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              name="password" // Name attribute to identify the input field
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Password"
              onChange={handleChange} // Call handleChange function on input change
            />
          </div>
          {/* Submit button for the form */}
          <button className="btn btn-danger my-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default StudentForm;

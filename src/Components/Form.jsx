import React, { useState } from "react";

function Form() {
  const [username, setUserName] = useState();
  function getData() {
    console.log(username);
  }
  return (
    <>
      <div className="container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="UserName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <button
          className="btn btn-success my-2"
          type="submit"
          onClick={() => getData()}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Form;

import React, { useState } from "react";

function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log(text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    console.log(text);
    let newText = "";
    setText(newText);
  };
  const handleCopyClick = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h3>{props.title}</h3>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            placeholder="Enter Text Here"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary:</h2>
        <p>
          The total Characters are: {text.length}, total Words are:{" "}
          {text.split(" ").length}.
        </p>
        <h3>Preview:</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Textform;

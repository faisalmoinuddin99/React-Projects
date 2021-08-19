import React, { useState } from "react";

export default function TextForm(props) {
  // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState("");
  //console.log(text);

  const handleUpperCase = () => {
    // console.log("uppercase was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleCopyText = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };
  const handleExtraSpaces = () => {
    let extraSpaces = text.split(/[ ]+/);
    setText(extraSpaces.join(" "));
  };
  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  };
  const handleLowerCase = () => {
    let lowercaseText = text.toLowerCase();
    setText(lowercaseText);
  };
  const handleClearText = () => {
    if (window.confirm("are you sure")) {
      setText("");
    }
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            placeholder="Enter text here...."
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary " onClick={handleExtraSpaces}>
          Fix Extra Spaces
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p> {text}</p>
      </div>
    </>
  );
}

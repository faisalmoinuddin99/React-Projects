import React, { useState } from "react";

export default function TextForm(props) {
  // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState("Enter text here");
  //console.log(text);

  const handleUpperCase = () => {
    // console.log("uppercase was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  };
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperCase}>
        Convert to Uppercase
      </button>
    </div>
  );
}

import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelOnChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handelOnChange}></textarea>
      </div>
      <button onClick={handelUpClick} className="btn btn-primary">
        Convert to upper case
      </button>
    </div>
    <div className="container">
    <h1>Your text sumery</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  );
}

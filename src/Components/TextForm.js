import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelClearClick = () => {
    let newText = '';
    setText(newText);
  };
  const handelOnChange = (e) => {
    setText(e.target.value);
  };
  const extractEmails = () => {
    let newText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    setText(newText);
    };
    
  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handelOnChange}></textarea>
      </div>
      <button onClick={handelUpClick} className="btn btn-primary mx-2">Convert to upper case</button>
      <button onClick={handelLowClick} className="btn btn-primary mx-1">Convert to upper case</button>
      {/* <button onClick={extractEmails} className="btn btn-primary mx-1">Extract email</button> */}
      <button onClick={handelClearClick} className="btn btn-primary mx-1">Clear</button>
    </div>
    <div className="container my-3">
    <h1>Your text sumery</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  );
}

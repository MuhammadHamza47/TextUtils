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
  const handleCopy = ()=>{
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handelExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
  }
  const handelOnChange = (e) => {
    setText(e.target.value);
  };
  // const extractEmails = () => {
  //   let newText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
  //   setText(newText);
  //   };
    
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'black':'white'}}  onChange={handelOnChange}></textarea>
      </div>
      <button onClick={handelUpClick} className="btn btn-primary mx-2">Convert to upper case</button>
      <button onClick={handelLowClick} className="btn btn-primary mx-1">Convert to upper case</button>
      {/* <button onClick={extractEmails} className="btn btn-primary mx-1">Extract email</button> */}
      <button onClick={handelClearClick} className="btn btn-primary mx-1">Clear</button>
      <button onClick={handleCopy} className="btn btn-primary mx-1">Copy Text</button>
      <button onClick={handelExtraSpace} className="btn btn-primary mx-1">Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
    <h1>Your text sumery</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter somyhing in the text box box to preview it here"}</p>
    </div>
    </>
  );
}

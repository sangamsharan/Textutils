import React, { useState } from "react";

export default function TextForm(props) {
  const handleclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to Uppercase!","Success")
  };
  const handleloclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to Lowercase!","Success")

  };
  const handleclear = () => {
    let newtext = "";
    setText(newtext);
    props.showalert("Text cleared!","Success")

  };

  const handlechange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black",backgroundColor: props.mode === "dark" ? "grey" : "white", width:"50%", margin:"auto" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            value={text}
            onChange={handlechange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleloclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleclear}>
          Clear text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" ,backgroundColor: props.mode === "dark" ? "grey" : "white",}}
      >
        <h2> your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} charcters
        </p>
        <h3> preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

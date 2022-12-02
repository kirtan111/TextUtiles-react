import React, { useState } from "react";

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const convertToUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UpperCase!", "success");
    };

    const convertToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase!", "success");
    };

    const [text, setText] = useState("");

    return (
        <>
            <div
                className="container"
                style={{ color: props.mode === "light" ? "black" : "white" }}
            >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        style={{
                            backgroundColor:
                                props.mode === "light" ? "white" : "#6c757d",
                            color: props.mode === "light" ? "black" : "white",
                        }}
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="15"
                    ></textarea>
                    <button
                        disabled={text.length === 0}
                        className="btn btn-primary my-3"
                        onClick={convertToUpperCase}
                    >
                        Convert to UpperCase
                    </button>
                    <button
                        disabled={text.length === 0}
                        className="btn btn-primary my-3 mx-2"
                        onClick={convertToLowerCase}
                    >
                        Convert to LowerCase
                    </button>
                </div>
                <div className="container">
                    <h1>Your Text Summery</h1>
                    <p>
                        You entered {text.split(" ").length} words and{" "}
                        {text.length} characters
                    </p>
                </div>
            </div>
        </>
    );
}

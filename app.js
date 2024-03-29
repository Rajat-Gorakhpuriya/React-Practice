import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [
            React.createElement("h1",{},"I am a child"),
            React.createElement("h2",{},"Heading2 sibling")
        ]
    )
    );
// const heading = React.createElement("h1", {id: 'heading'}, "Hello Rajat");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
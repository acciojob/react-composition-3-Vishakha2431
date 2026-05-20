
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  }}
>
        <Tooltip text="This is a ToolTip">
          <span >Hover over me</span>
        </Tooltip>

        <br/>
        <br/>
           <Tooltip text="This is another ToolTip">
          <span>Hover over me to see second tooltip</span>
        </Tooltip>

    </div>
  )
}

export default App

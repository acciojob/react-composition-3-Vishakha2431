import React, { useState } from 'react'

export default function Tooltip(props) {
    const[showtooltip,settooltip]=useState(false)

  return (
    <div
    className='tooltip'
    style={
        {
            position:"relative",
            display:"inline-block",
            
        }
    }
    onMouseEnter={()=>settooltip(true)}
    onMouseLeave={()=>settooltip(false)}
    >
      {props.children}
      {showtooltip && (
       <span
          className="tooltiptext"
          style={{
            position: "absolute",
            bottom: "125%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "red",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            whiteSpace: "nowrap",
          }}
        >
          {props.text}
        </span> 
      )}
    </div>
  )
}

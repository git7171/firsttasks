import { Box } from "@mui/material";
import { fontSize } from "@mui/system";
import React, { useState } from "react";


import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span >

        <img src="fire.png" width="60" height="60" alt="This will display an animated GIF" style={{ marginLeft: '35px' }} />
      </span>
      <body className={`nav-items ${isOpen && "open"}`}>
        <a class="neon-button" style={{ color: "#22c55e", fontWeight: 'bolder',left:'-5px',fontSize:'15px',height:'30px' }} href="#">PRO</a>
        <a href="/service" style={{ fontWeight: "bolder",left:'-5px' }} >labs</a>
        <a href="/contact" style={{ fontWeight: "bolder",left:'-1px' }} >courses</a>
        <input type="input" placeholder=" 🔍Search " style={{height:'50px', color: "white", borderBlockColor: "white", fontSize: "22px",left:'-5px' }} className="placeidon" />
        <a href="/contact" style={{height:'50px', color: "black", background: "20px", backgroundColor: "white", padding: "16.5px", fontWeight: 'bolder',float:'right',left:'-20px' }} >LOGIN</a>


        <div className="ui search">
        </div>
      </body>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>

    </div>
  );
};

export default Navbar
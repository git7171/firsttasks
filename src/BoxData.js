import "./Home.css";
import React from 'react'
import { WidthFull } from "@mui/icons-material";

const BoxData = () => {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div >
            <button style={{
              color: '#12181b', backgroundColor: "#ef4444",
               fontWeight: 'bold', marginRight: '100px',marginBottom: '490px', fontSize: '30px',
               width: "550px", height: '130px', marginLeft: '650px', fontSize:'40px', 
               border: 'none',marginBottom:'10px',marginTop:'700px'
            }}><h1>HARD TRUTH</h1></button>
            <button style={{
              color: 'black',fontWeight: 'bold', marginRight: '100px',marginBottom: '490px', 
              fontWeight: 'bold', fontSize: '30px', width: "430px", height: '100px', 
              marginLeft: '660px', fontSize: '55px', border: 'none', backgroundColor: '#12181b'
            }}>👇</button>
<h1 style={{
              color: '#b2becd', marginRight: '100px', 
              fontWeight: 'bold',  width: "430px", height: '100px', 
               fontSize: '55px', border: 'none', backgroundColor: '#12181b',marginLeft:'300px',whiteSpace:'nowrap',
            }}><p>You <span style={{ color: '#ef4444' }}>CAN'T </span>learn to code by watching videos </p></h1>
            <h1 style={{
              color: 'white', marginRight: '100px',  fontSize: '30px', width: "430px", height: '100px', 
               border: 'none', backgroundColor: '#12181b',marginLeft:'800px',whiteSpace:'nowrap'
            }}>I am sad😢 </h1>
           

      
          
         

          </div>
        </div>
      </div>
    </section>
  )
}
export default BoxData;
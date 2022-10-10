import "./Home.css";
import React from 'react'

const Home = () => {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="content">
            <h3 style={{ color: 'white', fontWeight: "bold", marginLeft: '170px', marginTop: '1px',fontSize:'68px' }}>LEARN TO CODE</h3>
            <h3 style={{ color: '#ee9e0c', fontFamily: "monospace", fontWeight: "bold", marginLeft: '280px', marginTop: '-25px',fontSize:'80px' }}>FASTER.</h3>
            <p style={{ color: 'white', textTransform: "lowercase", marginLeft: '160px', fontWeight: "bold" }}>Fireship is a <span style={{ color: '#c8b308' }}>blazingly fast</span> &&  <span style={{ color: '#952d82' }}>highly-amusing</span> way to</p>
            <p style={{ color: 'white', textTransform: "lowercase", marginLeft: '240px', fontWeight: "bold" }}>          level up your programming skills.</p>
            <button  style={{ color: 'white', backgroundColor: "#22c55e", marginLeft: '200px', fontWeight: "bold", marginLeft: '330px', marginTop: '25px', fontWeight: 'bold',border:'none',height:'45px',width:'130px' }}>START HERE</button>
          </div>
          <div className="img-container">
            <img src="/images/banner.png" style={{ marginLeft: '-180px', marginTop: '75px' }} alt="" />
            <div className="content">
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home;
import React from 'react'
import logo from '../assets/logo/ucsc.png'
import uniLogo from "../assets/logo/logo.png"

const Home = () => {
   return (
      <>
         <header>
            <div className="logo">
               <img src={logo} alt="" />

            </div>
            <h1>Bachelor of Information Technology</h1>
            <div className="uni-logo">
               <img src={uniLogo} alt="" />
            </div>
         </header>
      </>
   )
}

export default Home
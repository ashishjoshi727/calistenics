import React from "react";
import {useNavigate} from 'react-router-dom'
import homepageDog from './Images/homepageDog.png'
import girlHoldingADog from './Images/girlHoldingADog.png'
import footprint from './Images/footPrint.png'
import './HomeContainer.css'

const HomeContainer = () =>{
  const navigate = useNavigate();

  const handleClick =()=>{
    navigate("/services")
  }
  return(
    <div className="container-fluid home-container">
      <div className="row head">
        <div className="col-lg-8">
          <div className="left-heading-container">
            <div className="first-line">
              <p className="left-heading">Your Pets</p>
              <img src={homepageDog} alt="dog sitting" className="heading-image"></img>
            </div>
          
          <p className="left-heading">Are Our</p>
          <p className="left-heading">Priority</p>
          </div>
          <div>
          <p className="left-detail">Ensure you are fully prepared to provide proper care and attention to your pet before welcoming them into your home</p>
          </div>
          <div>
            <button className="adopt-btn" onClick={handleClick}>Adopt<img src={footprint}></img></button>
          </div>

        </div>
        <div className="col-lg-4">
          <div className="heading-right">
          <img src={girlHoldingADog}></img>
          </div>
        </div>

      
        
      </div>
    </div>
  )
}

export default HomeContainer;
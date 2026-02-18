import React from "react";
import Leftpic from './Images/HomeDarkCardLeftPic.png'
import RightPic from'./Images/HomeDarkCardRightPic.png'
import './MiddleCard.css'
 
const MiddleCard=()=>{
    return(
        <div className="container-dark">
            <div className="left-pic"> 
                <img src={Leftpic} alt="dog with teddy bear"></img>
            </div>
            <div className="left-para">    
                <p>1.2K+ Furry Friends Living Their Best Lives </p>
            </div>
            <div className="right-pic">    
                <img src={RightPic} alt="Dog Pic"></img>
            </div>
            <div>    
                <div className="right-para">
                    <p className="we-do">WHAT WE DO?</p>
                    <p>
                    With a focus on matching the right pet with the right family, PawFinds makes it easy to adopt love and foster happiness.
                    </p>
                </div>
                
            </div>

        </div>
    )
}

export default MiddleCard;
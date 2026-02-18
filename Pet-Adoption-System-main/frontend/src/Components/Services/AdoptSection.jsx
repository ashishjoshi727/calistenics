import React from "react";
import { Link } from "react-router-dom";
import adoptpet from'./Images/adoptPet.png'
import './AdoptSection.css'

const AdoptSection=()=>{
    return(
        <section className="adopt-section">
            <h2>Adopt a Pet</h2>
            <img src={adoptpet} alt="Happy Pet"></img>  

            <p>Welcome to our pet adoption program! Adopting a pet is a wonderful way
        to bring joy and companionship into your life.</p>

             <h3>Benefits of Pet Adoption</h3>
            <ul>
                <li>Provide a loving home to a pet in need</li>
                <li>Experience the unconditional love of a pet</li>
                <li>Create lasting memories and cherished moments</li>
            </ul>

            <h3>Adoption Process</h3>
            <ol>
                <li>Fill out an adoption application</li>
                <li>Meet potential pets in person</li>
                <li>Complete the necessary paperwork</li>
            </ol>

            <h3>Responsibilities</h3>
            <p>
                Adopting a pet comes with responsibilities, including feeding, grooming,
                regular exercise, and providing medical care.
            </p>

            <Link to ="/pets">
             <button className="button">Find Your Perfect Pet</button>
            </Link>
        </section>
    )
}

export default AdoptSection;
  import React, { useState } from 'react';
  import AdoptForm from '../AdoptForm/AdpotForm';
  import { formatDistanceToNow } from 'date-fns';
  import'./pets.css'

  const PetsViewer = (props) => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };

    const formatTimeAgo = (updatedAt) => {
      const date = new Date(updatedAt);
      return formatDistanceToNow(date, { addSuffix: true });
    };

    return (
      <div className='pet-view-cards'>
        <div className='pet-card-img'>
          <img src={`http://localhost:4000/uploads/${props.pet.picture}`} alt={props.pet.name} />
        </div>
        <div className='pet-card-details'>
          <h2>{props.pet.name}</h2>
          <p><b>Type:</b> {props.pet.type}</p>
          <p><b>Age:</b> {props.pet.age}</p>
          <p><b>Location:</b> {props.pet.area}</p>
          <p>{formatTimeAgo(props.pet.updatedAt)}</p>
        </div>
        <div className='show-interest-btn'>
          <button onClick={togglePopup}>Show Interest <i className="fa fa-paw"></i></button>
        </div>
        {showPopup && (
          <div className='popup'>
            <div className='popup-content'>
              <AdoptForm closeForm={togglePopup} pet={props.pet}/>
            </div>
            <button onClick={togglePopup} className='close-btn'>
              Close <i className="fa fa-times"></i>
            </button>
          </div>
        )}
      </div>
    );
  };

  export default PetsViewer;
import React from "react";
import "./TrainerCard.css";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function TrainerCard({ elem }) {
  
  const navigate=useNavigate();

  const handleButtonClick = (e) => {
    navigate(e.target.value);
    }
  
  
  
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={elem.image} className="widht 100%"></img>
          </div>
          <div className="flip-card-back">
            <h1 className="h1">Name: {elem.name}</h1>
            <p className="p">Species: {elem.status}</p>
            <p className="p">Status: {elem.species}</p>
            <p className="p">Gender: {elem.gender}</p>
            <p className="p">
              <small className="p">{elem.origin.name}</small>
            </p>
            <Link to="/training"><button className="btn btn-primary" id="training" value='/training'onClick={(e)=> handleButtonClick(e)}>Tovább a jelentkezéshez</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerCard;

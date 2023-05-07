import React from "react";
import "./TrainerCard.css";

function TrainerCard({ elem }) {
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
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerCard;

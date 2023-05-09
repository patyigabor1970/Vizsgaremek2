import React from 'react';


function LessondataCard({elem}) {
  return (
    <div><div className="card lg:card-side bg-base-100 shadow-xl">
    <figure>
    <img src={elem.image} className="widht 100%"></img>
      </figure>
    <div className="card-body">
      <h2 className="card-title">Óráim: {elem.status}</h2>
      <h2 className="card-title">Résztvevők száma: {elem.status}</h2>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Listen</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default LessondataCard
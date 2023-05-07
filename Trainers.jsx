import { useState, useEffect } from "react";
import TrainerCard from "./TrainerCard";


function Trainers() {
  const [trenerek, setTrenerek] = useState([]);
  const [page] = useState(1); 
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((result) => result.json())
      .then((adatok) => setTrenerek(adatok.results));
  },[page]);

  

  return (
    <div className="bg-red-600">
      <h1 id="h1">CSAPATUNK</h1>
      <div className="grid  sm: grid-cols-1 md:grid-cols-2 grid-center  lg:grid-cols-3 xl:grid-cols-4">
      {trenerek.map((elem, index) => (
        <TrainerCard key={index} elem={elem} />))}
      </div>
    </div>
  );
}

export default Trainers;

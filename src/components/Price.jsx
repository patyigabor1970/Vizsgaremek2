import {useState,useEffect} from "react";
import "./PriceStyle.css";
import Table from "./Table";


function Price() {
  const [price, setPrice]=useState([]);
  const [page]=useState(1);

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then((result) => result.json())
    .then(adatok => setPrice(adatok.results));
          
  },[page]);
  
  return (
    <div id="bg">
      <h1 id="h1">ÁRAINK</h1>
      <div>
       <table className="table w-full text-white text-justify font-bold border border-slate-400 md:table-fixed bg-red-600"> 

       <tr>
              <th className="border border-slate-300">ID</th>
              <th className="border border-slate-300">TÍPUS</th>
              <th className="border border-slate-300">ÁR</th>
              <th className="border border-slate-300">LEÍRÁS</th>
        </tr>
        
        </table>
        </div>
       {price.map((elem,index) => (<Table key={index} elem={elem}/>))}
      
    </div>
  );
}

export default Price;
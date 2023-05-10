import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import "./PriceStyle.css";
import PriceTable from "./PriceTable";

function Price() {
  const [price, setPrice] = useState([]);
  const [page] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((result) => result.json())
      .then((adatok) => setPrice(adatok.results));
  }, [page]);

  return (
    <div id="bg">
      <h1 id="h1">ÁRAINK</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 md:table-fixed">
            <thead className="text-xl text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                  TÍPUS
                </th>
                <th scope="col" class="px-6 py-3">
                  LEÍRÁS
                </th>
                <th scope="col" class="px-6 py-3">
                  MENNYISÉG
                </th>
                <th scope="col" class="px-6 py-3">
                  ÁR
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      {price.map((elem, index) => (
        <PriceTable key={index} elem={elem} />
      ))}

    <div>
    <Link to="/">
            <button
              className="bg-blue-600 hover:bg-black text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline items-center"
              type="button">
              Vissza a főoldalra
            </button>
          </Link>
    </div>
    
    </div>
  );
}

export default Price;

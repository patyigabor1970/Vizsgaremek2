import React, { useState } from "react";

function TrainerData(props) {
 
    const [selectedIdopont, setSelectedIdopont] = useState(null);

  return (
    <div className="hero max-h-screen bg-red-600">
      <div className="hero-content flex-col">
        <img src={props.kep} alt={props.nev} />
        <h2 className="text-2xl font-bold">
          Üdvözlöm {props.nev}!<p>Önnek az alábbi órái vannak:</p>
        </h2>
        <p></p>
        <p className="text-xl font-bold">Órák időpontjai:</p>
        <select className="bg-gray-50 text-xl font-bold border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 
        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedIdopont}
          onChange={(e) => setSelectedIdopont(e.target.value)}
        >
          <option value="" className="text-xl font-bold">Válasszon időpontot</option>
          {props.orak.map((ora) => (
            <option className="text-xl font-bold" key={ora.id} value={ora.idopont}>
              {ora.nev} - {ora.idopont}
            </option>
          ))}
        </select>
        {selectedIdopont && (
          <>
            <p className="text-xl font-bold">Résztvevők:</p>
            <ul className="bg-white border-black border mt-2 rounded-lg p-2 text-xl font-bold">
              {props.orak
                .find((ora) => ora.idopont === selectedIdopont)
                .resztvevok.map((resztvevo) => (
                  <li key={resztvevo.id} className="text-justify">Név: {resztvevo.nev}, Telefonszám: {resztvevo.phone}</li>
                ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default TrainerData;

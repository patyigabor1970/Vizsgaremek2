import { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
//import {useNavigate} from 'react-router-dom';
import LessondataCard from "./LessondataCard";

function Lessondata() {
  //const navigate = useNavigate();
  const [lessonData, setLessonData] = useState([]);
  const [page] = useState(1);
  //const token = sessionStorage.getItem("usertoken");
  //const token=true;

  useEffect(() => {
    // if (token) {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      /*, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer $(token)`,
        },*/
      //})
      .then((res) => res.json())
      .then((lessonData) => setLessonData(lessonData.results))
      .catch((err) => alert(err));
    // } else {
    // navigate("/login");
    //}
  }, [page]);

  return (
    <div className="bg-red-600">
      <h1 id="h1">FOGLALKOZÁS ADATAIM</h1>
      <div>
      <div className="grid  sm: grid-cols-1 md:grid-cols-2 grid-center  lg:grid-cols-3 xl:grid-cols-3">
        {lessonData.map((elem, index) => (
          <LessondataCard key={index} elem={elem} />))}
      </div>
      </div>
      <div><Link to="/"> 
        <button
          className="bg-blue-600 hover:bg-black text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline 
          items-center"
          type="button"
        >
          Vissza a főoldalra
        </button>
      </Link>
      </div>
    </div>
  );
}

export default Lessondata;

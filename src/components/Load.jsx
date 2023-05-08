import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Load() {

  const [success, setSuccess] = useState(false);
  const location=useLocation();
  const data = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  const datas = {

      email:"admin@admin.hu",
      mozgasforma:data.name
  };

  const [trainer,setTrainer]=useState([]);
  const [activity,setActivity]=useState([]);

  useEffect (()=>{
    fetch('http://....')
    .then(res=>res.json())
    .then(trainer=>setTrainer(trainer))
    .catch(err=>alert(err))

  },[]);
  
  
  const getActivity=(trainer)=>{
    fetch(`http://......./${trainer}`)
    .then(res=>res.json())
    .then(activity=setActivity(activity))
    .catch(err=>alert(err))
  }
  


  return (
    <div className="bg-red-600 p-6 rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">{datas.mozgasforma} jelentkezés</h2>
      <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 justify-items-center m-5">
            <select onChange={(e)=>get(e.target.value)} className="select select-bordered w-full max-w-xs">
                <option disabled selected>Válasszon edzőt!</option>
                {
                    trainer.map((trainer,i)=>(<option key={i} value={trainer.name}>{trainer.name}</option>))
                }
            </select>
            </div>
            <p>
            </p>
            <div className="grid grid-cols-1 justify-items-center m-5">
            <select onChange={(e)=>getActivity(e.target.value)} className="select select-bordered w-full max-w-xs">
                <option disabled selected>Válasszon az időpontok közül!</option>
                {
                    activity.map((activity,i)=>(<option key={i} value={trainer.name}>{trainer.activity}</option>))
                }
            </select>
            </div>
       
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn-center"
            type="submit" onClick={(e)=> handleButtonClick(e)}>
            Jelentkezés
          </button>
          {success && <p className="text-black text-center text-xl mt-4">Sikeres jelentkezés!</p>}
          <Link to="/training">
            <button
              className="bg-red-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center"
              type="button">
              Mégse
            </button>
          </Link>
        </div>
      </form>
      
    </div>
  );
}

export default Load;

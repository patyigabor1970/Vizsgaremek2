import React from "react";
import { useNavigate } from "react-router-dom";
import './Main.css';



function Main() {

  const navigate=useNavigate();
 
const handleButtonClick = (e) => {
    navigate(e.target.value);
    }
  return (
    <div>
      <div className="hero max-h-screen bg-red-600">
        <div className="hero-content flex-col lg:flex-row">
          <img src="src/images/feature-4.jpg" className="max-w-lg rounded-lg shadow-2xl border-8 border-black"/>
          <div>
            <h1 className="text-5xl font-bold text-white">Fitness</h1>
            <p className="py-6 text-5xl font-bold text-white text-justify">
            Edzőtermünk gépparkjának összeállításánál fontos szempont volt, hogy akár a teljesen kezdő, akár a profi bodybuilderek is megtalálják 
            a számukra megfelelő gépeket. Teremedzőink ingyenes edzéstervet készítenek számodra és segítenek megtanulni a gyakorlatok helyes kivitelezését.
Edzőtermünkben Hoist, Life Fitness, Hammer Strenght, Panatta gépek széles választékával találkozhattok.
            </p>
           
          </div>
        </div>
      </div>
      <div className="hero max-h-screen bg-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img id="responsive" src="src/images/edzoink.jpg"className="max-w-lg rounded-lg shadow-2xl border-8 border-red-600"/>
          <div>
            <h1 className="text-5xl font-bold text-white">Edzőink</h1>
            <p className="py-6 text-5xl font-bold text-white text-justify">
            Ha szeretnéd hatékonyan és biztonságosan elérni céljaidat válassz magasan képzett személyi edzőink közül. 
            Edzőink a edzés időtartama alatt csak rád figyelnek, hogy élmény legyen a közös edzés. Vedd fel a kapcsolatot az általad választott edzővel.
            </p>
            
            <button className="btn btn-primary hover:bg-red-600" id="trainers" value='/trainers'onClick={(e)=> handleButtonClick(e)}>Tovább az edzőkhöz</button>
          </div>
        </div>
      </div>
      <div className="hero max-h-screen bg-red-600">
        <div className="hero-content flex-col lg:flex-row">
          <img src="src/images/istockphoto-szolgaltatas.jpg" className="max-w-lg rounded-lg shadow-2xl border-8 border-black"/>
          <div>
            <h1 className="text-5xl font-bold text-white">Szolgáltatások</h1>
            <p className="py-6 text-5xl font-bold text-white text-justify">
            Ha szereted a CrossFit, spinning, aerobic edzések változatosságát, intenzitását akkor nálunk megvan a lehetőséged, hogy kihozd magadból a maximumot. 
            
            </p>
            <button className="btn btn-primary hover:bg-black" id="trainig" value='/training'onClick={(e)=> handleButtonClick(e)}>Tovább a szolgáltatásokhoz</button>

          </div>
      </div>
      </div>

      <div className="hero max-h-screen bg-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img id="responsive" src="src/images/arakkep.jpg"className="max-w-lg rounded-lg shadow-2xl border-8 border-red-600"/>
          <div>
            <h1 className="text-5xl font-bold text-white">Árak</h1>
            <p className="py-6 text-5xl font-bold text-white text-justify">
            Az Ön igényeinakek megfelelő heti, havi bérletek, egy és több alkalmas órajegyek akár ajándékba is.
            </p>
            <button className="btn btn-primary hover:bg-red-600" id="price" value='/price'onClick={(e)=> handleButtonClick(e)}>Tovább az árakhoz</button>
          </div>
        </div>
      </div>
    
    
    </div>

      
  );
}

export default Main;

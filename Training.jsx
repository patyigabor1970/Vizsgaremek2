import { useLocation } from 'react-router-dom';
import Load from './Load';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './Training.css';

function Training() {

const navigate=useNavigate();
 
const handleButtonClick = (e) => {
    navigate(e.target.value);
    }


  return (
    <div>
      <div className="hero max-h-screen bg-red-600">
      <div className="hero-content flex-col lg:flex-row">
        <img src="src/images/main1.jpg" className="max-w-lg rounded-lg shadow-2xl border-8 border-black"/>
        <div>
          <h1 className="text-5xl font-bold text-white">Spinning</h1>
          <p className="py-6 text-white text-justify">
          A spinning az egyik legkiválóbb kardió edzés, mely egyszerre fejleszti a testet és a lelket, a mentális képességeket és az állóképességet is. Ez a mozgásforma méltán népszerű, mára már filozófiává, életformává nőtte ki magát. 
          A legjobb, hogy kortól és nemtől függetlenül bárki űzheti. 
          </p>
          <Link to="/load" state={{name:'Spinning', short:'spinning'}}><button className="btn btn-primary" id="load" value='/load'onClick={(e)=> handleButtonClick(e)}>Jelentkezés</button></Link>
        </div>
      </div>
    </div>
    <div className="hero max-h-screen bg-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img id="responsive" src="src/images/main2.jpg"className="max-w-lg rounded-lg shadow-2xl border-8 border-red-600"/>
        <div>
          <h1 className="text-5xl font-bold text-white">Aerobik</h1>
          <p className="py-6 text-white text-justify">
          Az aerobik az aerob szóból származik. Definícióját tekintve jelentése: „az oxigén jelenléte”.
          Minden gyakorlatot, ami nagy izomcsoportok megmozgatását, ritmust és ismétléseket igényel, ennek – vagyis oxigént igénylőnek – nevezhetünk.
          </p>
        <Link to="/load" state={{name:'Aerobic', short:'arobic'}}><button className="btn btn-primary" id="load" value='/load'onClick={(e)=> handleButtonClick(e)}>Jelentkezés</button></Link>
       
        </div>
      </div>
    </div>
    <div className="hero max-h-screen bg-red-600">
      <div className="hero-content flex-col lg:flex-row">
        <img src="src/images/main3.jpg" className="max-w-lg rounded-lg shadow-2xl border-8 border-black"/>
        <div>
          <h1 className="text-5xl font-bold text-white">Crossfitt</h1>
          <p className="py-6 text-white text-justify">
          A CrossFit a funkcionális edzés alapjaira épül, és annak eszköztárát alkalmazza a programjai megalkotása során, egyaránt merítve a súlyemelés, erőemelés, gimnasztika, állóképességi sportok területéről. 
          Egy mondatban meghatározva a CrossFit funkcionális edzés magas intenzitáson végrehajtva állandó változatosság mellett. 
          6 állomásos keret, cross fit rudak és tárcsák, GHD pad, concept2 ergométer, airbike, kettlebell, freerun- és stairmaster hiit futópad áll rendelkezésedre, hogy fejleszd kondícionális képességeidet.
          </p> 
        </div>
        <Link to="/load" state={{name:'Crossfitt', short:'crossfitt'}}><button className="btn btn-primary" id="load" value='/load'onClick={(e)=> handleButtonClick(e)}>Jelentkezés</button></Link>
        
         </div>
    </div>
    </div>
 
  )
}

export default Training
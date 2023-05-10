import {useState} from 'react';
import {Link} from 'react-router-dom';
/*import {useNavigate} from 'react-router-dom';
import UserContext from './context/UserContext';
import {toast} from 'react-toastify';
import {useNavigate} from 'reac-router-dom';*/

function Register() {
  /*const navigate=useNavigate();
    const{update}=useContext(UserContext);

    let formObj={
        username:"",
        phone:"",
        adress:"",
        email:"",
        password:""
    }

    const [formData,setFormData]=useState(formObj);

    const writeData=(e)=>{
        setFormData((prev)=>({...prev,[e.target.id]:e.target.value}))
    }

    const kuldes=(adat)=>{
        fetch('...........',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        })
        .then(res=>res.json())
        .then(token=>{
            if(!token.message){
                sessionStorage.setItem('usertoken',token);
                //toast.success('Sikeres regisztráció!',{position: toast.POSITION.BOTTOM_RIGHT})
                alert("Sikeres regisztráció!");
                update();
                navigate('/login');
                
            } else {
                //toast.error(token.message,{position: toast.POSITION.BOTTOM_RIGHT});
                alert(token.message);
            }
        })
        //.catch(err=>toast.error(err,{position: toast.POSITION.BOTTOM_RIGHT}))
        .catch(alert(error));
    }*/

const [succes,setSucces]=useState(false);

const onSubmit=(e)=>{
  e.preventDefault();
  //kuldes(formData);
  setSucces(true);
}

  return (
   <div>
    <div className="hero max-h-screen bg-red-600">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <form>
              <label className="label">
                <span className="label-text font-bold text-2xl">Név</span>
              </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Teljes név"
                  className="input input-bordered border-x-black w-full max-w-xs"
                />
                 <label className="label">
                <span className="label-text font-bold text-2xl">Telefon</span>
              </label>
                <input
                  type="phone"
                  id="phone"
                  placeholder="Telefonszám +36 ..........."
                  className="input input-bordered border-x-black w-full max-w-xs"
                />
                <label className="label">
                <span className="label-text font-bold text-2xl">Lakcím</span>
              </label>
                <input
                  type="text"
                  id="adress"
                  placeholder="Lakcím"
                  className="input input-bordered border-x-black w-full max-w-xs"
                />
                <label className="label">
                <span className="label-text font-bold text-2xl">Email</span>
              </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="input input-bordered border-x-black w-full max-w-xs"
                />
                <label className="label">
                <span className="label-text font-bold text-2xl">Jelszó</span>
              </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Jelszó"
                  className="input input-bordered border-x-black w-full max-w-xs"
                />
               
              </form>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-black" onClick={(e)=> onSubmit(e)}>Elküld</button>
              {succes && <p className="text-green-500 mt-4">Sikeres regisztráció!</p>}
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">REGISZTRÁCIÓ</h1>
          <p>
            <label className="label">
              <a
                href="Login"
                className="label-text-alt font-bold text-xl link link-hover"
              >
                Már regisztráltál? Itt bejelentkezhetsz.
              </a>
            </label>
          </p>
        </div>
      </div>
      
    </div>
    <div className="bg-black">
        <Link to="/">
          <button
            className="bg-blue-600 hover:bg-red-500 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline items-center"
            type="button"
          >
            Vissza a főoldalra
          </button>
        </Link>
      </div>
    </div> 
  );
}

export default Register;

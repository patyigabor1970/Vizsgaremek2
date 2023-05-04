//import { useState, useContext } from 'react';
//import { useNavigate } from 'react-router-dom';
//import UserContext from './context/UserContext';
//import {toast} from 'react-toastify';
import Register from "./Register";

function Login() {
  /*const navigate = useNavigate();
  const{update}=useContext(UserContext);
  let formObj = {
    email: "",
    password: ""
  }

  const [formData, setFormData] = useState(formObj);

  const writeData=(e)=>{
    setFormData((prev)=>({...prev,[e.target.id]:e.target.value}))
}

const kuldes=(adat)=>{
  fetch('..',{
    method:'POST',
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify(adat)
  })
  .then(res=>res.json())
  .then(token=>{
    if(!token.message){
      sessionStorage.setItem('usertoken',token);
      //toast.success('Sikeres belépés!',{position: toast.POSITION.BOTTOM_RIGHT});
      alert('Sikeres belépés!');
      update();
      navigate('/');
    } else {
      //toast.error(token.message,{position: toast.POSITION.BOTTOM_RIGHT});
      alert(token.message);
    }
  })
  //.catch(err=>toast.error(token.message,{position: toast.POSITION.BOTTOM_RIGHT}));
  .catch(alert(err));

}

const onSubmit=(e)=>{
  e.preventDefault();
  kuldes(formData);

}*/

  return (
    <div className="hero max-h-screen bg-red-600">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">BEJELENTKEZÉS</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-2xl">Email</span>
              </label>
              <input
                type="text"
                id="email"
                placeholder="admin@admin.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-2xl">Jelszó</span>
              </label>
              <input
                type="text"
                placeholder="admin1234"
                className="input input-bordered"
              />
              <label className="label">
                <a
                  href="Register"
                  className="label-text-alt link link-hover font-bold text-xl"
                >
                  Még nem regisztráltál? Itt megteheted.
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-black">Elküld</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

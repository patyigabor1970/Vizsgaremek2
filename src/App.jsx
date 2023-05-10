import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trainers from "./components/Trainers";
import Training from "./components/Training";
import Price from "./components/Price";
import Login from "./components/Login";
import Register from "./components/Register";
import Load from "./components/Load";
import TrainerDatas from "./components/TrainerDatas";
import GuestDatas from "./components/GuestDatas";


function App() {
  return (
    <div>
    <Header />
        <div>
          <Router>
          <Navbar />
          <Routes>
         <Route path='/' element={<Main />}/>
         <Route path='/trainers' element={<Trainers />}/>
         <Route path='/training' element={<Training />}/>
         <Route path='/price' element={<Price />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/register' element={<Register />}/>
         <Route path='/load' element={<Load />}/>
         <Route path='/trainerdatas' element={<TrainerDatas />}/>
         <Route path='/guestdatas' element={<GuestDatas />}/>
        
        </Routes>
      </Router>
      
       
        
        </div>
        
        <Footer />
      
         
        


      
        </div>

  
  );
}

export default App;

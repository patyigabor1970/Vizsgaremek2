import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trainers from "./components/Trainers";
import Users from "./components/Users";
import Training from "./components/Training";
import Price from "./components/Price";
import Login from "./components/Login";
import Register from "./components/Register";
import Aerobic from "./components/Aerobic";

function App() {
  return (
    <div>
    <Header />
        <div>
          <Router>
          <Navbar />
          <Routes>
         <Route path='/' element={<Main />}/>
         <Route path='/users' element={<Users />}/>
         <Route path='/trainers' element={<Trainers />}/>
         <Route path='/training' element={<Training />}/>
         <Route path='/price' element={<Price />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/register' element={<Register />}/>
         <Route path='/aerobic' element={<Aerobic />}/>
        </Routes>
      </Router>
      
       
        
        </div>
        
        <Footer />
      
         
        


      
        </div>

  
  );
}

export default App;

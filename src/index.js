import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import {FaUser,FaFacebook,FaInstagram,FaYoutube} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Zoom from "react-reveal/Zoom";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import {FaAngleUp} from "react-icons/fa";
//import Home from "./components/home";
import Activity from "./components/activity";
import Contact from "./components/contact";
import Dining from "./components/dining";
import Event from "./components/event";
import Gallery from "./components/gallery";
import Offer from "./components/offer";
import Room from "./components/room";
function Params() {
  const[visible,setVisible]=useState(false)
  const elem=document.body;
  elem.style.backgroundColor='#DCDCDC';
  const confirmBox=()=>{
    window.confirm('https://www.bambolimbeachresort.com wants to open this application.');
  }
  window.onscroll = function() {scrollFunction()};
  const scrollFunction=()=>{
    if ( document.documentElement.scrollTop > 25)
    {
      setVisible(true)
      
    }
    else if(document.body.scrollTop===0){
      setVisible(false)
    }
  }

  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
             
              <img src="https://www.bambolimbeachresort.com/wp-content/uploads/2019/07/image.png"alt=""className="w-100"/></li>
          <li className="nav-item"><NavLink to="/"className="nav-link mt-3">WEDDINGS&EVENTS</NavLink></li>
          <li className="nav-item"><NavLink to="room"className="nav-link mt-3">ROOMS</NavLink></li>
          <li className="nav-item"><NavLink to="dining"className="nav-link mt-3">DINING</NavLink></li>
          <li className="nav-item"><NavLink to="offer"className="nav-link mt-3">OFFERS</NavLink></li>
          <li className="nav-item"><NavLink to="gallery"className="nav-link mt-3">GALLERY</NavLink></li>
          <li className="nav-item"><NavLink to="activity"className="nav-link mt-3">ACTIVITIES</NavLink></li>
          <li className="nav-item"><NavLink to="contact"className="nav-link mt-3">CONTACT</NavLink></li>
          </ul>
          </div>
          <div className=" d-flex ms-auto mt-3" id="second-nav">
            <li className="nav-item"onClick={confirmBox}>< a href="#" className="nav-link">+9182255244</a></li>
            <li className="nav-item"><a href="#"className="nav-link">BOOK YOUR STAY</a></li>
          </div>
        </nav>
      
      {  visible &&  <Zoom><div className="arrow"onClick={()=>window.scrollTo({behavoiur:'smooth',top:0})}>
          <FaAngleUp id="farrow"/>
        </div></Zoom>
}
      </div>
      <Routes>
       
        <Route path="/"element={<Event/>}/>
        <Route path="room"element={<Room/>}/>
        <Route path="dining"element={<Dining/>}/>
        <Route path="gallery"element={<Gallery/>}/>
        <Route path="offer"element={<Offer/>}/>
        <Route path="activity"element={<Activity/>}/>
        <Route path="contact"element={<Contact/>}/>
      </Routes>
      <div className="container-fluid bg-secondary">
        <div className="container pt-5">
          <div className="row gap-5">
            <div className="col-sm-2">
              <img src="https://www.bambolimbeachresort.com/wp-content/uploads/2020/02/BBR-WHITE-LOGO-2048x638.png"alt=""className="w-75"/>
            </div>
            <div className="col-sm-2">
              <p className="main-footer-text">ADDRESS</p>
              <p className="pt-3 text-white">Bambolim Beach Resort
Goa University Road
Bambolim Beach
Bambolim, Goa – 403206</p>
            </div>
            <div className="col-sm-2">
              <p className="main-footer-text">PHONE</p>
              <p className="pt-3 text-white">Mobile / Whatsapp
(9:00 am – 7:00 pm)
+91 9823020999</p>
            </div>
            <div className="col-sm-2">
              <p className="main-footer-text">SALES</p>
              <p className="pt-3 text-white">Reservation & Sales Team
(9:00 am – 7:00 pm)
0832 – 6748000 / 01 / 02 OR 0832 – 2459925
sales@bambolimbeachresort.com</p>
            </div>
            <div className="col-sm-2">
              <p className="main-footer-text">FOLLOW US</p>
<div className="d-flex justify-content-center align-items-center gap-3"id="icons">
   <FaFacebook onClick={()=>location.href='https://www.facebook.com/bambolimbeachresort'}/>
   <FaInstagram onClick={()=>location.href='https://www.instagram.com/bambolimbeachresort'}/>
   <FaYoutube onClick={()=>location.href='https://www.youtube.com/bambolimbeachresort'}/>
</div>
            </div>
            <p id="line"></p>
        <p className='text-center text-white'>Copyright © Bambolim Beach Resort 2021.</p>
          </div>
         
        </div>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Params />);

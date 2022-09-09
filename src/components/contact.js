import React,{useState} from "react";
import "./head.css";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import {MdLocationPin} from "react-icons/md";
import {FaMobile,FaEnvelope} from "react-icons/fa";
import MapContainer from "./map";
const Contact=()=>{
    const[userName,setUserName]=useState('');
    const[mail,setMail]=useState('');
    const[number,setNumber]=useState('');
    const[message,setMessage]=useState('');
    const formHandler=(e)=>{
e.preventDefault();
    const enteredValues={userName,mail,number,message}
console.log(enteredValues)
    }

    return (<>
    <img src="https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/DSC04003-1-min-2.jpg"alt=""loading="lazy"className="w-100"id="event-image"/>
    <Flip left><h1 className="text-center text-white">CONTACT</h1></Flip>
  <div className="container"id="first-row">
    <div className="row">
        <div className="col-sm-3">
            <p className="contact-text">CONTACT US</p>
            <p>If you need any help, please contact us or send us an email. We are sure that you can receive our reply as soon as possible.</p>
        </div>
        <div className="col-sm-3">
            <MdLocationPin id="location-logo"/>
            <p className="pt-3">ADDRESS</p>
            <p className="text-secondary">Goa University Road, Bambolim Beach, Bambolim, Goa – 403206</p>
        </div>
        <div className="col-sm-3">
            <FaMobile id="location-logo"/>
            <p className="pt-3">PHONE</p>
            <p className="text-secondary">Reservation & Sales Team
(9:00 am - 7:00 pm)
0832 - 6748000 / 01 / 02 OR 0832 - 2459925
<br/><br/>
Mobile / Whatsapp
(9:00 am - 7:00 pm)
9823020999</p>
        </div>
        <div className="col-sm-3">
            <FaEnvelope id="location-logo"/>
            <p className="pt-3">EMAIL</p>
            <p className="text-secondary">sales@bambolimbeachresort.com</p>
        </div>
    </div>
    </div>
    <div className="container bg-light mt-5">
        <div className="row">
         <div className="col-sm-5  p-5">
             <p id="contact-form-header">Contact our Sales Team</p>
                <p>If you have any question. Please don’t hesitate to send us a message</p>
                <Fade bottom> <form onSubmit={formHandler}>
                    <label for="name">Your Name*</label><br/>
                    <input type="text" required maxlength='15'id="name" onChange={(e)=>setUserName(e.target.value)} value={userName}/><br/><br/>
                    <label for="mail">Email*</label><br/>
                    <input type="mail"required id="mail" onChange={(e)=>setMail(e.target.value)} value={mail}/><br/><br/>
                    <label for="number">Phone Number</label><br/>
                    <input type="text" id="number" onChange={(e)=>setNumber(e.target.value)}value={number}/><br/><br/>
                    <label for="subject">Subject(optional)</label><br/>
                    <input type="text" id="subject"/><br/><br/>
                    <label for="textarea">Here goes your message*</label><br/>
                    <textarea className='noscrollbars'required id="textarea"onChange={(e)=>setMessage(e.target.value)} value={message}/><br/><br/>
                    <button id="form-button">Send Message</button>
                </form></Fade>
            </div>
            <div className="col-sm-7">
                <MapContainer/>
                <p id="map-info">
                Arriving Here:<br/>
Flight – Goa International Airport, Dabolim (30 minutes)<br/>
Train – Karmali Railway Station (18 minutes); Madgaon Junction (58 minutes)<br/>
Bus – Panjim Bustand (15 mins)
                </p>
            </div>
        </div>
    </div>
    </>)
}
export default Contact
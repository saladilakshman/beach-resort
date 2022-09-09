import React,{useState} from "react";
import "./head.css";
import Flip from "react-reveal/Flip";
import emailjs from '@emailjs/browser';
const Event=()=>{
    const[name,setName]=useState('');
    const[mail,setMail]=useState('');
    const formSubmission=(e)=>{
        e.preventDefault();
        const values={name,mail}
        emailjs.send('service_lqfpluu', 'template_dd57ztd', values, 'la-wuiCLG3nPGdj4T')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}
    const firstRow=[{id:1,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/image-4.jpg',title:'Outdoor',type:'Roots',desc:'Upto 500 Guests | Garden Lawns'},
    {id:2,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/image-3.jpg',title:'Outdoor',type:'Beach Weddings',desc:'Upto 200 Guests | Beach'},
    {id:3,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/image-2.jpg',title:'Indoor',type:'Sea Shore',desc:'Upto 180 Guests | Beach View Banquet Hall'}]





    const secondRow=[{id:1,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2020/02/Titatic-Bow-Sea-Touch-1-1.jpg',title:'Outdoor',type:'Titanic Bow',desc:'Upto 80 Guests | Seaborne Restaurant'},
    {id:2,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/02/Labamba-min.jpg',title:'Indoor',type:'La Bamba',desc:'Upto 120 Guests | Beach View Restaurant'},
    {id:3,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2020/02/section-5-Oasis-1-1.jpg',title:'Indoor',type:'Oasis',desc:'Upto 180 Guests | Banquet Hall'}]


const thirdRow=[{id:1,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2020/02/14-1__01-1.jpg',title:'Outdoor',type:'Galac Sea',desc:'Upto 120 Guests | Beach View Porch'},
{id:2,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2020/03/outdoor-1-1-min.jpg',title:'Outdoor',type:'PoolSide',desc:'Upto 50 Guests | Beach & Pool view Lounge Space'},
{id:3,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2020/02/bambolim-lawns.jpg',title:'Outdoor',type:'Beach Touch Lawns',desc:'Upto 200 Guests | Garden Lawns'}]

const fourthRow=[{id:1,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/Conch-1.jpg',title:'Indoor',type:'Conch',desc:'Upto 35 Guests | Beach View Hall'},
{id:2,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/image-2-min.jpg',title:'Outdoor',type:'Bambolim Outdoor Lawns',desc:'Upto 800 Guests | Lawns'}]


    return (<>
    <img src="https://www.bambolimbeachresort.com/wp-content/uploads/2020/03/2-min.jpg"alt=""loading="lazy"className="w-100"id="event-image"/>
    <Flip left><h1 className="text-center text-white">WEEDINGS&EVENTS</h1></Flip>
    <div className="d-flex justify-content-center align-items-center"id="first-row">
        <div className="col-sm-9  d-flex justify-content-center align-items-center gap-3">
{firstRow.map((item)=>{
    return <div key={item.id} className="cards">
        <img src={item.img}alt=""className="w-100"/>
        <p className="text-center">{item.title}</p>
        <p className="text-center"id="type-text">{item.type}</p>
        <p className="text-center">{item.desc}</p>
    </div>
})}
        </div>
        </div>


        <div className="d-flex justify-content-center align-items-center"id="second-row">
        <div className="col-sm-9  d-flex justify-content-center align-items-center gap-3">
{secondRow.map((item)=>{
    return <div key={item.id} className="cards">
        <img src={item.img}alt=""className="w-100"/>
        <p className="text-center">{item.title}</p>
        <p className="text-center"id="type-text">{item.type}</p>
        <p className="text-center">{item.desc}</p>
    </div>
})}
        </div>
        </div>


        <div className="d-flex justify-content-center align-items-center"id="second-row">
        <div className="col-sm-9  d-flex justify-content-center align-items-center gap-3">
{thirdRow.map((item)=>{
    return <div key={item.id} className="cards">
        <img src={item.img}alt=""className="w-100"/>
        <p className="text-center">{item.title}</p>
        <p className="text-center"id="type-text">{item.type}</p>
        <p className="text-center">{item.desc}</p>
    </div>
})}
        </div>
        </div>


        <div className="d-flex justify-content-center align-items-center"id="second-row">
        <div className="col-sm-6 me-auto d-flex gap-3"id="fourthrow">
{fourthRow.map((item)=>{
    return <div key={item.id} className="cards">
        <img src={item.img}alt=""className="w-100"/>
        <p className="text-center">{item.title}</p>
        <p className="text-center"id="type-text">{item.type}</p>
        <p className="text-center">{item.desc}</p>
    </div>
})}
        </div>
        </div>


<div className="block mt-5"id="block">
    <h3 className="text-white text-center">Know Everything About<br/>
Our Weddings & Event Spaces</h3>
<form onSubmit={formSubmission}>
<div className="d-flex justify-content-center align-items-center gap-1 pt-3">
    <label for="html">NAME:</label> 
<input type="text"required id="html"onChange={(e)=>setName(e.target.value)} value={name}/>
</div>
<div className="d-flex justify-content-center align-items-center gap-1 pt-3">
    <label for="html">EMAIL:</label> 
<input type="email"required id="html"onChange={(e)=>setMail(e.target.value)} value={mail}/>
</div>
<div className="d-flex justify-content-center align-items-center gap-1 pt-3">
<button>Send Download Link</button>
</div>
</form><br/>
</div>

    </>)
}
export default Event
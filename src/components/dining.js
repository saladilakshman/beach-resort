import React from "react";
import "./head.css";
import Flip from "react-reveal/Flip";
const Dining=()=>{
    return (<>
    <img src="https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/Dining-Banner-min.jpg"alt=""loading="lazy"className="w-100"id="event-image"/>
    <Flip left><h1 className="text-center text-white">DINING</h1></Flip>
    <div className="container bg-fluid"id="first-row">
        <div className="row">
            <div className="col-sm-6">
                <img src="https://www.bambolimbeachresort.com/wp-content/uploads/elementor/thumbs/7-min-p1vngky1rg766b5rta68qbkhjxdel7iwzk37lr2azk.jpg"alt=""className="w-100"/>
            </div>
            <div className="col-sm-6">
                <div className="d-flex justify-content-center align-items-center">
                <div className="box">
                <p>Outdoor</p>
                <p id="room-text">Titanic Bow</p>
                <p>Let your palate set sail as you indulge delicious grills at one of Goa’s only seaborne restaurants with the ocean crashing against its hull. The ultimate place for a sundowner soiree or a romantic dinner.</p>
                <hr/>
                </div>
                </div>
            </div>
        </div>


<div className="row">
<div className="col-sm-6">
                <div className="d-flex justify-content-center align-items-center">
                <div className="box">
                <p>Outdoor</p>
                <p id="room-text">La Bamba</p>
                <p>Appease your taste-buds while you treat your eyes at our beach-side all-day multicuisine restaurant inspired by the Goan beat. Enjoy Goa’s endless summer breeze while you dine alfresco or unwind with a mojito.</p><hr/>
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <img src="https://www.bambolimbeachresort.com/wp-content/uploads/elementor/thumbs/1_-min-p1vnf82fw2c9el4rqp1n4nwinw2bgy4vgu5ynd2rz4.jpg"alt=""className="w-100"/>
            </div>
</div>

    </div>
    </>)
}
export default Dining
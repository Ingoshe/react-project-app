import React from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button'


function Events(props) {
 

  return (
    <>
    {/* <div className="border solid rounded-lg m-4">
      <img style={{ width: '19rem' }} src={props.img} alt="event" />
      <h3>{props.name} </h3>
      <h4>{props.date}</h4>
      <h5>{props.location}</h5>
      <a href="form">
      <Button variant="info">Info</Button>
      </a>
      <NavLink to="form">
      <Button variant="info">Info</Button>
      </NavLink>
    </div> */}
     <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" style={{height:"61vh"}} src={props.img} alt="event" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{props.date}</p>
        <p className="text-gray-700 text-base">{props.location}</p>
        <a href="form">
          <Button variant="info">Book</Button>
        </a>
      </div>
    </div>

    
    </>
  );
}

export default Events;

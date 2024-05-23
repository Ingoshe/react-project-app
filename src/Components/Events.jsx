import React from "react";

import Button from "react-bootstrap/Button";

function Events(props) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          style={{ height: "61vh" }}
          src={props.img}
          alt="event"
        />
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

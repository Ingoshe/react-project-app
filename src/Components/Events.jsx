import React from 'react'

function Events(props) {
    
  return (
    <div className='rounded-full'>
        <img src={props.img} alt="event" />
        <h3>{props.name} </h3>
        <h4>{props.date}</h4>
        <h5>{props.location}</h5>

    </div>
  )
}

export default Events
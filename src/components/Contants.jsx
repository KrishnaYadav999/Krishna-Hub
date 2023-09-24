import React from 'react'

export default function Contants(props) {
  return (
   <div className='root' style={{display : 'inline-block'}}>
       <div class="card" style={{width : '18rem',marginTop : '10px',marginLeft : '10px'}}>
      <img src={props.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <span class="card-title" style={{color : 'red'}}>Rating : {props.rating}</span>
        <p class="card-text">{props.description}</p>
        <h5 class="" style={{color : 'green'}}>{props.categories}</h5>
        <a href={props.link} class="btn btn-primary" style={{marginLeft : '60px',backgroundColor : 'green'}}>Watch now</a>
      </div>
    </div>
   </div>
  )
}


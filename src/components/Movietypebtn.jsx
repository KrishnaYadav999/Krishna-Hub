import React, { useState } from 'react';
import Dataall from './Dataall';

export default function Movietypebtn({ movies, setMovies }) {
    const buttonStyle = {
        marginLeft: '10px',
        marginTop: '10px'
    };

    const filterMovie = (catItems) => {
        
        
        const updatedMovies = Dataall.filter((element) => {
            return element.categories === catItems;
        });
    
        
    
        setMovies(updatedMovies);
    };

    return (
        <div className='root-btn'>
            <button type="button" className="btn btn-outline-success" style={buttonStyle} onClick={() => filterMovie('Action')}>Action</button>
            <button type="button" className="btn btn-outline-success" style={buttonStyle} onClick={() => filterMovie('Adventure')}>Adventure</button>
            <button type="button" className="btn btn-outline-success" style={buttonStyle} onClick={() => filterMovie('Comedy')}>Comedy</button>
            <button type="button" className="btn btn-outline-success" style={buttonStyle} onClick={() => filterMovie('Crime')}>Crime</button>
            <button type="button" className="btn btn-outline-success" style={buttonStyle} onClick={() => filterMovie('Sci-Fi')}>Sci-Fi</button>
            <button type="button" className="btn btn-outline-success" style={buttonStyle} onClick={() => filterMovie('Horror')}>Horror</button>
            <button type="button" className="btn btn-outline-success" style={buttonStyle} onClick={() => setMovies(Dataall)}>All</button>
        </div>
    );
}



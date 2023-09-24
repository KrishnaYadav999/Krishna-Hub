import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const img1 = {
  height : '200px',
  ObjectFit:'contaner'
}

export default function App() {
  return (
       <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='Add1.jpg'
        alt='...'
        style={img1}
      >

      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='Add2.jpg'
        alt='...'
        style={img1}
      >

      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='Add3.jpeg'
        alt='...'
        style={img1}
      >
      
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/SwiperImages/1.jpg'
import img2 from '../assets/SwiperImages/2.jpg'
import img3 from '../assets/SwiperImages/3.jpg'
import img4 from '../assets/SwiperImages/4.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
   };

   return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item>
            <img src={img1} alt="" width="100%" />
            <Carousel.Caption>
               <h3>First slide label</h3>
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img src={img2} alt="" width="100%" />
            <Carousel.Caption>
               <h3>Second slide label</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img src={img3} alt="" width="100%" />
            <Carousel.Caption>
               <h3>Third slide label</h3>
               <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
               </p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img src={img4} alt="" width="100%" />
            <Carousel.Caption>
               <h3>Third slide label</h3>
               <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
               </p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
}

export default ControlledCarousel;
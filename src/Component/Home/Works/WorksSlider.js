import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";

const WorksSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
        <Slider className="px-5 py-4" {...settings}>
          <div>
            <img className="slider-image" src={'https://i.ibb.co/2Ykk97y/carousel-1-min.png'} alt=""/>
          </div>
          <div>
            <img className="slider-image"src={'https://i.ibb.co/SP3c7gR/carousel-2-min.png'} alt=""/>
          </div>
          <div>
            <img className="slider-image"src={'https://i.ibb.co/bJSwxfn/carousel-4-min.png'} alt=""/>
          </div>
          <div>
            <img className="slider-image"src={'https://i.ibb.co/QJ5Ct6z/carousel-5-min.png'} alt=""/>
          </div>
          
        </Slider>
      </div>
    );
};

export default WorksSlider;
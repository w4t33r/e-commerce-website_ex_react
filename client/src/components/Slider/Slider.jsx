import React, {useState} from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './slider.scss'

const Slider = () => {

    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        setCurrent(current === 0 ? 2 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrent(current === 2 ? 0 : (prev) => prev + 1);
    }

    const sliderImg = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    return (
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${current * 100}vw)`}}>
                <img src={sliderImg[0]} alt=""/>
                <img src={sliderImg[1]} alt=""/>
                <img src={sliderImg[2]} alt=""/>
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackIosIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIosIcon/>
                </div>
            </div>
        </div>
    );
};

export default Slider;
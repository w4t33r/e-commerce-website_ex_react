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
        "https://www.thesun.co.uk/wp-content/uploads/2020/06/NINTCHDBPICT000592589789.jpg?strip=all&quality=100&w=1800&h=1201&crop=1",
        "https://beautyhack.ru/assets/images/2020/06/aurora-ad8_a87efb692e79826fef0df607e21e99ed.jpg",
        "https://beautyhack.ru/assets/images/2020/06/0018.jpg",
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
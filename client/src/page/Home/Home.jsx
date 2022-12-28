import React from 'react';
import Slider from '../../components/Slider/Slider'
import './home.scss'
import FeaturedProduct from "../../components/Featured_product/FeaturedProduct";
const Home = () => {
    return (
        <div className='home'>
        <Slider/>
            <FeaturedProduct type='Featured'/>
            <FeaturedProduct type='Trend'/>
        </div>
    );
};

export default Home;
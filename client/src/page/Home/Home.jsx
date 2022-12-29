import React from 'react';
import Slider from '../../components/Slider/Slider'
import './home.scss'
import FeaturedProduct from "../../components/Featured_product/FeaturedProduct";
import Category from "../../components/Category/Category"
import Contact from "../../components/Contact/Contact";
const Home = () => {
    return (
        <div className='home'>
        <Slider/>
            <FeaturedProduct type='Featured'/>
            <Category/>
            <FeaturedProduct type='Trend'/>
            <Contact/>
        </div>
    );
};

export default Home;
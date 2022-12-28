import React from 'react';
import './card.scss'
import {Link} from 'react-router-dom'
const Card = ({item}) => {
    return (
        <Link className='link' to={`/product/${item.id}`}>
        <div className='card'>
        <div className="images">

            <img src={item.img} alt="" className='firstImg'/>
            <img src={item.img2} alt="" className='secondImg'/>
        </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
            </div>
        </div>
        </Link>
    );
};

export default Card;
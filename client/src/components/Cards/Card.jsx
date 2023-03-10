import React from 'react';
import './card.scss'
import {Link} from 'react-router-dom'

const Card = ({item}) => {
    return (
        <Link className='link' to={`/product/${item.id}`}>
            <div className='card'>
                <div className="images">
                    {item?.attributes.isNew && <span>New Collection</span>}
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url} alt=""
                         className='firstImg'/>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url} alt=""
                         className='secondImg'/>
                </div>
                <h2>{item.attributes.title}</h2>
                <div className="prices">
                    <h3>{item?.attributes.price + 200} SEK</h3>
                    <h3>{item.attributes.price} SEK</h3>
                </div>
            </div>
        </Link>
    );
};

export default Card;
import React from 'react';
import './product.scss'
import {useState} from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
    const images = [
        "https://cdn.pixabay.com/photo/2016/06/29/08/41/wedding-dresses-1486256_960_720.jpg",
        "https://cdn.pixabay.com/photo/2021/07/14/15/43/woman-6466382_960_720.jpg",
    ];
    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)
    return (
        <div className='product'>
            <div className="imageContainer">
                <div className="images">
                    <img src={images[0]} alt="" onClick={() => setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={() => setSelectedImg(1)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt=""/>
                </div>
            </div>
            <div className="productInfo">
                <h2>title</h2>
                <span className='price'>222 sek</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate dignissimos iusto odio
                    praesentium quisquam. Aspernatur assumenda beatae eos exercitationem ipsa iure, libero magni, quis
                    rem rerum sed vero. Praesentium?
                </p>
                <div className="quantity">
                    <button onClick={() => {
                        setQuantity(prev => prev === 1 ? 1 : prev - 1)
                    }}>-
                    </button>
                    {quantity}
                    <button onClick={() => {
                        setQuantity(prev => prev + 1)
                    }}>+
                    </button>
                </div>
                <button className="addToCart">
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="link">
                    <div className="item">
                        <FavoriteBorderIcon/> ADD TO WISHLIST
                    </div>
                    <div className="item">
                        <BalanceIcon/>ADD TO COMPARE
                    </div>
                </div>
                <div className="itemInfo">
                    <span>Lorem: Lorem</span>
                    <span>Product Type: Lorem</span>
                    <span>Tag: Dress, Weeding</span>
                </div>
                <hr />
                <div className="itemInfo">
                    <span>DESCRIPTION</span>
                    <span>ADDITIONAL INFORMATION</span>
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
};

export default Product;
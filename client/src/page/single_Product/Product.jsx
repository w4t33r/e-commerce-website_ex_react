import React from 'react';
import './product.scss'
import {useState} from 'react'
import {useParams} from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/cartReducer";

const Product = () => {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch();
    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
    return (
        <div className='product'>
            {loading ? "loading" : (<>
                <div className="imageContainer">
                    <div className="mainImg">
                        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={() => setSelectedImg("img")}/>
                        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={() => setSelectedImg("img2")}/>
                    </div>
                </div>
                <div className="productInfo">
                    <h2>{data?.attributes?.title}</h2>
                    <span className='price'>{data?.attributes?.price} SEK</span>
                    <p>{data?.attributes?.desc}
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
                    <button className="addToCart" onClick={()=> dispatch(addToCart({
                        id:data.id,
                        title:data.attributes.title,
                        desc:data.attributes.desc,
                        price:data.attributes.price,
                        img:data.attributes.img.data.attributes.url,
                        quantity,
                    }))}>
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
                    <hr/>
                    <div className="itemInfo">
                        <span>DESCRIPTION</span>
                        <span>ADDITIONAL INFORMATION</span>
                        <span>FAQ</span>
                    </div>
                </div></> )}
        </div>
    );
};

export default Product;
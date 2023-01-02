import React from 'react';
import './cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {useDispatch, useSelector} from "react-redux";
import {removeItem, resetCart} from "../../redux/cartReducer";

const Cart = () => {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch();
    const totalPrice = () =>{
        let total = 0
        products.forEach((item) => (total += item.quantity * item.price))
        return total.toFixed(2)
    }
    return (
        <div className='cart'>
            <h2>Products in your cart</h2>
            {products?.map(item => (
                <div className='cartItem' key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt=""/>
                    <div className="cartDetails">
                        <h2>{item.title}</h2>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="cartPrice">
                            {item.quantity} > SEK:{item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon className='cartDelete' onClick={() => dispatch(removeItem(item.id))}/>
                </div>
            ))}
            <div className="cartTotal">
                <span>{totalPrice()} SEK</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='cartReset' onClick={() => dispatch(resetCart())}> Reset Cart </span>
        </div>
    );
};

export default Cart;
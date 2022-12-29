import React from 'react';
import './cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_960_720.jpg",
            img2: "https://cdn.pixabay.com/photo/2021/12/05/12/29/christmas-tree-6847584_960_720.jpg",
            title: 'Love',
            desc: 'Love',
            isNew: true,
            oldPrice: 200,
            price: 100,
        },
        {
            id: 2,
            img: "https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_960_720.jpg",
            img2: "https://cdn.pixabay.com/photo/2021/12/05/12/29/christmas-tree-6847584_960_720.jpg",
            title: 'Love',
            desc: 'Love',
            isNew: false,
            oldPrice: 200,
            price: 100,
        },
    ]
    return (
        <div className='cart'>
            <h2>Products in your cart</h2>
            {data?.map(item => (
                <div className='cartItem'> key={item.id}
                    <img src={item.img} alt=""/>
                    <div className="cartDetails">
                        <h2>{item.title}</h2>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="cartPrice"> 1 x {item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='cartDelete'/>
                </div>
            ))}
            <div className="cartTotal">
                <span>SUBTOTAL</span>
                <span>$132</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='cartReset'></span>
        </div>
    );
};

export default Cart;
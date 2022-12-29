import React from 'react';

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_960_720.jpg",
            img2: "https://cdn.pixabay.com/photo/2021/12/05/12/29/christmas-tree-6847584_960_720.jpg",
            title: 'Love',
            isNew: true,
            oldPrice: 200,
            price: 100,
        },
        {
            id: 2,
            img: "https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_960_720.jpg",
            img2: "https://cdn.pixabay.com/photo/2021/12/05/12/29/christmas-tree-6847584_960_720.jpg",
            title: 'Love',
            isNew: false,
            oldPrice: 200,
            price: 100,
        },
    ]
    return (
        <div className='cart'>
            <h2>Products in your cart</h2>
        </div>
    );
};

export default Cart;
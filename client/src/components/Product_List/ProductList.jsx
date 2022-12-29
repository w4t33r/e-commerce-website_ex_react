import React from 'react';
import './product_list.scss'
import Card from "../Cards/Card";

const ProductList = () => {
    const data = [
        {
            id: 1,
            img: "https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_960_720.jpg",
            img2: "https://cdn.pixabay.com/photo/2021/12/05/12/29/christmas-tree-6847584_960_720.jpg",
            title: 'Love',
            isNew: true,
            oldPrice: 700,
            price: 400,
        },
        {
            id: 2,
            img: "https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_960_720.jpg",
            img2: "https://cdn.pixabay.com/photo/2021/12/05/12/29/christmas-tree-6847584_960_720.jpg",
            title: 'Love',
            isNew: false,
            oldPrice: 6000,
            price: 3000,
        },
        {
            id: 3,
            img: "https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_960_720.jpg",
            img2: "https://cdn.pixabay.com/photo/2021/12/05/12/29/christmas-tree-6847584_960_720.jpg",
            title: 'Love',
            isNew: true,
            oldPrice: 200,
            price: 11,
        },
        {
            id: 4,
            img: "https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_960_720.jpg",
            img2: "https://cdn.pixabay.com/photo/2021/12/05/12/29/christmas-tree-6847584_960_720.jpg",
            title: 'Love',
            isNew: true,
            oldPrice: 700,
            price: 400,
        },
        {
            id: 5,
            img: "https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_960_720.jpg",
            img2: "https://cdn.pixabay.com/photo/2021/12/05/12/29/christmas-tree-6847584_960_720.jpg",
            title: 'Love',
            isNew: false,
            oldPrice: 6000,
            price: 3000,
        },
        {
            id: 6,
            img: "https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_960_720.jpg",
            img2: "https://cdn.pixabay.com/photo/2021/12/05/12/29/christmas-tree-6847584_960_720.jpg",
            title: 'Love',
            isNew: true,
            oldPrice: 200,
            price: 11,
        },
    ]
    return (
        <div className='product__list'>{data.map(item=>(
            <Card item={item} key={item.id}/>
        )
       )}
        </div>
    );
};

export default ProductList;
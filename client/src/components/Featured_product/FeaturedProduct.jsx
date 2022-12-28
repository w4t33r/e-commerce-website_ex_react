import React from 'react';
import Card from '../Cards/Card'
import './featured_product.scss'
const FeaturedProduct = ({type}) => {
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
        {
            id: 3,
            img: "https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_960_720.jpg",
            img2: "https://cdn.pixabay.com/photo/2021/12/05/12/29/christmas-tree-6847584_960_720.jpg",
            title: 'Love',
            isNew: true,
            oldPrice: 200,
            price: 100,
        },
    ]
    return (
        <div className='featuredProduct'>
            <div className="featured__title">
                <h2>{type} products</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque blanditiis consequatur
                    delectus dicta dolorem doloribus laboriosam minus obcaecati placeat, quaerat sint. Aliquam aliquid
                    eveniet illo laborum minus odit repudiandae.
                </p>
            </div>

            <div className="featured_bottom">
                {data.map(item => (
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProduct;
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import './products.scss';
import ProductList from "../../components/Product_List/ProductList";

const Products = () => {

    const categoryId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(80000)
    const [sort, setSort] = useState(null)
    return (
        <div className='products'>
            <div className='left'>
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type='checkbox' id='1' value={1}/>
                        <label htmlFor='1'>Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type='checkbox' id='2' value={2}/>
                        <label htmlFor='2'>Accesory</label>
                    </div>
                    <div className="inputItem">
                        <input type='checkbox' id='3' value={3}/>
                        <label htmlFor='3'>Weeding dress</label>
                    </div>
                    <div className="inputItem">
                        <input type='checkbox' id='4' value={4}/>
                        <label htmlFor='4'>Night dress</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type='range' min={0} max={80000} onChange={(e) => setMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id='asc' value='asc' name='price' onChange={e=>setSort('asc')}/>
                        <label htmlFor="asc"> Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id='asc' value='asc' name='price' onChange={e=>setSort('desc')}/>
                        <label htmlFor="asc"> Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className='products__img' src="https://cdn.pixabay.com/photo/2017/05/05/16/07/paper-boat-2287575_960_720.jpg" alt=""/>
                <ProductList categoryId={categoryId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    );
};

export default Products;
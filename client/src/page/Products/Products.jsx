import React from 'react';
import './products.scss'

const Products = () => {
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
                        <input type='range' min={0} max={20000}/>
                        <span>80000</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id='asc' value='asc' name='price'/>
                        <label htmlFor="asc"> Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id='asc' value='asc' name='price'/>
                        <label htmlFor="asc"> Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className='products__img' src="" alt=""/>
            </div>
        </div>
    );
};

export default Products;
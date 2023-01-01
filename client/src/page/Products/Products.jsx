import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import './products.scss';
import ProductList from "../../components/Product_List/ProductList";
import useFetch from "../../hooks/useFetch";

const Products = () => {

    const categoryId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(80000)
    const [sort, setSort] = useState(null)
    const [selectedSubCategory, setSelectedSubCategory] = useState([])

    const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${categoryId}`)
        console.log(data?.attributes)
    const handleChange = (e) => {
        const value = e.target.value
        const isChecked = e.target.checked

        setSelectedSubCategory(
            isChecked
                ?[...selectedSubCategory, value]
                :selectedSubCategory.filter((item)=> item !== value)
        );
    };
    console.log(data)

    return (
        <div className='products'>
            <div className='left'>
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    {data?.map((item) => (
                        <div className="inputItem" key={item.id}>
                            <input type='checkbox' id={item.id} value={item.id} onChange={handleChange}/>
                            <label htmlFor={item.id}>{item.attributes.title}</label>
                        </div>
                    ))}
                </div>
                <div className="filterItem">
                    <h2>Sort by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type='range' min={400} max={80000} onChange={(e) => setMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id='asc' value='asc' name='price' onChange={e => setSort('asc')}/>
                        <label htmlFor="asc"> Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id='asc' value='asc' name='price' onChange={e => setSort('desc')}/>
                        <label htmlFor="asc"> Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className='products__img'
                     src="https://cdn.pixabay.com/photo/2017/05/05/16/07/paper-boat-2287575_960_720.jpg" alt=""/>
                <ProductList categoryId={categoryId} maxPrice={maxPrice} sort={sort} subCat = {selectedSubCategory}/>
            </div>
        </div>
    );
};

export default Products;
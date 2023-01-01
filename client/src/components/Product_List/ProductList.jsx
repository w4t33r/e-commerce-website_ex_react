import React from 'react';
import './product_list.scss'
import Card from "../Cards/Card";
import useFetch from "../../hooks/useFetch";

const ProductList = ({subCat, maxPrice, sort, categoryId}) => {

    const {data, loading, error} = useFetch(
        `/products?populate=*&[filters][categories][id]=${categoryId}${subCat.map(
            item => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)


    return (
        <div className='product__list'>
            {loading
                ? "loading"
                : data?.map((item) => <Card item={item} key={item.id}/>)}
        </div>
    );
};

export default ProductList;
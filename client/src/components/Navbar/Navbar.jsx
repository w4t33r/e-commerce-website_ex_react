import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Cart from '../Cart/Cart'

import './Navbar.scss'


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useSelector} from "react-redux";


const Navbar = () => {
    const [openCart, setOpenCart] = useState(false)
    const products = useSelector(state => state.cart.products)

    return (

        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/sv.png" alt="languageIcon" className=""/>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <span>SEK</span>
                        <KeyboardArrowDownIcon/>
                    </div>

                    <div className="item">
                        <Link className='link' to='/products/1'>Dress</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/1'>Wedding</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/1'>Accessories</Link>
                    </div>
                </div>

                <div className="center">
                    <Link className='link' to='/'>SomeStore</Link>
                </div>

                <div className="right">
                    <div className="item">
                        <Link className='link' to='/'>About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon/>
                        <AccountCircleIcon/>
                        <FavoriteBorderIcon/>
                        <div className="cart__icon" onClick={()=> setOpenCart(!openCart)}>
                            <ShoppingCartIcon/>
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {openCart && <Cart/>}
        </div>
    );
};

export default Navbar;
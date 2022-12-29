import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Cart from '../Cart/Cart'

import './Navbar.scss'


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Navbar = () => {
    const [openCart, setOpenCart] = useState(false)
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
                        <Link className='link' to='/products/1'>Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/2'>Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/3'>Children</Link>
                    </div>
                </div>

                <div className="center">
                    <Link className='link' to='/'>TANYASTORE</Link>
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
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            {openCart && <Cart/>}
        </div>
    );
};

export default Navbar;
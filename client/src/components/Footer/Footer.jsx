import React from 'react';
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h2>Categories</h2>
                    <span>lorem</span>
                    <span>lorem</span>
                    <span>lorem</span>
                    <span>lorem</span>
                    <span>New Arrivals</span>
                </div>

                <div className="item">
                    <h2>Links</h2>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                </div>

                <div className="item">
                    <h2>About</h2>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Animi debitis facere inventore laudantium tempore. Accusamus asperiores, debitis,
                        dolor eius explicabo iure minus nisi nulla optio praesentium quos temporibus vel vero?
                    </span>
                </div>

                <div className="item">
                    <h2>Contacts</h2>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Assumenda at eligendi expedita fugiat illum iure, molestiae nam quas sint soluta.
                        Aliquam aperiam, dolorem dolorum id illo reprehenderit unde voluptatem voluptates.
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom__left">
                    <span className="logo">
                        SomeStore
                    </span>
                </div>
                <div className="bottom__right">
                    <img src="/img/payment.png" alt="Payment"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
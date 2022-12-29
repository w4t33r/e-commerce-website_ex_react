import React from 'react';
import './category.scss'
import {Link} from "react-router-dom";

const Category = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/06/29/08/39/wedding-dresses-1486247_960_720.jpg"
                        alt=""
                    />
                    <button>
                        <Link className="link" to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img
                        src="https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            Women
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/06/29/08/41/wedding-dresses-1486256_960_720.jpg"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            New Season
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img
                                src="https://cdn.pixabay.com/photo/2021/07/14/15/43/woman-6466382_960_720.jpg"
                                alt=""
                            />
                            <button>
                                <Link to="/products/1" className="link">
                                    Men
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img
                                src="https://cdn.pixabay.com/photo/2021/09/15/11/34/woman-6626615_960_720.jpg"
                                alt=""
                            />
                            <button>
                                <Link to="/products/1" className="link">
                                    Accessories
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img
                        src="https://cdn.pixabay.com/photo/2017/03/29/23/38/amethyst-2186842_960_720.jpg"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            Shoes
                        </Link>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Category;
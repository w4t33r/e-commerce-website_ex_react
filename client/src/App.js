import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";

import Home from "./page/Home/Home";
import Product from "./page/single_Product/Product";
import Products from "./page/Products/Products";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="app">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path: "products/:id",
                element: <Products/>
            },
            {
                path: "/product/:id",
                element: <Product/>
            },
        ]

    },
])

function App() {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;

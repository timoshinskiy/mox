import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {supabase} from "../services/client.js";
import actionCreator from "../services/actionCreator.js";
import AuthLoader from "../components/AuthLoader.jsx";

const Catalog = () => {
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const {products} = useSelector(state => state.products)
    const load = async () => {
        setLoading(true);
        const {data} = await supabase.from("products").select();
        data&&dispatch(actionCreator.loadProducts(data));
        setLoading(false);
    }
    useEffect( ()=>{
        load();
    },[]);
    return (
        <>
            {loading===true&&<AuthLoader/>}
            <div className={"page"}>
                <h1>Catalog page</h1>
                <div className={"catalog-products-container"}>
                    {products&&products.map(item => (
                        <div className={"product-item"} key={item.product_id}>
                            <h2 style={{margin:"0"}} className="product-item-name">
                                {item.product_name}
                            </h2>
                            <h3 style={{margin:"0"}} className={"product-item-desc"}>
                                {item.product_desc}
                            </h3>
                            <div className="product-item-buttons">
                                {item.ordered===false&&<button>Order</button>}
                            </div>
                        </div>
                    ) )}
                </div>
            </div>
        </>

    );
};

export default Catalog;
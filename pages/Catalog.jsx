import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {supabase} from "../services/client.js";
import actionCreator from "../services/actionCreator.js";
import AuthLoader from "../components/AuthLoader.jsx";
import {toast} from "react-toastify";
import ActionCreator from "../services/actionCreator.js";
import AddProductModal from "../components/AddProductModal.jsx";

const Catalog = () => {
    const {user} = useSelector(state => state);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const {products} = useSelector(state => state.products);
    const [editModal,setEditModal] = useState(false);
    const load = async () => {
        setLoading(true);
        let {data,error} = await supabase.from("products").select();
        if(error){
            toast.error(error);
            return;
        }
        if(user.admin===true){
            data=data.filter(item=>item.creator_email===user.email)
        }
        data && dispatch(actionCreator.loadProducts(data));
        console.log(data);
        setLoading(false);
    }
    const removeOrder = async (item) => {
        setLoading(true);
        let curItem = {};
        for(let key in item){
            if(key==='product_id') curItem.id=item[key];
            else curItem[key]=item[key];
        }
        const {error} = await supabase.from('products').update({
            ordered: false,
            orders_email:"",
        }).eq('id',Number(item.product_id));
        if(error){
            setLoading(false);
            toast.error(error.message);
            return ;
        }
        toast("Success");
        dispatch(ActionCreator.unreserveProduct(item.product_id));
        setLoading(false);
    }
    const orderProduct = async (item) => {
        setLoading(true);
        const {error} = await supabase.from('products').update({
            ordered: true,
            orders_email: user.email,
        }).eq('id', Number(item.product_id));
        if (error) {
            setLoading(false);
            toast.error(error.message);
            return;
        }
        toast("You have been ordered product");
        dispatch(actionCreator.reserveProduct(item.product_id, user.email));
        setLoading(false);
    }
    useEffect(() => {
        load();
    }, []);
    return (
        <>
            <div className={"page"}>
                <div className={"catalog-head"}>
                    <h1>Catalog page</h1>
                    {user.admin===true&&<button className={"product-add-button"} onClick={()=>setEditModal(true)}>Add product</button>}
                </div>
                <div className={"catalog-products-container"}>
                    {products && products.map(item => (
                        <div className={item.ordered===true?"product-item ord":"product-item"} key={item.product_id}>
                            <h2 style={{margin: "0"}} className="product-item-name">
                                {item.product_name}
                            </h2>
                            <h3 style={{margin: "0"}} className={"product-item-desc"}>
                                {item.product_desc}
                            </h3>
                            <div className="product-item-buttons">
                                {item.ordered === false ? <button
                                    onClick={() => orderProduct(item)}>Order</button> : item.orders_email === user.email ?
                                    <button onClick={()=> removeOrder(item)}>Drop from orders</button> :
                                    <div>User with {item.orders_email} ordered this</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {editModal&&<AddProductModal setOpen={setEditModal}/>}
            {loading === true ? <AuthLoader/> : <div></div>}
        </>

    );
};

export default Catalog;
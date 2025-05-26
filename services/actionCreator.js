import {useDispatch} from "react-redux";


class actionCreator {
    login(data){
        return ({
            type:"LOGIN",
            payload: {
                email: data.email,
                first_name: data.first_name,
                last_name: data.last_name,
            }
        })
    }
    loadProducts(data){
        let curData = data?[...data.map(item=>{return {...item,product_id:item.id}})]:[];
        return({
            type: "LOAD_PRODUCTS",
            payload: curData,
        })
    }
    reserveProduct(id,email){
        return({
            type: "RESERVE_PRODUCT",
            payload: {
                product_id: id,
                email: email,
            }
        })
    }
    unreserveProduct(id){
        return ({
            type:"UNRESERVE_PRODUCT",
            payload: {
                product_id: id,
            }
        })
    }
}

export default new actionCreator();
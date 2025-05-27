import React,{useState} from 'react';
import Modal from "./Modal.jsx";

const AddProductModal = (props) => {
    const defaultInput={
        name: '',
        desc: '',
        description: '',

    }
    const [inputObj,setInputObj] = useState({});
    return (
        <>
            <Modal setOpen={props.setOpen}>
                <h2>Add component modal</h2>
                <div className="auth-inputs">
                    <label>Enter name</label>
                    <input name={"name"} onChange={(e)=>setInputObj({...inputObj,[e.target.name]:e.target.value})} type="text"/>
                    <label>Enter short description</label>
                    <input name={"desc"} onChange={(e)=>setInputObj({...inputObj,[e.target.name]:e.target.value})} type="text"/>
                    <label>Enter full description of product</label>
                    <input name={"description"} onChange={(e)=>setInputObj({...inputObj,[e.target.name]:e.target.value})} type="text"/>
                </div>
                <button className={"product-create-button"}>Create product</button>
            </Modal>
        </>
    );
};

export default AddProductModal;
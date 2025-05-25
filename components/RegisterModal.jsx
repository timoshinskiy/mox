import React, {useState} from 'react';
import Modal from "./Modal.jsx";
import {useDispatch} from "react-redux";
import action from "../services/actionCreator.js";

const LoginModal = (props) => {
    const defaultInput = {
        email:"",
        firstname: "",
        lastname: "",
        password: "",
        repeat_password:"",
    }
    const [inputObj,setInputObj] = useState({...defaultInput});
    const dispatch = useDispatch();
    const tryRegister = () => {
        dispatch(action.register(inputObj));
    }
    return (
        <Modal setOpen={props.setOpen}>
            <h2>Register</h2>
            <div className="auth-inputs">
                <label>Enter your firstname</label>
                <input name={"firstname"} type={"text"} value={inputObj.firstname} onChange={(e)=>setInputObj({...inputObj,[e.target.name]:e.target.value})}/>
                <label>Enter your lastname</label>
                <input name={"lastname"} type={"text"} value={inputObj.lastname} onChange={(e)=>setInputObj({...inputObj,[e.target.name]:e.target.value})}/>
                <label>Enter your email</label>
                <input name={"email"} type={"email"} value={inputObj.email} onChange={(e)=>setInputObj({...inputObj,[e.target.name]:e.target.value})}/>
                <label>Enter your password</label>
                <input name={"password"} type={"password"} value={inputObj.password} onChange={(e)=>setInputObj({...inputObj,[e.target.name]:e.target.value})}/>
                <label>Repeat entered password</label>
                <input name={"repeat_password"} type={"password"} value={inputObj.repeat_password} onChange={(e)=>setInputObj({...inputObj,[e.target.name]:e.target.value})}/>
            </div>
            <div className="auth-buttons">
                <button className={'active'} onClick={tryRegister}>Register</button>
                <button onClick={()=>props.setReg(false)}>Login</button>
            </div>
        </Modal>
    );
};

export default LoginModal;
import React, {useState} from 'react';
import Modal from "./Modal.jsx";
import {supabase} from "../services/client.js";
import action from "../services/actionCreator";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLoader from "./AuthLoader.jsx";


const LoginModal = (props) => {
    const [loading,setLoading] = useState(false);
    const defaultInput = {
        email:"",
        password:"",
    }
    const dispatch = useDispatch();
    const [inputObj,setInputObj] = useState({...defaultInput});
    const tryLogin = async () => {
        try{
            setLoading(true)
            const {data,error} = await supabase.auth.signInWithPassword({
                email:inputObj.email,
                password: inputObj.password,
            })
            if(error) throw error
            dispatch(action.login(data.user.user_metadata));
            setLoading(false);
            toast.success('Successfully login');
            props.setOpen(false);
        }
        catch (e) {
            setLoading(false);
            toast.error(e.message,{style:{zIndex:"99"}});
        }
    }
    return (
        <>
            <Modal setOpen={props.setOpen}>
                <h2>Login</h2>
                <div className="auth-inputs">
                    <label>Enter your email</label>
                    <input value={inputObj.email} type={"text"} name={"email"} onChange={(e)=>setInputObj({...inputObj,[e.target.name]:e.target.value})} />
                    <label>Enter your password</label>
                    <input value={inputObj.password} type={"password"} name={"password"} onChange={(e)=>setInputObj({...inputObj,[e.target.name]:e.target.value})} />
                </div>
                <div style={{display:"flex",columnGap:"5%",flexDirection:"row",marginTop:"3%",alignItems:"center"}}>
                    <button className={'auth-enter-button'} onClick={tryLogin}>Login</button>
                    <div style={{display:"flex",flexDirection:"row",fontSize:"24px"}}>
                        Don't have an account? <span><button className={"auth-change-button"} onClick={()=>props.setReg(true)}>Register</button></span>
                    </div>
                </div>
            </Modal>
            {loading===true&&<AuthLoader/>}
        </>

    );
};

export default LoginModal;
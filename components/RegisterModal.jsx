import React, {useState} from 'react';
import Modal from "./Modal.jsx";
import {useDispatch} from "react-redux";
import action from "../services/actionCreator.js";
import {supabase} from "../services/client.js";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import AuthLoader from "./AuthLoader.jsx";

const LoginModal = (props) => {
    const [loading,setLoading] = useState(false)
    const defaultInput = {
        email: "",
        first_name: "",
        lastname: "",
        password: "",
        repeat_password: "",
    }
    const [inputObj, setInputObj] = useState({...defaultInput});
    const dispatch = useDispatch();
    const tryRegister = async () => {
        try {
            setLoading(true);
            const {data, error} = await supabase.auth.signUp({
                email: inputObj.email,
                password: inputObj.password,
                options: {
                    data: {
                        first_name: inputObj.first_name,
                        last_name: inputObj.last_name,
                    }
                }
            });
            if (error) throw error
            console.log(supabase.auth);
            const {data:_data,error:_error} = await supabase.from('users').insert({...data.user.user_metadata}).single();
            if (_error) throw _error
            toast("Confirm your mail address");
            setTimeout(()=>dispatch(action.login(data.user.user_metadata)),300);
            setLoading(false);
            props.setOpen(false);
        } catch (e) {
            setLoading(false);
            toast.error(e.message);
        }

    }
    return (
        <>
            <Modal setOpen={props.setOpen}>
                <h2>Register</h2>
                <div className="auth-inputs">
                    <label>Enter your firstname</label>
                    <input name={"first_name"} type={"text"} value={inputObj.first_name}
                           onChange={(e) => setInputObj({...inputObj, [e.target.name]: e.target.value})}/>
                    <label>Enter your lastname</label>
                    <input name={"last_name"} type={"text"} value={inputObj.last_name}
                           onChange={(e) => setInputObj({...inputObj, [e.target.name]: e.target.value})}/>
                    <label>Enter your email</label>
                    <input name={"email"} type={"email"} value={inputObj.email}
                           onChange={(e) => setInputObj({...inputObj, [e.target.name]: e.target.value})}/>
                    <label>Enter your password</label>
                    <input name={"password"} type={"password"} value={inputObj.password}
                           onChange={(e) => setInputObj({...inputObj, [e.target.name]: e.target.value})}/>
                    <label>Repeat entered password</label>
                    <input name={"repeat_password"} type={"password"} value={inputObj.repeat_password}
                           onChange={(e) => setInputObj({...inputObj, [e.target.name]: e.target.value})}/>
                </div>
                <div style={{
                    display: "flex",
                    columnGap: "5%",
                    flexDirection: "row",
                    marginTop: "3%",
                    alignItems: "center"
                }}>
                    <button className={'auth-enter-button'} onClick={tryRegister}>Register</button>
                    <div style={{display: "flex", flexDirection: "row", fontSize: "24px"}}>
                        Don't have an account? <span><button className={"auth-change-button"}
                                                             onClick={() => props.setReg(false)}>Login</button></span>
                    </div>
                </div>
            </Modal>
            {loading===true && <AuthLoader/>}
        </>
    );
};

export default LoginModal;
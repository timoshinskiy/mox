import React from 'react';
import Modal from "./Modal.jsx";

const LoginModal = (props) => {
    const tryLogin = () => {

    }
    return (
        <Modal setOpen={props.setOpen}>
            <h2>Login</h2>
            <div className="auth-inputs">
                <label>Enter your email</label>
                <input type={"text"} />
                <label>Enter your password</label>
                <input type={"password"} />
            </div>
            <div className="auth-buttons">
                <button className={'active'} onClick={tryLogin}>Login</button>
                <button onClick={()=>props.setReg(true)}>Register</button>
            </div>
        </Modal>
    );
};

export default LoginModal;
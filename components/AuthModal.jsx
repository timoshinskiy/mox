import React, {useState} from 'react';
import LoginModal from "./LoginModal.jsx";
import RegisterModal from "./RegisterModal.jsx";

const AuthModal = (props) => {
    const [reg, setReg] = useState(false);
    return (
        <>
            {
                reg === false ?
                    <LoginModal setReg={setReg} setOpen={props.setOpen}/>
                    :
                    <RegisterModal setReg={setReg} setOpen={props.setOpen}/>
            }
        </>
    );
};

export default AuthModal;
import React, {useState} from 'react';
import {useNavigate} from "react-router";
import Modal from "./Modal.jsx";
import AuthModal from "./AuthModal.jsx";
import {useSelector} from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <div className="header-container">
                <button onClick={() => navigate('/')}>Home</button>
                {
                    user.auth === true
                        ?
                        <button onClick={() => navigate('/profile')}>{user.firstname||"Profile"}</button>
                        :
                        <button onClick={() => setOpenModal(true)}>Login</button>
                }
            </div>
            {openModal === true &&
                <AuthModal setOpen={setOpenModal}/>
            }
        </>

    );
};

export default Header;
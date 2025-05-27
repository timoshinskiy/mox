import React, {useState} from 'react';
import {toast, ToastContainer} from "react-toastify";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const Home = () => {
    const [count,setCount] = useState(1);
    const navigate = useNavigate();
    const {auth} = useSelector(state => state.user)
    return (
        <div className={'page'}>
            <h1>Home page</h1>
            <h2>To see our catalog you need to login in your account</h2>
            {auth===true?<button onClick={()=>navigate('/catalog')}>Go to catalog</button>:<h6>Login???</h6>}
        </div>
    );
};

export default Home;
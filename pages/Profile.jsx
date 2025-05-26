import React, {useEffect, useState} from 'react';

import AuthLoader from "../components/AuthLoader.jsx";
import {supabase} from "../services/client.js";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";

const Profile = () => {
   const [load,setLoad] = useState(false);
   const dispatch = useDispatch();
   const logout = async () => {
       try{
           setLoad(true);
           const {error} = await supabase.auth.signOut();
           if(error) throw error
           setLoad(false);
           toast("You have been logout from your account");
           dispatch({type: "LOGOUT"});
       }
       catch (e) {
           setLoad(false);
           toast.error(e.message);
       }
   }
    return (
        <>
            <div className={"page profile-page"}>
                <div className="profile_info">
                    <h1>Your name</h1>
                </div>
                <div className={"profile_menu"}>
                    <h3>Edit email</h3>
                    <h3>Edit password</h3>
                    <h3>Edit name</h3>
                    <button onClick={logout}>LOGOUT</button>
                </div>
            </div>
            {load===true && <AuthLoader/>}
        </>
    );
};

export default Profile;
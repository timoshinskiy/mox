import React, {useEffect, useState} from 'react';

import AuthLoader from "../components/AuthLoader.jsx";
import {supabase} from "../services/client.js";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import ProfileInfo from "../components/ProfileInfo.jsx";
import EditMail from "../components/EditMail.jsx";
import EditPassword from "../components/EditPassword.jsx";
import EditName from "../components/EditName.jsx";

const Profile = () => {
   const [load,setLoad] = useState(false);
   const [select,setSelect] = useState("ProfileInfo");
   const user = useSelector(state=>state.user);
   const dispatch = useDispatch();
   const obj = {
       ProfileInfo,
       EditMail,
       EditPassword,
       EditName
   }
   let InsideMenu = obj[select];
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
   const sendMail = async() => {
       const {error} = await supabase.auth.resend({
           type: 'signup',
           email: user.email,
       })
       if(error)
           toast.error(error);
       else
           toast("Check your mail and verified account!");
   }
    return (
        <>
            <div className={"page profile-page"}>
                <div className="profile_info">
                    <InsideMenu/>
                </div>
                <div className={"profile_menu"}>
                    <button name={"ProfileInfo"} className={select==="ProfileInfo"?"active":""} onClick={(e)=>setSelect(e.target.name)}>Information</button>
                    <button name={"EditMail"} className={select==="EditMail"?"active":""} onClick={(e)=>setSelect(e.target.name)}>Edit email</button>
                    <button name={"EditPassword"} className={select==="EditPassword"?"active":""} onClick={(e)=>setSelect(e.target.name)}>Edit password</button>
                    <button name={"EditName"} className={select==="EditName"?"active":""} onClick={(e)=>setSelect(e.target.name)}>Edit name</button>
                    {user.email_verified===false&&<button onClick={sendMail}>Resend email verified message</button>}
                    <button onClick={logout}>LOGOUT</button>
                </div>
            </div>
            {load===true ? <AuthLoader/> : <div></div>}
        </>
    );
};

export default Profile;
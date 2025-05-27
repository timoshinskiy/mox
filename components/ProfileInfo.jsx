import React from 'react';
import {useSelector} from "react-redux";

const Verified = () => {
    return (
        <h2 style={{
            backgroundColor: "green",
            padding: "2%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            borderRadius: "36px",
            marginTop: 0,
            maxWidth: "10vw",
            fontSize: "18px"
        }}>Verified</h2>
    )
}
const NoVerified = () => {
    return (
        <h2 style={{
            backgroundColor: "red",
            padding: "2%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            borderRadius: "36px",
            marginTop: 0,
            maxWidth: "10vw",
            fontSize: "18px"
        }}>Not verified</h2>
    )
}

const ProfileInfo = () => {
    const {user} = useSelector(state => state);
    console.log(user);
    return (
        <div>
            <h1>Profile information</h1>
            <div className="profile_infos">
                <h2>Email:</h2>
                <h2>{user.email}</h2>
                <h2>Firstname:</h2>
                <h2>{user.first_name}</h2>
                <h2>Lastname:</h2>
                <h2>{user.last_name}</h2>
                <h2>Verified:</h2>
                {user.email_verified === true ? <Verified/> : user.email_verified === false && <NoVerified/>}
            </div>
        </div>
    );
};

export default ProfileInfo;
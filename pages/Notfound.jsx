import React, {useState} from 'react';
import AuthModal from "../components/AuthModal.jsx";
import AuthLoader from "../components/AuthLoader.jsx";

const Notfound = () => {
    const [count,setCount] = useState(1);
    return (
        <div className={'page'}>
            <h1>404</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        </div>
    );
};

export default Notfound;
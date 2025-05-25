import {useDispatch} from "react-redux";


class actionCreator {
    register (data){
        const {email,firstname,lastname} = data;
        const payload = {
            firstname,
            lastname,
            email,
        }
        return ({type:"LOGIN",payload})
    }
}

export default new actionCreator();
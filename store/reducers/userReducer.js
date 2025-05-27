const defaultUserState = {
    auth: false,
    email: '',
    first_name: '',
    last_name: '',
    admin:false,
    email_verified: false,
}
const data = sessionStorage.getItem('auth');
const insertState = data?{...JSON.parse(data)}:{...defaultUserState};

export const userReducer = (state = {...insertState}, action) => {
    switch (action.type) {
        case "LOGIN":
            let curObj = {
                auth: true,
                email: action.payload.email,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                admin: action.payload.admin,
                email_verified: action.payload.email_verified,
            }
            window.location.replace("http://localhost:5173");
            sessionStorage.setItem('auth',JSON.stringify(curObj))
            return {...curObj};

        case "LOGOUT":
            sessionStorage.removeItem('auth');
            window.location.replace("http://localhost:5173");
            return {...defaultUserState};

        default:
            return state;

    }
}

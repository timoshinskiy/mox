const defaultState = {
    auth: false,
    email: '',
    firstname: '',
    lastname: ''
}
export const userReducer = (state = {...defaultState}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                auth: true,
                email: action.payload.email,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname
            };
        case "LOGOUT":
            return {...defaultState};
        default:
            return state;
    }
}
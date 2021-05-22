const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return {
                employee: null,
                isFetching: true,
                error: false
            };
        case "LOGIN_SUCCESS": 
            return {
                employee: action.payload,
                isFetching: false,
                error: false
            }
        case "LOGIN_FAILURE": 
            return {
                employee: null,
                isFetching: false,
                error: action.payload
            }
        default: return state;
    }
}

export default AuthReducer
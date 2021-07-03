import axios from "axios"

export const loginCall = async (adminCredentials, dispatch) => {
    dispatch({type: "LOGIN_START"})
    try {
        const res = await axios.post("/login", adminCredentials) || await axios.post("/employee/login", adminCredentials);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    }
    catch(error) {
        dispatch({type: "LOGIN_FAILURE", payload: error})
    }
}
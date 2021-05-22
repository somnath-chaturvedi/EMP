import axios from "axios"

export const loginCall = async (employeeCredentials, dispatch) => {
    dispatch({type: "LOGIN_START"})
    try {
        const res = await axios.post("/login", employeeCredentials);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    }
    catch(error) {
        dispatch({type: "LOGIN_FAILURE", payload: error})
    }
}
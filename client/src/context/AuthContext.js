import { useReducer, createContext } from "react"
import AuthReducer from "./AuthReducer"

const INITITIAL_STATE = {
    employee: null,
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITITIAL_STATE)

    return (
        <AuthContext.Provider value = {{
            employee: state.employee,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider> 
    )
}
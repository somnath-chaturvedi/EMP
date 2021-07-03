import './employeeLogin.css'
// import { useRef, useContext } from 'react';
// import {loginCall} from "../../../apiCalls"
// import {AuthContext} from "../../../context/AuthContext"
// import {CircularProgress} from '@material-ui/core'

export default function EmployeeLogin() {
    // const email = useRef();
    // const password = useRef();
    // const {admin, isFetching, dispatch} = useContext(AuthContext)

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     loginCall({email: email.current.value, password: password.current.value}, dispatch)
    // }

    return (
                <div className="login">
            <img src="assets/background.jpg" alt="" className="loginBackground"/>
            <div className="loginWrapper">
                <div className="loginLeft">
                    
                </div>
                <div className="loginRight">
                    
                    <form className="loginContainer" >
                        <h1 className = 'loginLogo' >Employee Management System</h1>
                        <input type="email" className = 'loginInput' placeholder = 'Email' />
                        <input type="password" className="loginInput" placeholder = 'Password' />
                        <button className = 'loginButton'>Login</button>
                        <span className="forgetPassword">Forgot Password ?</span>
                    </form>
                </div>
            </div>
            {/* <span className="loginDesc">Manage your employees with your fingertips</span> */}
        </div>
    )
}

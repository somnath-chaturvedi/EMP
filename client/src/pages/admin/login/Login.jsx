import { useRef, useContext } from 'react';
import './login.css'
import {loginCall} from "../../../apiCalls"
import {AuthContext} from "../../../context/AuthContext"
import {CircularProgress} from '@material-ui/core'

export default function Login() {
    const email = useRef();
    const password = useRef();
    const {employee, isFetching, dispatch} = useContext(AuthContext)
    // const {employee, dispatch} = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    }

    console.log(employee);
    return (
        <div className="login">
            <img src="assets/background.jpg" alt="" className="loginBackground"/>
            <div className="loginWrapper">
                <div className="loginLeft">
                    
                </div>
                <div className="loginRight">
                    
                    <form className="loginContainer" onSubmit = {handleClick}>
                        <h1 className = 'loginLogo' >Employee Management System</h1>
                        <input type="email" className = 'loginInput' required placeholder = 'Email' ref = {email}/>
                        <input type="password" className="loginInput" required placeholder = 'Password' ref = {password}/>
                        <button className = 'loginButton'>{isFetching ? <CircularProgress color="white" className = "progressBar"/> :"Login"}</button>
                        <span className="forgetPassword">Forgot Password ?</span>
                        <button className = 'employeeLogin'>Employee Login ?</button>
                    </form>
                </div>
            </div>
            {/* <span className="loginDesc">Manage your employees with your fingertips</span> */}
        </div>
    )
}

import './employeeLogin.css'

export default function EmployeeLogin() {
    return (
                <div className="login">
            <img src="assets/background.jpg" alt="" className="loginBackground"/>
            <div className="loginWrapper">
                <div className="loginLeft">
                    
                </div>
                <div className="loginRight">
                    
                    <div className="loginContainer">
                        <h1 className = 'loginLogo' >Employee Management System</h1>
                        <input type="email" className = 'loginInput' placeholder = 'Email'/>
                        <input type="password" className="loginInput" placeholder = 'Password'/>
                        <button className = 'loginButton'>Login</button>
                        <span className="forgetPassword">Forgot Password ?</span>
                    </div>
                </div>
            </div>
            {/* <span className="loginDesc">Manage your employees with your fingertips</span> */}
        </div>
    )
}

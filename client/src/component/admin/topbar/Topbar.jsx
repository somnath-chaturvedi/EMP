import './topbar.css'
import {Add, Info, Remove, ExitToApp, Update} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import {React} from 'react'


export default function Topbar() {

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <span className="topbarLogo">EMS</span>
                    </Link>
                </div>
                <div className="topbarRight">
                    <div className="topbarElements">
                        <Add className="topbarIcon"/>
                        <Link to="/addEmployee" style={{ textDecoration: "none" }}>
                        <span className="topbarText">Add Employee</span>
                        </Link>
                    </div>
                    <div className="topbarElements">
                        <Remove className="topbarIcon"/>
                        <Link to="/removeEmployee" style={{ textDecoration: "none" }}>
                        <span className="topbarText">Remove Employee</span>
                        </Link>
                    </div>
                    <div className="topbarElements">
                        <Update className="topbarIcon"/>
                        <Link to="/update" style={{ textDecoration: "none" }}>
                            <span className="topbarText">Update Employee Info</span>
                        </Link>
                    </div>
                    <div className="topbarElements">
                        <Info className="topbarIcon"/>
                        <Link to="/" style={{ textDecoration: "none" }}>
                        <span className="topbarText">About</span>
                        </Link>
                    </div>
                    <div className="topbarElements">
                        <ExitToApp className="topbarIcon"/>
                        <Link to="/" style={{ textDecoration: "none" }}>
                        <span className="topbarText">Logout</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

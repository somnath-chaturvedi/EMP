import './topbar.css'
import {Add, Info, Remove, ExitToApp, Update, Search} from '@material-ui/icons'
import { Link, Redirect } from 'react-router-dom'
import { useRef, useState, React, useEffect} from 'react'
import axios from "axios"
import ViewEmployee from '../../../pages/admin/viewEmployee/ViewEmployee'
import Home from '../../../pages/admin/home/Home'


export default function Topbar() {


    const [update, setUpdate] = useState(false);
    const [isEmployee, setIsEmployee] = useState(false);
    const employeeId = useRef();
    const handleClick = () => {
        setUpdate(true);
    }

    const[employee, setEmployee] = useState({})

    const handleSearch = () =>{
        setIsEmployee(true)
    }
    
    useEffect(() => {
        const fetchEmployee = async() => {
        const res = await axios.get('/update/' + employeeId)
        setEmployee(res.data)
        }
        fetchEmployee();
    })

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
                        {update ? <Search className="topbarIcon" onClick = {handleSearch}/>: <Update className="topbarIcon"/>}
                        <span className="topbarText" onClick = {handleClick}>{update ? <input type='text' placeholder = 'Employee ID' className = 'searchEmployee' ref={employeeId}/>: "Update Employee Info"}</span>
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


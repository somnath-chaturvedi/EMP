import Topbar from '../../../component/admin/topbar/Topbar'
import './viewEmployee.css'
import Moment from 'react-moment';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function ViewEmployee() {

    const [update, setUpdate] = useState(false);
    const employeeId = useRef();
    const handleClick = () => {
        setUpdate(true);
    }

    const[employee, setEmployee] = useState({})
    
    useEffect(() => {
        const fetchEmployee = async() => {
        const res = await axios.get('/update/' + employeeId.current.value)
        setEmployee(res.data)
        }
        fetchEmployee();
    })

    const basicSalary = (employee.ctc - employee.joiningBonus - employee.relocationBonus - employee.stocks)/12;
    const pf = basicSalary*(0.12)

    return (
        <div className="viewEmployee">
            <Topbar/>
            <div className="viewWrapper">
                <div className="viewBody">
                    <div className="searchBox">
                    <input type="text" className="searchEmployee" placeholder = "Employee ID" ref={employeeId} />
                    <button className="searchEmpButton" onClick = {handleClick}>Search</button>
                    </div>
                {update ? 
                <div className="viewContainer">
                <div className="viewContent">
                    <span className="viewLabel">First Name:</span>
                    <span className="viewName">{employee.firstName}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Last Name</span>
                    <span className="viewName">{employee.lastName}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Email ID:</span>
                    <span className="viewName">{employee.email}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Phone Number:</span>
                    <span className="viewName">{employee.phone}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Date of Birth:</span>
                    <span className="viewName"><Moment format = 'DD/MM/YYYY'>{employee.dateOfBirth}</Moment></span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Aadhar Card:</span>
                    <span className="viewName">{employee.aadharCard}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Address:</span>
                    <span className="viewName">{employee.address}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Joining Date:</span>
                    <span className="viewName"><Moment format = 'DD/MM/YYYY'>{employee.createdAt}</Moment></span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">CTC:</span>
                    <span className="viewName">{employee.ctc}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Joining Bonus:</span>
                    <span className="viewName">{employee.joiningBonus}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Relocation Bonus:</span>
                    <span className="viewName">{employee.relocationBonus}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Stocks:</span>
                    <span className="viewName">{employee.stocks}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Designation:</span>
                    <span className="viewName">{employee.designation}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Basic Salary:</span>
                    <span className="viewName">{basicSalary}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">HRA:</span>
                    <span className="viewName">{basicSalary/2}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">PF:</span>
                    <span className="viewName">{pf}</span>
                </div>
                </div> :
                <div className="blank"></div>
                }
                </div>
            </div>
        </div>
    )
}

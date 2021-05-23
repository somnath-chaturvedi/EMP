import Topbar from '../../../component/admin/topbar/Topbar'
import './viewEmployee.css'
import Moment from 'react-moment';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Edit } from '@material-ui/icons';

export default function ViewEmployee() {

    const [update, setUpdate] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const phone = useRef();
    const address = useRef();
    const ctc = useRef();
    const department = useRef();
    const designation = useRef();

    const employeeId = useRef();
    const handleClick = () => {
        if(!update){
            setUpdate(true);
        }
        else {
            setUpdate(false);
            employeeId.current.value = "";
        }
    }

    const handleEdit = () => {
        if(!isEdit){
            setIsEdit(true);
        }
        else{
            setIsEdit(false);
        }
    }

    const[employee, setEmployee] = useState({})
    
    useEffect(() => {
        const fetchEmployee = async() => {
        const res = await axios.get('/view/' + employeeId.current.value)
        setEmployee(res.data)
        }
        fetchEmployee();
    },[update,isEdit])

    const handleSumbit = async(e) => {
        e.preventDefault();
            const updatedEmployee = {
            firstName: firstName.current.value || employee.firstName,
            lastName: lastName.current.value || employee.lastName,
            email: email.current.value || employee.email,
            phone: phone.current.value || employee.phone,
            address: address.current.value || employee.address,
            department: department.current.value || employee.department,
            designation: designation.current.value || employee.designation,
            ctc: ctc.current.value || employee.ctc,
        }
        try {
            await axios.put('/update/' + employeeId.current.value, updatedEmployee)
        } catch (error) {
            console.log(error)
        }
        setIsEdit(false)
    }
        
            
        

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
                <form className="viewContainer" onSubmit = {handleSumbit}>
                    
                <div className="viewContent">
                    <span className="viewLabel">First Name:</span>
                    {isEdit ? 
                    <input type="text" className="viewName1" ref ={firstName}/> : 
                    <><span className="viewName1">{employee.firstName}</span>
                    <Edit className = "editButton" onClick = {handleEdit}/></>
                    }
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Last Name:</span>
                    {isEdit ? 
                    <input type="text" className="viewName1" ref = {lastName}/> : 
                    <span className="viewName">{employee.lastName}</span>
                    }
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Email:</span>
                    {isEdit ? 
                    <input type="text" className="viewName1" ref={email}/> : 
                    <span className="viewName">{employee.email}</span>
                    }
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Phone:</span>
                    {isEdit ? 
                    <input type="text" className="viewName1" ref={phone}/> : 
                    <span className="viewName">{employee.phone}</span>
                    }
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
                    {isEdit ? 
                    <input type="text" className="viewName1" ref ={address}/> : 
                    <span className="viewName">{employee.address}</span>
                    }
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Joining Date:</span>
                    <span className="viewName"><Moment format = 'DD/MM/YYYY'>{employee.createdAt}</Moment></span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">CTC:</span>
                    {isEdit ? 
                    <input type="text" className="viewName1" ref={ctc}/> : 
                    <span className="viewName">{employee.ctc}</span>
                    }
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
                    {isEdit ? 
                    <input type="text" className="viewName1" ref={designation}/> : 
                    <span className="viewName">{employee.designation}</span>
                    }
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Department:</span>
                    {isEdit ? 
                    <input type="text" className="viewName1" ref={department}/> : 
                    <span className="viewName">{employee.department}</span>
                    }
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
                {isEdit ? <button type = 'submit'>Edit</button>: <div className="blank"></div>}
                </form>
                 :
                <div className="blank"></div>
                }
                </div>
            </div>
        </div>
    )
}

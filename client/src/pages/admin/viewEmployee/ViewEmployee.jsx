import Topbar from '../../../component/admin/topbar/Topbar'
import './viewEmployee.css'
import Moment from 'react-moment';

export default function ViewEmployee(props) {

    const employeeID = props

    console.log(props.employee);


    return (
        <div className="viewEmployee">
            <Topbar/>
            <div className="viewWrapper">
                <div className="viewBody">
                <div className="viewContainer">
                <div className="viewContent">
                    <span className="viewLabel">First Name:</span>
                    <span className="viewName">{employeeID.employee.firstName}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Last Name</span>
                    <span className="viewName">{employeeID.employee.lastName}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Email ID:</span>
                    <span className="viewName">{employeeID.employee.email}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Phone Number:</span>
                    <span className="viewName">{employeeID.employee.phone}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Date of Birth:</span>
                    <span className="viewName"><Moment format = 'DD/MM/YYYY'>{employeeID.employee.dateOfBirth}</Moment></span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Aadhar Card:</span>
                    <span className="viewName">{employeeID.employee.aadharCard}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Address:</span>
                    <span className="viewName">{employeeID.employee.address}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Joining Date:</span>
                    <span className="viewName"><Moment format = 'DD/MM/YYYY'>{employeeID.employee.createdAt}</Moment></span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">CTC:</span>
                    <span className="viewName">{employeeID.employee.ctc}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Joining Bonus:</span>
                    <span className="viewName">{employeeID.employee.joiningBonus}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Relocation Bonus:</span>
                    <span className="viewName">{employeeID.employee.relocationBonus}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Stocks:</span>
                    <span className="viewName">{employeeID.employee.stocks}</span>
                </div>
                <div className="viewContent">
                    <span className="viewLabel">Designation:</span>
                    <span className="viewName">{employeeID.employee.designation}</span>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

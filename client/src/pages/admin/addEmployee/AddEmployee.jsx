import "./addEmployee.css"
import Topbar from '../../../component/admin/topbar/Topbar'
import { useRef } from "react"
import axios from "axios";

export default function AddEmployee() {
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const phone = useRef();
    const aadharCard = useRef();
    const address = useRef();
    const ctc = useRef();
    const joiningBonus = useRef();
    const stocks = useRef();
    const relocationBonus = useRef();
    const dateOfBirth = useRef();
    const department = useRef();
    const designation = useRef();

    const handleSumbit = async(e) => {
        e.preventDefault();
        const newEmployee = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            dateOfBirth: dateOfBirth.current.value,
            phone: phone.current.value,
            address: address.current.value,
            aadharCard: aadharCard.current.value,
            department: department.current.value,
            designation: designation.current.value,
            ctc: ctc.current.value,
            joiningBonus: joiningBonus.current.value,
            relocationBonus: relocationBonus.current.value,
            stocks: stocks.current.value
        }
        try {
            await axios.post('/addEmployee', newEmployee)
        } catch (error) {
            console.log(error)
        }
        firstName.current.value = ""
        lastName.current.value = ""
        email.current.value = ""
        dateOfBirth.current.value = ""
        phone.current.value = ""
        address.current.value = ""
        aadharCard.current.value = ""
        department.current.value = ""
        designation.current.value = ""
        ctc.current.value = ""
        joiningBonus.current.value = ""
        relocationBonus.current.value = ""
        stocks.current.value = ""
    }


    return (
        <div className="aEmp">
            <Topbar/>
            
            <div className="aEmpWrapper">
                <div className="inputBox">
                    <div className="inputDesc">Add a new employee</div>
                    <form action="/addEmployee" method = "post" onSubmit = {handleSumbit}>
                        <div className="inputContainer">
                    <div className="inputLeft">
                        <div className="inputLine">
                        <span className="inputText">First Name :</span>
                        <input type="text" className="inputField" ref={firstName}/>
                    </div>
                    <div className="inputLine">
                        <span className="inputText">Last Name :</span>
                        <input type="text" className="inputField" ref={lastName}/>
                    </div>
                    <div className="inputLine">
                        <span className="inputText">Date of Birth :</span>
                        <input type="date" className="inputField" ref={dateOfBirth}/>
                    </div>
                    <div className="inputLine">
                        <span className="inputText">Email :</span>
                        <input type="email" className="inputField" ref={email}/>
                    </div>
                    <div className="inputLine">
                        <span className="inputText">Phone :</span>
                        <input type="number" className="inputField" ref={phone}/>
                    </div>
                    <div className="inputLine">
                        <span className="inputText">Address :</span>
                        <input type="text" className="inputField" ref={address}/>
                    </div>
                    <div className="inputLine">
                        <span className="inputText">Aadhar Card :</span>
                        <input type="number" className="inputField" ref={aadharCard}/>
                    </div>
                    </div>
                    <div className="inputRight">
                        <div className="inputLine">
                        <span className="inputText">Department :</span>
                        <input type="text" className="inputField" ref={department}/>
                    </div>
                    <div className="inputLine">
                        <span className="inputText">Designation :</span>
                        <input type="text" className="inputField" ref={designation}/>
                    </div>
                    <div className="inputLine">
                        <span className="inputText">CTC :</span>
                        <input type="number" className="inputField" ref={ctc}/>
                    </div>
                    <div className="inputLine">
                        <span className="inputText">Joining Bonus :</span>
                        <input type="number" className="inputField" ref={joiningBonus}/>
                    </div>
                    <div className="inputLine">
                        <span className="inputText">Relocation Bonus :</span>
                        <input type="number" className="inputField" ref={relocationBonus}/>
                    </div>
                    <div className="inputLine">
                        <span className="inputText">Stocks :</span>
                        <input type="number" className="inputField" ref={stocks}/>
                    </div>
                    </div>
                    </div>
                    <div className="submitButton"><input type="submit" value = "Add Employee" className = "addEmployeeButton"/></div>
                    </form>
                </div>
             </div>
        </div>
    )
}

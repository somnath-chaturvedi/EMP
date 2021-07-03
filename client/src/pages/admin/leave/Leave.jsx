import './leave.css'
import Topbar from '../../../component/admin/topbar/Topbar'
import Moment from 'react-moment';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Edit } from '@material-ui/icons';

export default function Leave(employee) {
    const employeeId = useRef();
    const from = useRef();
    const to = useRef();
    const desc = useRef();

    const handleSumbit = async(e) => {
        e.preventDefault();
            const handleLeave = {
            from: from.current.value,
            to: to.current.value,
            desc: desc.current.value
        }
        try {
            await axios.put('/leave/' + employeeId.current.value, handleLeave)
        } catch (error) {
            console.log(error)
        }
        employeeId.current.value = "";
        from.current.value = "";
        to.current.value = "";
        desc.current.value = "";
    }

    return(
        <div className="leaveEmployee">
            <Topbar/>
            <div className="leave">    
                <form className="leaveWrapper" onSubmit={handleSumbit}>
                    <div className="leaveHead">
                            <span className="leaveID">EmployeeId:</span>
                            <input type="text" className="leaveFrom" ref = {employeeId}/>
                            <span className="leaveFrom">From:</span>
                            <input type="date" className="leaveFrom" ref = {from}/>
                            <span className="leaveFrom">To:</span>
                            <input type="date" className="leaveFrom" ref = {to}/>
                        </div>      
                            <div className="leaveBody">
                                <span className="leaveFrom">Description:</span>
                                <div className="descField">
                                    <input type="text" className="leaveDesc" ref = {desc}/>
                                </div>
                            <div className="buttonDiv">
                                <button className="submit" type = 'submit'>Submit</button>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    )
}
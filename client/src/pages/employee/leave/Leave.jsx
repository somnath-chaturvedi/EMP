import './leave.css'
import EmployeeTopbar from '../../../component/employee/topbar/EmployeeTopbar'

export default function Leave() {
    return (
    <>
        <EmployeeTopbar/>
        <div className="leave">    
            <div className="leaveWrapper">
                <div className="leaveHead">
                    <span className="leaveFrom">From:</span>
                    <input type="date" className="leaveFrom" />
                    <span className="leaveFrom">To:</span>
                    <input type="date" className="leaveFrom" />
                </div>      
                    <div className="leaveBody">
                         <span className="leaveFrom">Description:</span>
                         <div className="descField">
                             <input type="text" className="leaveDesc" />
                         </div>
                         <div className="buttonDiv">
                            <button className="submit">Submit</button>
                            <button className="submit">Cancel</button>
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}

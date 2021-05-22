import './removeEmployee.css'
import Topbar from '../../../component/admin/topbar/Topbar'

export default function RemoveEmployee() {
    return (
        <div className = 'seach'>
        <Topbar/>
        <div className="searchContainer">    
            <div className="searchWrapper">
                <div className="searchHead">
                    <span className="searchText">Employee ID:</span>
                    <input type="number" className="employeeSearch" />
                </div>      
                    <div className="searchBody">
                         <span className="searchDesc">Reason:</span>
                         <div className="searchField">
                             <input type="text" className="remDesc" />
                         </div>
                         <div className="buttonRem">
                            <button className="remove">Remove</button>
                            <button className="remove">Cancel</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

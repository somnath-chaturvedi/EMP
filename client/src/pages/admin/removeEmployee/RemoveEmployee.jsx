import './removeEmployee.css'
import Topbar from '../../../component/admin/topbar/Topbar'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function RemoveEmployee() {
    const employeeId = useRef();
    const employeeDesc = useRef();
    const [isRemove, setIsRemove] = useState(false);
    useEffect(() => {
        const remEmployee = async() => {
            await axios.delete('/remove/' + employeeId.current.value)
        }
        remEmployee();
        employeeId.current.value = ""
        employeeDesc.current.value = ""
    },[isRemove])
    const handleClick = () => {
        setIsRemove(true)
    }
    return (
        <div className = 'seach'>
        <Topbar/>
        <div className="searchContainer">    
            <div className="searchWrapper">
                <div className="searchHead">
                    <span className="searchText">Employee ID:</span>
                    <input type="text" className="employeeSearch" ref={employeeId} />
                </div>      
                    <div className="searchBody">
                         <span className="searchDesc">Reason:</span>
                         <div className="searchField">
                             <input type="text" className="remDesc" ref={employeeDesc} />
                         </div>
                         <div className="buttonRem">
                            <button className="remove" onClick = {handleClick}>Remove</button>
                            <button className="remove">Cancel</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

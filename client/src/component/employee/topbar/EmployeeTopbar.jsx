import './employeeTopbar.css'
import {Add, Info, ExitToApp, Update} from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className="topbarE">
            <div className="topbarWrapperE">
                <div className="topbarLeftE">
                    <span className="topbarLogoE">EMS</span>
                </div>
                <div className="topbarRightE">
                    <div className="topbarElementsE">
                        <Add className="topbarIconE"/>
                        <span className="topbarTextE">Request Leave</span>
                    </div>
                    <div className="topbarElementsE">
                        <Update className="topbarIconE"/>
                        <span className="topbarTextE">Update Info</span>
                    </div>
                    <div className="topbarElementsE">
                        <Info className="topbarIconE"/>
                        <span className="topbarTextE">About</span>
                    </div>
                    <div className="topbarElementsE">
                        <ExitToApp className="topbarIconE"/>
                        <span className="topbarTextE">Logout</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

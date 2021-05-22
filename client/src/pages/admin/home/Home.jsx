import './home.css'
import Topbar from '../../../component/admin/topbar/Topbar'
import Sidebar from '../../../component/sidebar/Sidebar'
import Rightbar from '../../../component/rightbar/Rightbar'

export default function Home() {
    return (
        <div className="home">
            <Topbar/>
            <marquee direction="Left" className = 'warning'>*COVID 19: Stopping the spread starts with you. Wear a mask. Clean your hands. Maintain safe distance. Get vaccinated*</marquee>
            <div className="homeWrapper">
                <Sidebar/>
                <Rightbar/>
            </div>
        </div>
    )
}

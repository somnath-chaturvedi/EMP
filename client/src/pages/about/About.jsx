import Topbar from '../../component/admin/topbar/Topbar'
import './about.css'

export default function About() {
    return (
        <div className="about">
            <Topbar/>
            <div className="aboutWrapper">
                <h1 className="aboutHeading">Employee Management System</h1>
                <h3 className="aboutDesc">A Web App that allows HR to add, retrieve, manipulate sensitive information</h3>
                <h3 className="aboutDesc">of their employees conveniently !</h3>
                <h3 className="aboutDesc">Developed By-</h3>
                <div className="aboutBody">
                    <div className="aboutR1">
                        <div className="aboutTile">
                            <div className="aboutName">Somnath Chaturvedi</div>
                            <div className="aboutCllg">UIT RGPV</div>
                        </div>
                        <div className="aboutTile">
                            <div className="aboutName">Rohit Rathore</div>
                            <div className="aboutCllg">UIT RGPV</div>
                        </div>
                    {/* </div>
                    <div className="aboutR2"> */}
                        <div className="aboutTile">
                            <div className="aboutName">Siddhant Reddy</div>
                            <div className="aboutCllg">UIT RGPV</div>
                        </div>
                        <div className="aboutTile">
                            <div className="aboutName">Suraj Gupta</div>
                            <div className="aboutCllg">UIT RGPV</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

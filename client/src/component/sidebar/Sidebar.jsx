import './sidebar.css'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {EventAvailable} from '@material-ui/icons'

export default function Sidebar() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="sidebar">
            <div className="calender">
                <Calendar onChange={onChange} value={value} className = 'cd'/>
            </div>
            <div className="notice">
                <span className="noticeHeading">Events</span>
                <div className="noticeContainer">
                    <div className="noticeContent">
                       <EventAvailable htmlColor = 'palevioletred'/>
                       <notice className="body">
                           <span className="noticeText">International Day for Biological Diversity</span>
                        <span className="noticeDate">May 22, 2021</span>
                        </notice>
                    </div>
                    <div className="noticeContent">
                       <EventAvailable htmlColor = 'palevioletred'/>
                       <notice className="body">
                           <span className="noticeText">National Animals Rights Day</span>
                        <span className="noticeDate">June 6, 2021</span>
                        </notice>
                    </div>
                    <div className="noticeContent">
                       <EventAvailable htmlColor = 'palevioletred'/>
                       <notice className="body">
                           <span className="noticeText">International Olympic Day</span>
                            <span className="noticeDate">June 23, 2021</span>
                        </notice>
                    </div>
                    <div className="noticeContent">
                       <EventAvailable htmlColor = 'palevioletred'/>
                       <notice className="body">
                           <span className="noticeText">National Doctor’s Day</span>
                            <span className="noticeDate">July 1, 2021</span>
                        </notice>
                    </div>
                </div>
            </div>
        </div>
    )
}

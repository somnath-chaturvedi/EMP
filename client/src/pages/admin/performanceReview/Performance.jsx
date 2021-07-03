import Topbar from '../../../component/admin/topbar/Topbar'
import './performance.css'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Edit } from '@material-ui/icons';
import { Bar } from 'react-chartjs-2'
import ReactSpeedometer from "react-d3-speedometer"

export default function Performance() {

    const [update, setUpdate] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [chartData, setChartData] = useState({});

    const communication = useRef();
    const problemSolving = useRef();
    const quality = useRef();
    const attention = useRef();
    const deadline = useRef();

    const employeeId = useRef();
    const handleClick = () => {
        if(!update){
            setUpdate(true);
        }
        else {
            setUpdate(false);
            employeeId.current.value = "";
        }
    }

    const handleEdit = () => {
        if(!isEdit){
            setIsEdit(true);
        }
        else{
            setIsEdit(false);
        }
    }

    const[employee, setEmployee] = useState({})
    
    useEffect(() => {
        const fetchEmployee = async() => {
        const res = await axios.get('/view/' + employeeId.current.value)
        setEmployee(res.data)
        }
        fetchEmployee();
    },[update,isEdit])

    const handleSumbit = async(e) => {
        e.preventDefault();
            const updatedEmployee = {
            communication: communication.current.value || employee.communication,
            problemSolving: problemSolving.current.value || employee.problemSolving,
            quality: quality.current.value || employee.quality,
            attention: attention.current.value || employee.attention,
            deadline: deadline.current.value || employee.deadline,
        }
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const updatePerformance = {
            date: today.toLocaleDateString(),
            rating: avg,
        }
        try {
            await axios.put('/update/' + employeeId.current.value, updatedEmployee)
            await axios.put('/performance/' + employeeId.current.value, updatePerformance)
        } catch (error) {
            console.log(error)
        }
        setIsEdit(false)
    }
        const chart = () => {
        let performanceRating = [];
        let performanceDate = [];
        axios
        .get('/view/' + employeeId.current.value)
        .then(res => {
            console.log(res);
            for (const dataObj of res.data.overAll) {
            performanceRating.push((dataObj.rating));
            performanceDate.push((dataObj.date));
            }
            setChartData({
            labels: performanceDate,
            datasets: [
                {
                label: "Overall Performance",
                data: performanceRating,
                backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                borderWidth: 2
                }
            ]
            });
        })
        .catch(err => {
            console.log(err);
        });
        console.log(performanceRating, performanceDate);
    };
    
    useEffect(() => {
        chart();
    }, [update,isEdit]);
        
    const avg = (employee.communication + employee.problemSolving + employee.quality + employee.attention + employee.deadline)/5;

    return (
        <div className="perviewEmployee">
            <Topbar/>
            <div className="perviewWrapper">
                {update ? <div className="graph">
                     <Bar
                        data={chartData}
                        options={{
                            responsive: true,
                            title: { text: "THICCNESS SCALE", display: true },
                            scales: {
                            yAxes: [
                                {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false
                                }
                                }
                            ],
                            xAxes: [
                                {
                                gridLines: {
                                    display: false
                                }
                                }
                            ]
                            }
                    }}
                /> 
                </div>
                : <div className="blank"></div> }
                <div className="bodyOutSide">
                <div className="perviewBody">
                    <div className="persearchBox">
                    <input type="text" className="persearchEmployee" placeholder = "Employee ID" ref={employeeId} />
                    <button className="persearchEmpButton" onClick = {handleClick}>Search</button>
                    </div>
                {update ? 
                <form className="perviewContainer" onSubmit = {handleSumbit}>
                    <div className="speedometer">
                        <ReactSpeedometer
                        height={200}
                        maxValue={5}
                        value={avg}
                        needleColor="black"
                        startColor="red"
                        segments={10}
                        endColor="green"/>
                    </div>
                    <span className="overAll">Current Performance</span>
                    <div className="performBody">
                    <div className="perviewContent">
                    <span className="perviewLabel">Communication:</span>
                    {isEdit ? 
                    <input type="text" className="perviewName1" ref ={communication} placeholder = {employee.communication}/> : 
                    <><span className="perviewName1">{employee.communication}</span>
                    <Edit className = "pereditButton" onClick = {handleEdit}/></>
                    }
                </div>
                <div className="perviewContent">
                    <span className="perviewLabel">Problem-solving:</span>
                    {isEdit ? 
                    <input type="text" className="perviewName1" ref={problemSolving} placeholder = {employee.problemSolving}/> : 
                    <span className="perviewName">{employee.problemSolving}</span>
                    }
                </div>
                <div className="perviewContent">
                    <span className="perviewLabel">Quality and accuracy of work:</span>
                    {isEdit ? 
                    <input type="text" className="perviewName1" ref={quality} placeholder = {employee.quality}/> : 
                    <span className="perviewName">{employee.quality}</span>
                    }
                </div>
                <div className="perviewContent">
                    <span className="perviewLabel">Attendance, punctuality and reliability:</span>
                    {isEdit ? 
                    <input type="text" className="perviewName1" ref={attention} placeholder = {employee.attention}/> : 
                    <span className="perviewName">{employee.attention}</span>
                    }
                </div>
                <div className="perviewContent">
                    <span className="perviewLabel">The ability to accomplish goals and meet deadlines:</span>
                    {isEdit ? 
                    <input type="text" className="perviewName1" ref={deadline} placeholder = {employee.deadline}/> : 
                    <span className="perviewName">{employee.deadline}</span>
                    }
                </div>
                {isEdit ? <button type = 'submit'>Submit</button>: <div className="blank"></div>}
                </div>
                </form>
                 :
                <div className="blank"></div>
                }
                </div>
                </div>
            </div>
        </div>
    )
}
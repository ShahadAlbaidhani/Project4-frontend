import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import './../../../css/servies.css'
import dotenv from "dotenv";
dotenv.config();

export default function SelectType() {



    let history = useHistory();
    const [tech, setTech] = useState([])


    useEffect(() => {
        axios.get(process.env.REACT_APP_ALL_TECHNICIAN_API)
            .then(data => {
                setTech(data.data.allTechnicians)
            }).catch(err => console.log(err))
    }, [])

    // --------------- Device Type filter [Phone,Computer] --------------- 
    const Phone = tech.filter(person => person.deviceType == "Phone").map(filteredPerson => filteredPerson)
    const Computer = tech.filter(person => person.deviceType == "Computer").map(filteredPerson => filteredPerson)

    // --------------- Problem Type filter [Software,Hardware] --------------- 
    const Software = tech.filter(person => person.problemType == "Software").map(filteredPerson => filteredPerson)
    const Hardware = tech.filter(person => person.problemType == "Hardware").map(filteredPerson => filteredPerson)

    // --------------- Software Type filter [IOS,Android] --------------- 
    const IOS = tech.filter(person => person.softwareType == "IOS").map(filteredPerson => filteredPerson)
    const Android = tech.filter(person => person.softwareType == "Android").map(filteredPerson => filteredPerson)

    return (
        <div class="select-box  mt-5  mb-5 ">
            <h1 class="h1-header-select fs-1 text-capitalize">Go to repair your device</h1>
            <h6 class="header-select fs-1 text-capitalize">Choose the device type</h6>
            <h6 class="header-select fs-1 text-capitalize">The Professional technicians are waiting for you</h6>

            <div class="d-flex justify-content-center mt-5 mb-5 SelectType">

            </div>
            <div>
                <button class=" button-Type " onClick={() => history.push({ pathname: `/Technicians`, state: { Computer } })} variant="outlined"><span class="fs-1 ">Computer</span> </button>
                <button class=" button-Type " onClick={() => history.push({ pathname: `/Technicians`, state: { Phone } })} variant="outlined"> <span class="fs-1">Phone</span> </button>
            </div>
           
        </div>
    )
}

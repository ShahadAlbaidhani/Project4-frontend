import React from 'react'
import CardTechnicians from './CardTechnicians'


export default function AllTechnicians(props) {

    const tech = props.location.state.Phone? props.location.state.Phone:props.location.state.Computer

    // console.log(tech)
    const techInfo = tech.map(ele => <CardTechnicians
        username={ele.username}
        firstName={ele.firstName}
        lastName={ele.lastName}
        image={ele.image}
        id={ele._id}
        email={ele.email}
        deviceType={ele.deviceType}
        softwareType={ele.softwareType}
        problemType={ele.problemType}
        iban={ele.iban} />)

    return (
        <div>
            {/* {userName.map(ele =><CardTechnicians Technician={ele}/>  )} */}
            
            {techInfo}
            <hr></hr>
        </div>
    )
}


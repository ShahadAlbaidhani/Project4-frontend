import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "react-bootstrap/Card";


export default function OrderDetails(props) {

    const order = props.location.state && props.location.state
    console.log(order)
    const [userInfo, setUserInfo] = useState("user")
    const [techInfo, setTechInfo] = useState("tech")

    const userId = order.user

    useEffect(() => {
        axios.get(`/api/v1/user/${userId}`)
            .then(data => {
                setUserInfo(data.data)
            }).catch(err => {
                console.log(err)
            })
    }, [order])

    useEffect(() => {
        axios.get(`/api/v1/technician/${order.technician}`)
            .then(data => {
                setTechInfo(data.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

if(userInfo != "user" && techInfo != "tech"){
   
    return (
        <>
             {userInfo &&
                <main class="container-fluid d-flex justify-content-center">
                  <div class="col-md-6 col-lg-4 mt-3 mb-3">
                  <Card style={{ width: '30rem' , backgroundColor: "#353535", textAlign:"center" , color:"white"}}>
                    <Card.Body>
                        <div class="d-flex justify-content-around">
                    <Card.Title>Customer name: {userInfo.firstName}</Card.Title>
                    <Card.Title>Technician Name: {techInfo.firstName}</Card.Title>
                    </div>
                    <hr></hr>
                    <Card.Title>Title: {order.title}</Card.Title>
                      <Card.Text>Descritopn: {order.description}</Card.Text>
                      <div style={{display:"flex", justifyContent: "center"}} >
                      <Card.Text>Device Type: {order.deviceType} </Card.Text>
                      <Card.Text>Problem Type: {order.problemType} </Card.Text>
                      <Card.Text>Software Type: {order.softwareType} </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                  </div>
                </main>
            }
        </>
    )
        }
else{
    return(
        <div>
        <h1>loading</h1>
        </div>
    )
}

}
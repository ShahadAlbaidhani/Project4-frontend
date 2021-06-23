import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'

export default function RequstOrder(props) {
  let history = useHistory();
  const order = props.order && props.order

  console.log(order)
  const [value, setvalue] = useState("");



  const Acceptance = (event) => {
    setvalue("Acceptance")
    axios.put(`/api/v1/order/edit/${order._id}`, { status: "Acceptance" })
      .then(data => {
        console.log(data.data)
        props.setFlag(pre=>!pre)
      }).catch(error => {
        console.log(error)
      })

  }
  console.log(order._id)

  const Done = (event) => {
    setvalue("done")
    axios.put(`/api/v1/order/edit/${order._id}`, { status: "done" })
      .then(data => {
        console.log(data.data)
        props.setFlag(pre=>!pre)
      }).catch(error => {
        console.log(error)
      })
  }


  if (order.status == "") {
    return (


      <main class="container-fluid d-flex justify-content-center">
        <div class="col-md-6 col-lg-4 mt-3 mb-3">
          <Card style={{ width: '23rem', backgroundColor: "#353535", textAlign: "center", color: "white" }}>
            <Card.Body>
              <div style={{ textAlign: "center", color: "white" }}>
                <Card.Title style={{ textDecoration: "none" }}>{order.title}</Card.Title>
              </div>
              <Button onClick={Acceptance} className="btn btn-light mt-4" type="button" >Accept</Button>
              <Button className="btn btn-light ml-4 mt-4" type="button">Reject</Button>

            </Card.Body>
          </Card>
        </div>
      </main>

    )
  }

  if (order.status == "Acceptance" && order.amount == 0 && order.cardNumber == 0) {

    return (

      <main class="container-fluid d-flex justify-content-center">
        <div class="col-md-6 col-lg-4 mt-3 mb-3">
          <Card style={{ width: '23rem', backgroundColor: "#353535", textAlign: "center", color: "white" }}>
            <Card.Body>
              <div style={{ textAlign: "center", color: "white" }}>
                <Card.Title>{order.title}</Card.Title>

              </div>
              <Button onClick={() => history.push({ pathname: `/OrderDetails`, state: order })} className="btn btn-light mt-4 ml-1" type="button">
                More</Button>
              <Button onClick={() => history.push({ pathname: `/AddPaymentAmount`, state: order })} className="btn btn-light mt-4 ml-3" type="button">
                Add amount</Button>
              <Button onClick={Done} className="btn btn-light mt-4 ml-4" type="button">Done</Button>

            </Card.Body>
          </Card>
        </div>
      </main>
    )
  }
  if (order.status == "Acceptance" && order.cardNumber == 0 && order.amount != 0) {
    return (

      <main class="container-fluid d-flex justify-content-center">
        <div class="col-md-6 col-lg-4 mt-3">

          <Card style={{ width: '23rem', backgroundColor: "#353535", textAlign: "center", color: "white" }}>
            <Card.Body>
              <div style={{ textAlign: "center", color: "white" }}>
                <Card.Title>{order.title}</Card.Title>
                <p>Waiting for the customer to pay</p>
              </div>
              <Button onClick={() => history.push({ pathname: `/OrderDetails`, state: order })} className="btn btn-light mt-4 mr-3" type="button">
                More</Button>

              <Button onClick={Done} className="btn btn-light mt-4" type="button">Done</Button>

            </Card.Body>
          </Card>
        </div>
      </main>
    )
  }
  if (order.status == "Acceptance" && order.cardNumber != 0 && order.amount != 0) {
    return (
      <div>
        <main class="container-fluid d-flex justify-content-center">
          <div class="col-md-6 col-lg-4 mt-3">
            <Card style={{ width: '23rem', backgroundColor: "#353535", textAlign: "center", color: "white" }}>
              <Card.Body>
                <div style={{ textAlign: "center", color: "white" }}>
                  <Card.Title >{order.title}</Card.Title>
                </div>
                <p>you've been payed by the customer</p>

                <Button onClick={() => history.push({ pathname: `/OrderDetails`, state: order })} className="btn btn-light mt-3 mr-4" type="button">
                  More</Button>

                <Button onClick={Done} className="btn btn-light mt-3" type="button">Done</Button>

              </Card.Body>
            </Card>
          </div>
        </main>
      </div>
    )
  }
  if (order.status == "done") {

    return (


      <main class="container-fluid d-flex justify-content-center">
        <div class="col-md-6 col-lg-4 mt-3 mb-3">
          <Card style={{ width: '23rem', backgroundColor: "#353535", textAlign: "center", color: "white" }}>
            <Card.Body>
              <Card.Title>{order.title}</Card.Title>
              <p>Order Status: Closed</p>
            </Card.Body>
          </Card>
        </div>
      </main>
    )
  }
  else {
    return (<> </>)
  }

}
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
export default function OrderTicket(props) {
  let history = useHistory();

  const order = props.order && props.order
  console.log(order)
  console.log(order.cardNumber)
  // props.order.status
  const [value, setvalue] = useState(props.order.status);

  if (order.status == "") {
    return (
      <>
        {order &&
          <main class="container-fluid d-flex justify-content-center">
            <div class="col-md-6 col-lg-4 mt-3 mb-2 ">

              <Card style={{ width: '23rem', backgroundColor: "#353535", textAlign: "center", color: "white" }}>
                <Card.Body>

                  <Card.Title style={{ color: "white" }}>{props.order.title}</Card.Title>
                  <Card.Text class="ml-2 pt-5">Order Status: Wating for technician</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </main>
        }
      </>
    )
  }

  if (order.status == "Acceptance" && order.amount == 0 && order.cardNumber == 0) {

    return (
      <div>
        <main class="container-fluid d-flex justify-content-center">
          <div class="col-md-6 col-lg-4 mt-3 mb-2 ">
            {/* <div class='run {{value}}'> */}
            <Card style={{ width: '23rem', backgroundColor: "#353535" }}>
              <Card.Body>
                <div style={{ textAlign: "center", color: "white" }}>
                  <Card.Title>{props.order.title}</Card.Title>
                  <p>Order Status: Accept</p>
                  <p>Price: Price is not specified</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button onClick={() => history.push({ pathname: `/OrderDetails`, state: order })} className="btn btn-light mr-8" type="button">
                    More</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </main>
      </div>
    )
  }
  if (order.status == "Acceptance" && order.amount != 0 && order.cardNumber == 0) {
    return (
      <main class="container-fluid d-flex justify-content-center">
        <div class="col-md-6 col-lg-4 mt-3">
          {/* <div class='run {{value}}'> */}
          <Card style={{ width: '23rem', backgroundColor: "#353535" }}>
            <Card.Body>
              <div style={{ textAlign: "center", color: "white" }}>
                <Card.Title>{props.order.title}</Card.Title>
                <p>Price: {props.order.amount}</p>
                <p>Please please pay for your order</p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }} >
                <Button className="btn btn-light" type="button" onClick={() => history.push({ pathname: `/OrderDetails`, state: order })}  >
                  More</Button>
                <Button className="btn btn-light ml-3" type="button" onClick={() => history.push({ pathname: `/payment`, state: order })} >
                  Pay</Button>
              </div>
            </Card.Body>
          </Card>
          {/* </div> */}
        </div>
      </main>
    )
  }
  if (order.status == "Acceptance" && order.cardNumber != 0 && order.amount != 0) {
    return (
      <main class="container-fluid d-flex justify-content-center">
        <div class="col-md-6 col-lg-4 mt-3">

          <Card style={{ width: '23rem', backgroundColor: "#353535" }}>
            <Card.Body>
              <div style={{ textAlign: "center", color: "white" }}>
                <Card.Title >{props.order.title}</Card.Title>
                <p>Price: {props.order.amount}</p>
                <p>Thank you for paying</p>
               
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
              <Button onClick={() => history.push({ pathname: `/OrderDetails`, state: order })} className="btn btn-light" type="button" >
                More</Button>
              </div>
            </Card.Body>
          </Card>
          {/* </div> */}
        </div>
      </main>
    )
  }
  if (order.status == "done") {

    return (

      <main class="container-fluid d-flex justify-content-center">
        <div class="col-md-6 col-lg-4 mt-3">
          <Card style={{ width: '23rem', backgroundColor: "#353535" }}>
            <Card.Body >
              <div style={{ textAlign: "center", color: "white" }}>
                <Card.Title>{props.order.title}</Card.Title>
                <p>Order Status: Closed</p>
                <p>You've recived your order</p>
              </div>
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




import React from 'react'
import './../../../css/order.css'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import StripeContainer from './../../payment/StripeContainer';

export default function OrderInprogress(props){
  const [showItem, setShowItem] = useState(false)
  return (
        <>
        <small>expireDate</small>
        <br></br>
        <small>user Name</small>

      <h1>title</h1>
      <p>description</p>
      <h6>deviceType</h6>
      <h6>softwareType</h6>
      <h6>problemType</h6>
      <hr></hr>
      <h2>chat</h2>
      <hr></hr>

      <Button variant="primary">Done</Button>

      <h1>Order Pay</h1>
      {showItem ? <StripeContainer/> : <> <h3>$80.00</h3>
       {/* <img src={spatula} alt="Spaluta" /> */}
      <button onClick={() => setShowItem(true)}>Pay</button></>}

        </>
    )
}


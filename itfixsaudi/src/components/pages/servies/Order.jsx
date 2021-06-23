
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import "./../../../css/Forms.css"
import Button from 'react-bootstrap/Button'
import { decodeToken, isExpired } from "react-jwt"

export default function Order(props) {

  const [toNext, setToNext] = useState(false)
  const [order, setOrder] = useState({})
  const [user, setUser] = useState({})
  const [isLogin, setIsLogin] = useState(false)


  useEffect(() => {
    loginFunction()
  }, [])

  const loginFunction = () => {
    let token = localStorage.getItem("token")
    let decodeUser = decodeToken(token)
    if (decodeUser?.user && !isExpired(token)) {
      setUser(decodeUser.user)
      setIsLogin(true)
    } else {
      setUser({})
      setIsLogin(false)
    }
  }

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    // const technicianId = props.location.state.tech?props.location.state.tech:""
    setOrder({ ...order, [name]: value })
  }
  const technicianId = props.location.state.tech?props.location.state.tech:""
  const userId =user._id 

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(order)
    axios.post(`/api/v1/order/new`,{order,technicianId,userId})
      .then((data) => {
        console.log(data)
        setToNext(true)
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  return (
    <div className="from-Square">
     

      <Form onSubmit={(e) => handleSubmit(e)}>
      <h1 style={{ textAlign: 'center' }}>Create Your Order</h1>


        <Form.Label>Title</Form.Label>
         <div><input className='Form.Control '
          type='text'
          placeholder="Enter a title of order "
          name="title"
          onChange={(e) => handleChange(e)}
        /></div>

        <Form.Label>Description</Form.Label>
         <div><input className='Form.Control '
          type='text'
          placeholder="Enter description of order "
          name="description"
          onChange={(e) => handleChange(e)} /></div>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>deviceType</Form.Label>
          <select
            class='Form.Control'
            as="select"
            defaultValue="Choose..."
            name="deviceType"
            value="deviceType"
            onChange={(e) => handleChange(e)}>
            <option value="" selected disabled hidden>Choose here</option>
            <option value="Computer">Computer</option>
            <option value="Phone">Phone</option>
          </select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>software Type</Form.Label>
          <select
            class='Form.Control'
            as="select"
            defaultValue="Choose..."
            name="softwareType"
            value="softwareType"
            onChange={(e) => handleChange(e)}>
            <option value="" selected disabled hidden>Choose here</option>
            <option value="IOS">IOS</option>
            <option value="Android">Android </option>
          </select>
        </Form.Group>


        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>problemType</Form.Label>
          <select
            class='Form.Control'
            as="select"
            defaultValue="Choose..."
            name="problemType"
            value="problemType"
            onChange={(e) => handleChange(e)}>
            <option value="" disabled hidden  >Choose here</option>
            <option value="Hardware">Hardware </option>
            <option value="Software">Software</option>
          </select>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
           <div><input className='Form.Control '
            type="number"
            placeholder="Enter your Phone Number"
            name="phoneNumber"
            onChange={(e) => handleChange(e)}
          /></div>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Location</Form.Label>
           <div><input className='Form.Control '
            type="text"
            placeholder="Enter your location"
            name="location"
            onChange={(e) => handleChange(e)}
          /></div>
        </Form.Group>

        <Button style={{color:'black', backgroundColor:'white', marginTop: "10%",
                     boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border:'none',borderBottom:' 1px solid white' , width:'90%'
                    }}  variant="primary" type="submit" >
                        Submit </Button>
        
        {toNext ? <Redirect to="/Home" />: null}

      </Form>
    </div>
  )
}
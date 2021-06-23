import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react'
import { useHistory ,Redirect} from "react-router-dom";
import axios from 'axios'
import Form from 'react-bootstrap/Form'


export default function Payment(props) {
    const order = props.location.state && props.location.state

    const [payment , setPayment] = useState()
    const [toNext, setToNext] = useState(false)
    
    const changeUserHandler = (e) => {
        let name = e.target.name
        let value = e.target.value
        setPayment({ ...payment, [name]: value })
    }
    
    console.log(order)
    const Pay = (e) => {
        e.preventDefault()
        console.log(payment)
        axios.put(`/api/v1/order/edit/${order._id}`, payment)
            .then(data => {
                console.log(data.data)
                setToNext(true)
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="from-Square">

            <Form onSubmit={Pay} >
                <Form.Label>card Number</Form.Label>
                <div><input className='Form.Control '
                    type='Number'
                    placeholder="Enter Last Name "
                    name="cardNumber"
                    onChange={(e) => changeUserHandler(e)}
                /></div>

                <Form.Label>PIN</Form.Label>
                <div><input className='Form.Control '
                    type='Number'
                    name="PIN"
                    onChange={(e) => changeUserHandler(e)}
                /></div>

                <Form.Label>expireDate</Form.Label>
                <div><input className='Form.Control '
                    type='Date'
                    name="expireDate"
                    onChange={(e) => changeUserHandler(e)}
                /></div>


                <br />
                <Button style={{
                    color: 'black', backgroundColor: 'white', marginTop: "5%",
                    boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border: 'none', borderBottom: ' 1px solid white', width: '90%'
                    , margin: 'auto'
                }} variant="primary" type="submit"  >
                    Pay </Button>

                    {toNext ? <Redirect to='/Home`' /> : null}

            </Form>


       
       
        
       </div >
    )
}

import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import {Redirect ,useHistory} from 'react-router-dom'
import axios from 'axios'
import "./../../../css/Forms.css"

export default function TechChangePassword(props) {
    const userinfo = props.location.state.userinfo? props.location.state.userinfo:""

    const [toNext, setToNext] = useState(false)
    const [user, setUser] = useState({})

    const changeUserHandler = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUser({ ...user, [name]: value })
    }
 
    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.put(`/api/v1/technician/changePassword/${userinfo._id}`,user)
                .then((user) =>{
                    console.log(user)
                    setToNext(true)
                }
                ) .catch(err => {
                console.log(err.response)
            })
    }
    return (
        <>
        {props&&

        <div className="from-Square">

         <Form onSubmit={onSubmitHandler}>
         <Form.Label>oldPassword</Form.Label>
            <div><input className='Form.Control '
                type='password'
                placeholder="Enter oldPassword "
                name="oldPassword"
                onChange={(e) => changeUserHandler(e)}
            /></div>

            <Form.Label>newPassword</Form.Label>
            <div><input className='Form.Control '
                type='password'
                name="newPassword"
                onChange={(e) => changeUserHandler(e)}
            /></div>

           
            <br/>
            <Button style={{color:'black', backgroundColor:'white', marginTop: "5%",
                 boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border:'none',borderBottom:' 1px solid white' , width:'90%'
                , margin:'auto' } } variant="primary" type="submit"  >
                Update </Button>
                {toNext ? <Redirect to='/Home' /> : null}
        </Form> 
        
            </div>
}
    </>
    )
}

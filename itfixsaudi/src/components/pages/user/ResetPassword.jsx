import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from "react-router-dom"
import axios from 'axios'
import dotenv from "dotenv";

dotenv.config();

export default function ResetPassword(props) {

    const [toNext, setToNext] = useState(false)

    const [user, setUser] = useState({})

    const changeUserHandler = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUser({ ...user, [name]: value })
    }
    const path = props.location.pathname
    const resetLink = path.slice(19)
    console.log(resetLink)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log("click")
        var header = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        }

        axios.put(`/api/v1/user/resetPassword${resetLink}`,{header: header , user})
            .then(data => {
                console.log(data)
                setToNext(true)
            }).catch(err => {
                console.log(err.response)
            })
    }


    return (
        <div className="from-Square">
            

            <Form onSubmit={onSubmitHandler}>
            <h1 style={{ textAlign: 'center' }}>Reset Password</h1>
            <p style={{ fontSize: "13px", textAlign: 'center' }}>Please enter your new password.</p>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <div><input className='Form.Control ' 
                        type="password"
                        placeholder="Password"
                        name="newPassword"
                        onChange={(e) => changeUserHandler(e)}
                    /></div>
                    <Form.Text className="text-muted">
                        Must be more than 6 characters long.</Form.Text>
                </Form.Group>

                {toNext ? <Redirect to="/Home" /> : null}

                <Button style={{color:'black', backgroundColor:'white', marginTop: "10%",
                     boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border:'none',borderBottom:' 1px solid white' , width:'50',
                     margin:'auto'
                    }}  variant="primary" type="submit" >
                        Submit </Button>
                <br />
            </Form>
        </div>
    )
}




























// import React, { useState, useEffect } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import { Redirect } from "react-router-dom"
// import axios from 'axios'
// import dotenv from "dotenv";

// dotenv.config();

// export default function ResetPassword(props) {

//     const [toNext, setToNext] = useState(false)

//     const [user, setUser] = useState({})

//     const changeUserHandler = (e) => {
//         let name = e.target.name
//         let value = e.target.value
//         setUser({ ...user, [name]: value })
//     }
//     const path = props.location.pathname
//     const resetLink = path.slice(19)
//     console.log(resetLink)

//     const onSubmitHandler = (e) => {
//         e.preventDefault()
//         console.log("click")
//         var header = {
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
//             "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
//         }

//         axios.put(`http://localhost:4000/api/v1/user/resetPassword${resetLink}`,{header: header , user})
//             .then(data => {
//                 console.log(data)
//                 setToNext(true)
//             }).catch(err => {
//                 console.log(err.response)
//             })
//     }


//     return (
//         <div>
//             <h1 style={{ textAlign: 'center' }}>Reset Password</h1>
//             <p style={{ fontSize: "13px", textAlign: 'center' }}>Please enter your new password.</p>

//             <Form onSubmit={onSubmitHandler}>

//                 <Form.Group controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                         type="password"
//                         placeholder="Password"
//                         name="newPassword"
//                         onChange={(e) => changeUserHandler(e)}
//                     />
//                     <Form.Text className="text-muted">
//                         Must be more than 6 characters long.</Form.Text>
//                 </Form.Group>

//                 {toNext ? <Redirect to="/Home" /> : null}

//                 <Button variant="primary" type="submit" >
//                     Submit </Button>
//                 <br />
//             </Form>
//         </div>
//     )
// }

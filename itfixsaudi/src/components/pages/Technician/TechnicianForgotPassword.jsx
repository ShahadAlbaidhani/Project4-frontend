
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from "react-router-dom"
import axios from 'axios'
import dotenv from "dotenv";

dotenv.config();

export default function TechnicianForgotPassword() {
    const [toNext, setToNext] = useState(false)

    const [tech, setTech] = useState({})

    const changeUserHandler = (e) => {
        let name = e.target.name
        let value = e.target.value
        setTech({ ...tech, [name]: value })
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        console.log("click")
        axios.put("/api/v1/technician/forgotPassword", tech)
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
            <p style={{fontSize: "13px",textAlign: 'center'}}>Forgotten your password? Enter your email address below, and we'll email instructions for setting a new one.</p>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email</Form.Label>
                    <div><input className='Form.Control ' 
                    type="email" 
                    placeholder="Enter email" 
                    name="email" 
                    onChange={(e)=>changeUserHandler(e)}
                    /></div>
                </Form.Group>
                {toNext ? <Redirect to="/Home" /> : null}

                <Button style={{color:'black', backgroundColor:'white', marginTop: "10%",
                     boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border:'none',borderBottom:' 1px solid white' , width:'50',
                     margin:'auto'
                    }}  variant="primary" type="submit" >
                        Submit </Button>

                
            </Form>
        </div>
    )
}
























// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import { Redirect } from "react-router-dom"
// import axios from 'axios'
// import dotenv from "dotenv";

// dotenv.config();

// export default function TechnicianForgotPassword() {
//     const [toNext, setToNext] = useState(false)

//     const [tech, setTech] = useState({})

//     const changeUserHandler = (e) => {
//         let name = e.target.name
//         let value = e.target.value
//         setTech({ ...tech, [name]: value })
//     }

//     const onSubmitHandler = (e) =>{
//         e.preventDefault()
//         console.log("click")
//         axios.put("http://localhost:4000/api/v1/technician/forgotPassword", tech)
//         .then(data => {
//             console.log(data)
//             setToNext(true)
//         }).catch(err => {
//             console.log(err.response)
//         })
//     }

//     return (
//         <div>
//             <h1 style={{ textAlign: 'center' }}>Reset Password</h1>
//             <p style={{fontSize: "13px",textAlign: 'center'}}>Forgotten your password? Enter your email address below, and we'll email instructions for setting a new one.</p>
//              <Form onSubmit={onSubmitHandler}>
//                 <Form.Group controlId="formBasicEmail" >
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control 
//                     type="email" 
//                     placeholder="Enter email" 
//                     name="email" 
//                     onChange={(e)=>changeUserHandler(e)}
//                     />
//                 </Form.Group>
//                 {toNext ? <Redirect to="/Home" /> : null}

//                 <Button variant="primary" type="submit" >
//                     Submit </Button>
//                 <br />
//             </Form>
//         </div>
//     )
// }

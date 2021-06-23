
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link, Redirect} from "react-router-dom"
import './../../../css/Forms.css'
import axios from 'axios'
import dotenv from "dotenv"

dotenv.config();



export default function Singin(props) {

    const [toNext, setToNext] = useState(false)
   


    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(10, 'Must be 15 characters or less')
                .required('Required'),
            password: Yup.string().required('No password provided.')
            .min(6, 'Password is too short - should be 8 chars minimum.')         

        }),

        onSubmit: values  => {
                axios.post(process.env.REACT_APP_TECHNICIAN_LOGIN_API, values)
                    .then(data => {
                        console.log(data)
                        localStorage.setItem("token", data.data.token)
                        props.loginFunction()
                        setToNext(true)
                    }).catch(err => {
                        console.log(err.response)
                    })
            
           
        },       
    });

    
    
    return (
        <div className="from-Square">

        <form onSubmit={formik.handleSubmit}>
        <h1 style={{ marginBottom:'10%'}}>Sing In</h1>

            <label htmlFor="username">username</label>
            <div><input
            className='Form.Control '
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                placeholder="Enter username"
            /> </div>
            {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
            ) : null}

            <label for="passowrd">password</label>
            <div> <input
            className='Form.Control '
                id="password"
                name="password"
                placeholder="password"
                type="password"

                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            /></div>
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}

           {toNext ? <Redirect to="/Home" /> : null}


           <Button style={{color:'black', backgroundColor:'white', marginTop: "10%",
                     boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border:'none',borderBottom:' 1px solid white' , width:'90%'
                    }}  variant="primary" type="submit" >
                        Submit </Button>

                        <br />
            <Link style={{color:'white'}} to="/Register/Technician">
                    Don't have an account? Register
               </Link>
                <br />
                <Link style={{color:'white'}} to="/technician/forgotPassword">
                    Forgot password?
               </Link>

        </form>

        </div>
    );
};


// export default function Singin(props) {

//     const [toNext, setToNext] = useState(false)
//     const [tech, setTech] = useState({})

//     const techChangeHandler = (e) => {
//         let name = e.target.name
//         let value = e.target.value
//         setTech({ ...tech, [name]: value })
//     }

//     const techOnSubmitHandler = (e) => {
//         e.preventDefault()
//         axios.post(process.env.REACT_APP_TECHNICIAN_LOGIN_API, tech)
//             .then(data => {
//                 console.log(data)
//                 localStorage.setItem("token", data.data.token)
//                 props.loginFunction()
//                 setToNext(true)
//             }).catch(err => {
//                 console.log(err.response)
//             })
//     }

//     return (
//         <div>
//             <Form onSubmit={techOnSubmitHandler}>
//                 <Form.Group controlId="formBasicEmail" >
//                     <Form.Label>username</Form.Label>
//                     <Form.Control
//                         type="username"
//                         placeholder="Enter username"
//                         name="username"
//                         onChange={(e) => techChangeHandler(e)}
//                     />
//                     <Form.Text className="text-muted">
//                         We'll never share your email with anyone else.</Form.Text>
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                         type="password"
//                         placeholder="password"
//                         name="password"
//                         onChange={(e) => techChangeHandler(e)}
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="Check me out" />
//                 </Form.Group>

//                 {toNext ? <Redirect to="/Home" /> : null}

//                 <Button variant="primary" type="submit">
//                     Submit </Button>
//             </Form>
//             <br />
//             <Link to="/Register/Technician">
//                     Don't have an account? Register
//                </Link>
//                 <br />
//                 <Link to="/user/forgotPassword">
//                     Forgot password?
//                </Link>
//             <Link to="/singin/user">User</Link>

//         </div>
//     )
// }









































// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import "./../../../css/Forms.css"
// import { Link, Redirect } from "react-router-dom"
// import axios from 'axios'
// import dotenv from "dotenv";

// dotenv.config();

// export default function Singin(props) {

//     const [toNext, setToNext] = useState(false)
//     const [tech, setTech] = useState({})

//     const techChangeHandler = (e) => {
//         let name = e.target.name
//         let value = e.target.value
//         setTech({ ...tech, [name]: value })
//     }

//     const techOnSubmitHandler = (e) => {
//         e.preventDefault()
//         axios.post(process.env.REACT_APP_TECHNICIAN_LOGIN_API, tech)
//             .then(data => {
//                 console.log(data)
//                 localStorage.setItem("token", data.data.token)
//                 props.loginFunction()
//                 setToNext(true)
//             }).catch(err => {
//                 console.log(err.response)
//             })
//     }

//     return (
//         <div className="from-Square">


//             <Form onSubmit={techOnSubmitHandler}>
//                 <h1 style={{ marginBottom: '10%' }}>Sign In</h1>

//                 <Form.Group controlId="formBasicEmail" >
//                     <Form.Label>username</Form.Label>
//                     <div><input className='Form.Control ' type="username"
//                         placeholder="Enter username"
//                         name="username"
//                         onChange={(e) => techChangeHandler(e)} /></div>

//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <div><input className='Form.Control '
//                         type="password"
//                         placeholder="password"
//                         name="password"
//                         onChange={(e) => techChangeHandler(e)} /></div>
//                 </Form.Group>

//                 {toNext ? <Redirect to="/Home" /> : null}

//                 <Button style={{
//                     color: 'black', backgroundColor: 'white', marginTop: "5%",
//                     boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border: 'none', borderBottom: ' 1px solid white', width: '90%'
//                     , margin: 'auto',
//                 }} variant="primary" type="submit" >
//                     Submit </Button>


//                 <br />
//                 <Link style={{ color: 'white' }} to="/Register/Technician">
//                     Don't have an account? Register
//                </Link>
//                 <br />
//                 <Link style={{ color: 'white' }} to="/technician/forgotPassword">
//                     Forgot password?
//                </Link>
//                <br />
//                 <Link style={{ color: 'white' }} to="/singin/user">Sign in as a User</Link>
//             </Form>

//         </div>
//     )
// }
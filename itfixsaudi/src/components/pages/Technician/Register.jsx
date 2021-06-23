import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link, Redirect} from "react-router-dom"
import "./../../../css/Forms.css"
import axios from 'axios'
import dotenv from "dotenv"

dotenv.config();

export default function Register() {

    

const [toNext, setToNext] = useState(false)

const formik = useFormik({
    initialValues: {
        firstName:'',
        lastName:'',
        username: '',
        email:'',
        image:'',
        password: '',
        iban:'',
        deviceType:'',
        softwareType:'',
        problemType:'',
    },
    validationSchema: Yup.object({
        firstName: Yup.string().max(10, 'Must be 15 characters or less').required('Required'),
            lastName: Yup.string()
            .max(10, 'Must be 15 characters or less')
            .required('Required'),
            username: Yup.string()
            .max(10, 'Must be 15 characters or less')
            .required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            image: Yup.string().min(10, 'Must be 15 characters or less')
            .required('Required'),
            password: Yup.string().required('No password provided.')
            .min(6, 'Password is too short - should be 8 chars minimum.'),   
            passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match'), 
            iban:Yup.string().min(10, 'Must be 15 characters or less')
            .required('Required'),
            deviceType:Yup.string().required('Required'),
            softwareType:Yup.string().required('Required'),
            problemType:Yup.string().required('Required')

    }),

    onSubmit: values  => {
        axios.post(process.env.REACT_APP_TECHNICIAN_REGISTRATION_API, values)
            .then(data => {
                console.log(data)
                setToNext(true)
            }).catch(err => {
                console.log(err)
            })

        }


        });



return (
    <div className="from-Square">

    <form onSubmit={formik.handleSubmit}>
    <h1 style={{ textAlign: 'center' }}>Register</h1>

        <label htmlFor="firstName">First Name</label>
        <div><input className='Form.Control '
             id="firstName"
            type='text'
            placeholder="Enter First Name "
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName} 
        /></div>
         {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
            ) : null}





        <label htmlFor="lastName">Last Name</label>
        <div><input className='Form.Control '
            type='text'
            placeholder="Enter Last Name "
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
        /></div>
         {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
            ) : null}


        <label htmlFor="username">username</label>
        <div><input className='Form.Control '
            type='text'
            placeholder="Enter User Name "
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
        /></div>
         {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
            ) : null}


            <label  htmlFor="email">Email address</label>
            <div><input className='Form.Control '
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            /></div>
             {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            
 

        <label  htmlFor="image">Image</label>
        <div><input className='Form.Control '
            type='text'
            name="image"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
        /></div>
         {formik.touched.image && formik.errors.image ? (
                <div>{formik.errors.image}</div>
            ) : null}


            <label  htmlFor="password">Password</label>
            <div><input className='Form.Control '
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Password}
            /></div>
             {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}


            <label  htmlFor="passwordConfirmation">password Confirmation</label>
            <div><input className='Form.Control '
                type="password"
                placeholder="password Confirmation"
                name="passwordConfirmation"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passwordConfirmation}
            /></div>
             {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                <div>{formik.errors.passwordConfirmation}</div>
            ) : null}

        
<label htmlFor="">IBNAN </label>
        <div><input 
        class='Form.Control' 
        type='number' 
        placeholder="100XXXXX " 
        name="iban" 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.iban}
    /></div>
     {formik.touched.iban && formik.errors.iban ? (
        <div>{formik.errors.iban}</div>
    ) : null}




          <label htmlFor="">device Type</label>
          <select class='Form.Control' as="select"  name="deviceType"
            value="deviceType"
             defaultValue="Choose..."
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.deviceType}
             >
             <option value="" selected disabled hidden>Choose here</option>
            <option value="Computer">Computer</option>
            <option Computer="Phone">Phone</option>
          </select>
       
          {formik.touched.deviceType && formik.errors.deviceType ? (
             <div>{formik.errors.deviceType}</div>
         ) : null}

        

        
          <label htmlFor="">software Type</label>
          <select class='Form.Control' as="select" name="softwareType"
            value="softwareType"
             defaultValue="Choose..."
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.softwareType}
             >
            <option value="" selected disabled hidden>Choose here</option>
            <option value="IOS">IOS</option>
            <option  value="Android">Android </option>
          </select>
          {formik.touched.softwareType && formik.errors.softwareType ? (
             <div>{formik.errors.softwareType}</div>
         ) : null}
        
          <label htmlFor="">problemType</label>
          <select class='Form.Control'
          name="problemType"
          value="problemType"
           as="select" defaultValue="Choose..." 
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.problemType}
           >
            <option value="" selected disabled hidden>Choose here</option>
            <option value="Hardware">Hardware </option>
            <option value="Software">Software</option>
          </select>
          {formik.touched.problemType && formik.errors.problemType ? (
             <div>{formik.errors.problemType}</div>
         ) : null}

        <Button style={{color:'black', backgroundColor:'white', marginTop: "10%",
             boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border:'none',borderBottom:' 1px solid white' , width:'90%'
             } } variant="primary" type="submit"  >
            Submit </Button>

        {toNext ? <Redirect to="/activate" /> : null}

        <Link style={{color:'white'}} to="/singin/Technician">
            Already have an account? Sign in
       </Link>

    </form>
    </div>
)
}






// import React, { useState, useEffect } from 'react'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'
// import { BrowserRouter, Route, Link, Redirect } from "react-router-dom"
// import Col from 'react-bootstrap/Col'
// import InputGroup from 'react-bootstrap/InputGroup'
// import "./../../../css/Forms.css"
// import axios from 'axios'
// import dotenv from "dotenv";


// dotenv.config();

// export default function Register() {

//   const [toNext, setToNext] = useState(false)
//   const [tech, setTech] = useState({})

//   const techChangeHandler = (e) => {
//     let name = e.target.name
//     let value = e.target.value
//     setTech({ ...tech, [name]: value })
//   }

//   const techOnSubmitHandler = (e) => {
//     e.preventDefault()
//     axios.post(process.env.REACT_APP_TECHNICIAN_REGISTRATION_API, tech)
//       .then(data => {
//         console.log(data)
//         setToNext(true)
//       }).catch(err => {
//         console.log(err)
//       })
//   }
//   return (
//     <div className="from-Square">
//       <Form onSubmit={(e) => techOnSubmitHandler(e)}>
//         <h1>Register</h1>

//         <Form.Label>First Name</Form.Label>
//         <div><input class='Form.Control' type='text' type='text'
//           placeholder="Enter First Name "
//           name="firstName"
//           onChange={(e) => techChangeHandler(e)} /> </div>

//         <Form.Label>Last Name</Form.Label>
//         <div><input class='Form.Control' type='text' type='text'
//           placeholder="Enter Last Name "
//           name="lastName"
//           onChange={(e) => techChangeHandler(e)} /> </div>

//         <Form.Label>User Name</Form.Label>
//         <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>  Username</Form.Label>
//         <InputGroup>
//           <InputGroup.Prepend>
//             <InputGroup.Text>@</InputGroup.Text>
//           </InputGroup.Prepend>
//           <div><input class='FormControl' id="inlineFormInputGroupUsername"
//             id="inlineFormInputGroupUsername"
//             placeholder="Username"
//             name="username"
//             onChange={(e) => techChangeHandler(e)} /></div>
//         </InputGroup>

//         <Form.Group controlId="formBasicEmail" >
//           <Form.Label>Email address</Form.Label>
//           <div><input class='Form.Control' type="email" type="email"
//             placeholder="Enter email"
//             name="email"
//             onChange={(e) => techChangeHandler(e)} /></div>
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.</Form.Text>
//         </Form.Group>


//         <Form.Label>Image</Form.Label>
//         <div><input class='Form.Control'
//           type='text'
//           name="image"
//           onChange={(e) => techChangeHandler(e)}
//         /></div>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <div><input 
//           class='Form.Control' 
//           type="password" 
//           placeholder="Password" 
//           name="password" 
//           onChange={(e) => techChangeHandler(e)} /></div>
//         </Form.Group>

//         <Form.Label>IBNAN </Form.Label>
//         <div><input 
//         class='Form.Control' 
//         type='number' 
//         placeholder="100XXXXX " 
//         name="iban" 
//         onChange={(e) => techChangeHandler(e)} /> </div>

//         <Form.Group as={Col} controlId="formGridState">
//           <Form.Label>device Type</Form.Label>
//           <select class='Form.Control' as="select"  name="deviceType"
//             value="deviceType"
//              defaultValue="Choose..."
//               onChange={(e) => techChangeHandler(e)}>
//             <option>Computer</option>
//             <option>Phone</option>
//           </select>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridState">
//           <Form.Label>software Type</Form.Label>
//           <select class='Form.Control' as="select" name="softwareType"
//             value="softwareType"
//              defaultValue="Choose..." onChange={(e) => techChangeHandler(e)}>
//             <option>IOS</option>
//             <option>Android </option>
//           </select></Form.Group>

//         <Form.Group as={Col} controlId="formGridState">
//           <Form.Label>problemType</Form.Label>
//           <select class='Form.Control'
//           name="problemType"
//           value="problemType"
//            as="select" defaultValue="Choose..." onChange={(e) => techChangeHandler(e)}>
//             <option>Hardware </option>
//             <option>Software</option>
//           </select></Form.Group>

//         <Button style={{
//           color: 'black', backgroundColor: 'white', marginTop: "5%",
//           boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border: 'none', borderBottom: ' 1px solid white', width: '90%'
//           , margin: 'auto',
//         }} variant="primary" type="submit"  >
//           Submit </Button>
//         {toNext ? <Redirect to="/activate" /> : null}



//       </Form>
//     </div>
//   )

//
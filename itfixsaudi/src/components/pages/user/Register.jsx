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


    },
    validationSchema: Yup.object({
        firstName: Yup.string().max(10, 'Must be 10 characters or less').required('Required'),
            lastName: Yup.string()
            .max(10, 'Must be 10 characters or less')
            .required('Required'),
            username: Yup.string()
            .max(10, 'Must be 10 characters or less')
            .required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            image: Yup.string().min(10, 'Must be 10 characters or less')
            .required('Required'),
            password: Yup.string().required('No password provided.')
            .min(6, 'Password is too short - should be 6 chars minimum.'),   
            passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),    

    }),

    onSubmit: values  => {
        axios.post(process.env.REACT_APP_USER_REGISTRATION_API, values)
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

        
      

        <Button style={{color:'black', backgroundColor:'white', marginTop: "10%",
             boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border:'none',borderBottom:' 1px solid white' , width:'90%'
             } } variant="primary" type="submit"  >
            Submit </Button>

        {toNext ? <Redirect to="/activate" /> : null}

        <Link style={{color:'white'}} to="/singin/user">
            Already have an account? Sign in
       </Link>

    </form>
    </div>
)
}








// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import "./../../../css/Forms.css"
// import {Link, Redirect } from "react-router-dom"
// import axios from 'axios'
// import dotenv from "dotenv";

// dotenv.config();

// export default function Register() {

//     const [toNext, setToNext] = useState(false)


//     const [user, setUser] = useState({})


//     const userChangeHandler = (e) => {
//         let name = e.target.name
//         let value = e.target.value
//         setUser({ ...user, [name]: value })
//     }

//     const userOnSubmitHandler = (e) => {
//         e.preventDefault()
//         axios.post(process.env.REACT_APP_USER_REGISTRATION_API, user)
//             .then(data => {
//                 console.log(data)
//                 setToNext(true)
//             }).catch(err => {
//                 console.log(err)
//             })
//     }

//     return (
//         <div className="from-Square">

//         <Form onSubmit={(e) => userOnSubmitHandler(e)}>
//         <h1 style={{ textAlign: 'center' }}>Register</h1>

//             <Form.Label>First Name</Form.Label>
//             <div><input className='Form.Control '
//                 type='text'
//                 placeholder="Enter First Name "
//                 name="firstName"
//                 onChange={(e) => userChangeHandler(e)}
//             /></div>


//             <Form.Label>Last Name</Form.Label>
//             <div><input className='Form.Control '
//                 type='text'
//                 placeholder="Enter Last Name "
//                 name="lastName"
//                 onChange={(e) => userChangeHandler(e)}
//             /></div>

//             <Form.Label>username</Form.Label>
//             <div><input className='Form.Control '
//                 type='text'
//                 placeholder="Enter User Name "
//                 name="username"
//                 onChange={(e) => userChangeHandler(e)}
//             /></div>

//             <Form.Group controlId="formBasicEmail" >
//                 <Form.Label>Email address</Form.Label>
//                 <div><input className='Form.Control '
//                     type="email"
//                     name="email"
//                     placeholder="Enter email"
//                     onChange={(e) => userChangeHandler(e)}
//                 /></div>
//                 <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.</Form.Text>
//             </Form.Group>

//             <Form.Label>Image</Form.Label>
//             <div><input className='Form.Control '
//                 type='text'
//                 name="image"
//                 onChange={(e) => userChangeHandler(e)}
//             /></div>

//             <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <div><input className='Form.Control '
//                     type="password"
//                     placeholder="Password"
//                     name="password"
//                     onChange={(e) => userChangeHandler(e)}
//                 /></div>
//                 <Form.Text className="text-muted">
//                     Must be more than 6 characters long.</Form.Text>
//             </Form.Group>

//             <Button style={{color:'black', backgroundColor:'white', marginTop: "5%",
//                  boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border:'none',borderBottom:' 1px solid white' , width:'90%'
//                 , margin:'auto' } } variant="primary" type="submit"  >
//                 Submit </Button>

//             {toNext ? <Redirect to="/activate" /> : null}

//             <Link style={{color:'white'}} to="/singin/user">
//                 Already have an account? Sign in
//            </Link>

//         </Form>
//     </div>
// )
// }

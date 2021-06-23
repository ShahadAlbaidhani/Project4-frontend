
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import {Redirect ,useHistory} from 'react-router-dom'
import axios from 'axios'
import "./../../../css/Forms.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function TechProfileEdit(props) {
    const userinfo = props.location.state.user? props.location.state.user:""
    let history = useHistory()
    const [toNext, setToNext] = useState(false)
    const [user, setUser] = useState({})

    const formik = useFormik({
        initialValues: {
        firstName:'',
        lastName:'',
        image:'',
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
            image: Yup.string().min(10, 'Must be 15 characters or less')
            .required('Required'),
            iban:Yup.string().min(10, 'Must be 15 characters or less')
            .required('Required'),
            deviceType:Yup.string().required('Required'),
            softwareType:Yup.string().required('Required'),
            problemType:Yup.string().required('Required')
        

        }),

        onSubmit: values  => {
            axios.put(`/api/v1/technician/update/${userinfo._id}`,values)
                    .then(data => {
                        console.log(data)
                        setToNext(true)
                    }).catch(err => {
                        console.log(err.response)
                    })
            
           
        },       
    });

 

    return (
        <>
        {props&&

<div className="from-Square">

<form onSubmit={formik.handleSubmit}>
<h1 style={{ marginBottom:'10%'}}>Profile Edit</h1>
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




<label htmlFor="">IBAN </label>
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






<Button style={{color:'black', backgroundColor:'white', marginTop: "15%",
             boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border:'none',borderBottom:' 1px solid white' , width:'90%'
            }} onClick={() => history.push({ pathname: `/TechChangePassword`, state: {userinfo} })} variant='outlined'>
                    Change Password </Button>


<br />

   <Button style={{color:'black', backgroundColor:'white', marginTop: "10%",
             boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border:'none',borderBottom:' 1px solid white' , width:'90%'
            }}  variant="primary" type="submit" >
                Submit </Button>
           
                <br />
                {toNext ? <Redirect to='/TechnicianProfile' /> : null}


</form>

</div>
}
    </>
    )
}










































// import React from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import { useState } from 'react'
// import {Redirect ,useHistory} from 'react-router-dom'
// import axios from 'axios'
// import "./../../../css/Forms.css"

// export default function TechProfileEdit(props) {
//     const userinfo = props.location.state.user? props.location.state.user:""
//     let history = useHistory()
//     const [toNext, setToNext] = useState(false)
//     const [user, setUser] = useState({})

//     const changeUserHandler = (e) => {
//         let name = e.target.name
//         let value = e.target.value
//         setUser({ ...user, [name]: value })
//     }

//     const onSubmitHandler = (e) => {
//         e.preventDefault()
//         axios.put(`http://localhost:4000/api/v1/technician/update/${userinfo._id}`,user)
//                 .then((user) =>{
//                     console.log(user)
//                     setToNext(true)
//                 }
//                 ) .catch(err => {
//                 console.log(err.response)
//             })
//     }

//     return (
//         <>
//         {props&&

//         <div className="from-Square">

//          <Form onSubmit={onSubmitHandler}>
//          <Form.Label>Last Name</Form.Label>
//             <div><input className='Form.Control '
//                 type='text'
//                 placeholder="Enter Last Name "
//                 name="lastName"
//                 onChange={(e) => changeUserHandler(e)}
//             /></div>

//             <Form.Label>Image</Form.Label>
//             <div><input className='Form.Control '
//                 type='text'
//                 name="image"
//                 onChange={(e) => changeUserHandler(e)}
//             /></div>

           
//             <br/>
//             <Button style={{color:'black', backgroundColor:'white', marginTop: "5%",
//                  boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border:'none',borderBottom:' 1px solid white' , width:'90%'
//                 , margin:'auto' } } variant="primary" type="submit"  >
//                 Update </Button>

//                 <button class='button-Type' onClick={() => history.push({ pathname: `/TechChangePassword`, state: {userinfo} })} variant='outlined'><span class='fs-1' >Change Password</span> </button>
//             {toNext ? <Redirect to='/ProfilleUser/`${user._id}`' /> : null}
//         </Form> 
        
//             </div>
// }
//     </>
//     )
// }

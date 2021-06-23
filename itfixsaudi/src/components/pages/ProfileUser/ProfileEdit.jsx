import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import axios from 'axios'
import "./../../../css/Forms.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function ProfileEdit(props) {
    const userinfo = props.location.state.user ? props.location.state.user : ""
    let history = useHistory()
    const [toNext, setToNext] = useState(false)
    const [user, setUser] = useState({})

    const formik = useFormik({
        initialValues: {
            image: '',
            lastName: '',
            firstName: '',

        },
        validationSchema: Yup.object({
            image: Yup.string().required('Required'),
            firstName: Yup.string().required('Required').min(3, 'should be 4 chars minimum.'),
            lastName: Yup.string().required('Required').min(3, 'should be 4 chars minimum.'),

        }),

        onSubmit: values => {
            axios.put(`/api/v1/user/update/${userinfo._id}`, values)
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
            {props &&

                <div className="from-Square">

                    <form onSubmit={formik.handleSubmit}>
                        <h1 style={{ marginBottom: '10%' }}>Profile Edit</h1>
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

                        <label htmlFor="image">Image</label>
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

                        <Button style={{
                            color: 'black', backgroundColor: 'white', marginTop: "15%",
                            boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border: 'none', borderBottom: ' 1px solid white', width: '90%'
                        }} onClick={() => history.push({ pathname: `/UserChangePassword`, state: { userinfo } })} variant='outlined'>
                            Change Password </Button>

                        <br />

                        <Button style={{
                            color: 'black', backgroundColor: 'white', marginTop: "10%",
                            boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", Border: 'none', borderBottom: ' 1px solid white', width: '90%'
                        }} variant="primary" type="submit" >
                            Submit </Button>

                        <br />
                        {toNext ? <Redirect to='/UserProfile' /> : null}

                    </form>

                </div>
            }
        </>
    )
}













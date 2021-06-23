import React, { useEffect, useState } from 'react'
import '../../../css/TechnicianProfile.css'
import RequstOrder from './RequstOrder'
import axios from 'axios'
import { useHistory, Redirect } from "react-router-dom";

export default function TechnicianProfile({ user }) {

  let history = useHistory()
  const [toNext, setToNext] = useState(false)
  const [userinfo, setUserinfo] = useState({})

  const deleteUserProfile = () => {
    axios.delete(`/api/v1/technician/delete/${user._id}`)
      .then((data) => {
        console.log(data)
        setToNext(true)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    axios.get(`/api/v1/technician/${user._id}`)
      .then(data => {
        setUserinfo(data.data)
      }).catch(err => {
        console.log(err)
      })
  })

  return (
    <>
      <div>
      <div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="mt-5 mb-5" style={{ backgroundColor: "#353535", width: "20%", margin: "0 auto", color: "white", padding: "5px", borderRadius: "20px" }}>
              <img style={{ width: '100%', height: '310px', borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }} src={userinfo.image} />
              <div style={{ margin: "10px" }}>
                <h3 style={{ fontSize: "23px", marginBottom: "0px" }}>{userinfo.firstName} {userinfo.lastName}</h3>
                <h5 style={{ fontSize: "15px", color: "grey", marginTop: "0px" }}>@{userinfo.username} </h5>
                <hr />
                <h5>About</h5>
                <p><span style={{ marginRight: "3px", display: "inline" }} className="material-icons">mail_outline </span>{userinfo.email}</p>
                <hr />
                <h5>Skills</h5>
                <p>Device Type: {userinfo.deviceType}</p>
                <p>Software type: {userinfo.softwareType}</p>
                <p>Problem Type: {userinfo.problemType} </p>
                <div style={{margin:"25px", display:"flex", justifyContent:"flex-end"}}>
                  <button class="btn btn-light ml-5" type="button" onClick={() => history.push({ pathname: `/TechProfileEdit`, state: { user } })} variant='outlined'><span class='fs-1' >Update</span> </button>
                  <button className='task__btn task__btn--2' onClick={deleteUserProfile} class="btn btn-light ml-4" type="button"> delete
                  {toNext ? <Redirect to='/Home' /> : null}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

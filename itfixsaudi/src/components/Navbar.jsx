import React , { Component } from 'react'
import {useHistory} from "react-router-dom"
import logo from './../img/logo.png'
export default function Navbar(props) {

  const history = useHistory()

  const logOut = () => {
    localStorage.removeItem("token")
    props.loginFunction()
    history.push("/")

}
  return (
    <>

      <nav class=" navbar navbar-expand-lg navbar-light " >
        <img src={logo} style={{height:"100px", marginRight:"0px"}} />
        <a style={{ color: 'white', marginLeft:"0px" }} class="navbar-brand" href="/Home">ITFIXSUADI</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active" >
              <a style={{ color: 'white' }} class="nav-link" href="/Home">Home </a>
            </li>
            <li class="nav-item active" >
              <a style={{ color: 'white' }} class="nav-link" href="/servies">Services</a>
            </li>

            { props.isLogin ?
            <>
            { props.user && props.user?.problemType ?
              
            <li class="nav-item active">
              <a style={{ color: 'white' }} class="nav-link" href="/ListTechOrders">Orders</a>
            </li>
            :
            <li class="nav-item active">
            <a style={{ color: 'white' }} class="nav-link" href="/ListUserOrders">Orders</a>
          </li>
            }
            </>
          
            :
          ""
            }

          </ul>

          { !props.isLogin ? 
          <>
          <a style={{ margin: '1%' }} class="btn btn-outline-secondary " type="button" href="/singin">Sign In </a>
          <a class="btn btn-dark " type="button" href="/Register">Get Started </a>
          </>
          :
          <>
          { props.user && props.user?.problemType ?
          <a style={{ margin: '1%' }} class="btn btn-outline-secondary " type="button" href="/TechnicianProfile">Profile tech </a>  :
          <a style={{ margin: '1%' }} class="btn btn-outline-secondary " type="button" href="/UserProfile">Profile user </a>
          }
          <a 
        onClick={()=> logOut()}
        class="btn btn-outline-secondary " type="button" href="">Log Out </a>
          </>
          }

        </div>
      </nav>


    </>
  )
}


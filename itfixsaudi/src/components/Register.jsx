import React from 'react'
import { Helmet } from 'react-helmet';
import './../css/auth.css'


export default function Register() {
  return (

      <div className="div-auth" >
        <Helmet>
          <style>{'body { background-color:#fffff; }'}</style>
        </Helmet>
        <div className="item-div" >
          <a href="/Register/User"><h1>User</h1></a>

        </div>
        <div className="item-div " >

          <a href="/Register/Technician">
          
          <h1>Technician</h1></a>

        </div>
</div>
    )
}



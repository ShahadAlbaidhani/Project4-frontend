import React from 'react'
import Maillogo from "./../img/undraw_Mail_sent_re_0ofv.svg" 
export default function Activate() {
    return (
        <div class="container mt-5 mb-5 shadow" style={{width:"60%", backgroundColor:"#81929E", borderRadius:"20px"}}>
            <div class="row justify-content-center mt-5" style={{color:"white"}}>
                <div class="col-md-6" style={{textAlign:"center"}}>
                    <h1 style={{marginBottom:"20px",marginTop:"10px"}}>Activate Account</h1>
                    <img src={Maillogo} style={{height: "160px" ,width:"210px", margin:"5px"}} />
                    <p style={{fontSize:"15px", margin:"10px"}}>We’ve emailed you instructions for Activating you account, You should receive them shortly.</p>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default function HomeCol(props) {
  
  return (
    <div class='homepart3' >
      <h1  class="display-3" style={{ textAlign: 'center', marginTop: '20px', color:"#666363" }}>Why Us</h1>
     <h6 class="display-5" style={{ textAlign: 'center', marginTop: '20px', color:"#666363" }}>To better serve our customers we are offering expanded service options! Same great repairs, 
       same  great service. Where can we fix for you today?</h6>
      
<Row  style={{display:"flex" , justifyContent:"center"}}>

    <Col xs lg="2" style={{display:"flex" , flexWrap:"wrap", justifyContent:"center"}}>
    <img class="icon" src='https://www.svgrepo.com/show/211550/operator-support.svg'/>
     <h5 style={{color:"#666363"}}>Talk with technical experts</h5>
    </Col>
    
    <Col xs lg="2" >
    <img class="icon" src='https://www.svgrepo.com/show/298750/truck.svg'/>
    <h5 style={{color:"#666363"}}>We Come To You</h5>
    </Col>

    <Col xs lg="2">
    <img class="icon" src='https://www.svgrepo.com/show/298760/customize-construction-and-tools.svg'/>
    <h5 style={{color:"#666363"}}> Your Devices Repair </h5>
    </Col>
   
  </Row>



</div>
  );
}




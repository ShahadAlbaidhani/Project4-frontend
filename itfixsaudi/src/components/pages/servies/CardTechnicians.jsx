import React from 'react'
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import './../../../css/cards.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from "react-router-dom";


export default function CardTechnicians(props) {

    let history = useHistory();

    return (
        <div className="allcards">
        
    <CardGroup >
    
  <Card  className="aa">
    <Card.Body  className="onecard" >
 

<Row >
<Col md={4}>
{/* <Card.Img  style={{margin:'0' , borderRadius: '50%', width: '50%',height: '50%'}} className="cardImg" variant="top" src={props.Technician.link} /> */}
<Card.Img style={{ width: '120px',height: '100px'}} className="cardImg" variant="top" src={props.image} />

</Col>


<Col md={8}>
<a onClick={()=>history.push({ pathname: `/Order`,state: { tech :props.id}})} > 

<Card.Title >{props.firstName}</Card.Title>
<Card.Title ><h4>@{props.username}</h4></Card.Title>

</a>

</Col>


</Row>


    </Card.Body>
  </Card>

</CardGroup>


        </div>
    )
}
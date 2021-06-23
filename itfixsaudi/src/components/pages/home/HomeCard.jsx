import React from 'react'
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'


export default function HomeCard(props) {

  return (
    <div >
      <h1 class="display-3" style={{ textAlign: 'center', marginTop: '20px',color:"#666363" }}>What can we fix for you</h1>
      <div style={{ display: "flex", justifyContent: "center", margin:"30px", textAlign:"center"}}>

        <CardDeck style={{width:"40%"}}>

          <Card class='style_prevu_kit'>
            <Card.Img variant="top" src="https://www.svgrepo.com/show/3714/computer.svg" />
            <Card.Body>
              <Card.Title style={{color:"#666363"}} >Computer</Card.Title>

            </Card.Body>

          </Card>

          <Card>
            <Card.Img variant="top" src="https://www.svgrepo.com/show/61250/smartphone.svg" />
            <Card.Body>
              <Card.Title style={{color:"#666363"}}>Smart Phone</Card.Title>

            </Card.Body>

          </Card>
        </CardDeck>
      </div>

    </div>
  );
}




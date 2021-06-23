import React, { Component } from 'react'
import TextAnimation from 'react-animate-text';
import HomeCard from './HomeCard'
import HomeCol from './HomeCol'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
export class home extends Component {
    render() {
        return (
            <div>
                <div class='header' style={{paddingTop:"30px"}}>
                    <Container>
                <Row>

                        <Col>
                            <TextAnimation><main style={{ textAlign: 'center', marginTop: '5%' }}>
                                <h1 class="display-1" style={{ textAlign: 'center' }}>Welcome </h1>
                                <span class="display-8" >HERE WHEN YOU NEED US</span>
                                <div>
                                    <div>
                                        <div>
                                            <span>Register and lets get started!</span>
                                        </div>
                                    </div>
                                </div>
                            </main></TextAnimation>
                        </Col>
                        <Col>
                            <img src='https://d1pspl52z5rk07.cloudfront.net/assets/production/app/frontpage/header-image-f6c2f70588465a1659b7de2fb2fcf78556e67287b3774ba3caf45c02871064ac.svg' />
                        </Col>
                        </Row>
                        </Container>
                </div>


 <HomeCard />

 <HomeCol />


            </div>
        )
    }
}

export default home

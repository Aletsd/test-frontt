import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {isMobile} from 'react-device-detect';
import * as Icon from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



export default class CardDescription extends React.Component{

    
    render(){
        if (isMobile) {
            return(
                <Container>
                    <Row  className="text-center">
                        <Col className="header-card">
                            <Image src="https://i.ibb.co/m6j6LRs/prfile-pic.png" roundedCircle  />                    
                        </Col>
                    </Row>
                    <Row  className="text-center body-card">
                        <Col xs={12}>                            
                            <h3>Harry Potter</h3>   
                        </Col>
                        <Col xs={6} className="description-card">                            
                            <p>VIVO ESTUDIANTE</p>   
                        </Col>
                        <Col xs={6} className="description-card">                            
                            <p><Icon.Bookmark size={40}/></p>     
                        </Col>
                    </Row>
                </Container>
    
            );
        }
        return(            
            
            <Container>
                    <Row  className="text-center">
                        <Col className="header-card" xs={4}>
                            <Image src="https://i.ibb.co/m6j6LRs/prfile-pic.png" roundedCircle  />                    
                        </Col>
                        <Col className="body-card" xs={8}>    
                            <Row  className="text-center body-card">
                            
                                <Col xs={6} className="description-card-desk">                            
                                    <p>VIVO / ESTUDIANTE</p>   
                                </Col>
                                <Col xs={6} className="description-card-desk">                            
                                    <p><Icon.Bookmark size={16}/></p>     
                                </Col>

                                <Col xs={12} >                            
                                    <h5>Harry Potter</h5>    
                                </Col>
                            </Row>                        
                             
                        </Col>
                    </Row>
                    
                </Container>

        );
    }
    
}
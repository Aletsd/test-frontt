import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {isMobile} from 'react-device-detect';
import * as Icon from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



export default class CardDescription extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        if (isMobile) {
            return(
                <Container>
                    <Row  className="text-center">
                        <Col className="header-card-movil">
                            <Image src={this.props.image} roundedCircle  />                    
                        </Col>
                    </Row>
                    <Row  className="text-center body-card-movil">
                        <Col xs={12}>                            
                            <h3>{this.props.name}</h3>   
                        </Col>
                        <Col xs={6} className="description-card">                            
                            <p>{this.props.living ? "VIVO" : "FINADO"} {this.props.rol ? 'ESTUDIANTE': 'STAFF'}</p>   
                        </Col>
                        <Col xs={6} className="description-card">                            
                            <p><Icon.Bookmark size={40}/></p>     
                        </Col>
                    </Row>
                </Container>
                
    
            );
        }
        return(            
            
            <Container >
                    <Row  className="text-center ">
                        <Col  
                        style={{
                            backgroundColor: () => {
                                switch (this.props.house) {
                                case "Gryffindor":   return "#FF0000";
                                case "Hufflepuff": return "#0597B7";
                                case "Ravenclaw ":  return "#FFC700";
                                case "Slytherin ":  return "#1C792B";
                                default:      return "#1C792B";
                                }
                            }
                         }}
                         className='header-card'
                         xs={4}>
                            <Image src="https://i.ibb.co/m6j6LRs/prfile-pic.png" roundedCircle fluid />                    
                        </Col>
                        <Col className="body-card" xs={8}>    
                            <Row  className="text-center body-card">
                            
                                <Col xs={10} className="description-card-desk">                            
                                    <p>{this.props.living ? "VIVO" : "FINADO"} / {this.props.rol ? 'ESTUDIANTE': 'STAFF'}</p>   
                                </Col>
                                <Col xs={2} className="description-card-desk">                            
                                    <p><Icon.Bookmark size={16}/></p>     
                                </Col>

                                <Col xs={12} >                            
                                    <h5>{this.props.name}</h5>    
                                </Col>
                                <Col xs={12} className="text-start">                            
                                    <p><b>Cumpleaños:</b> {this.props.age}</p>  
                                    <p><b>Género:</b>  {this.props.gender}</p>
                                    <p><b>Color de ojos:</b>  {this.props.colorEyes}</p>
                                    <p><b>Color de pelo:</b>  {this.props.colorHair}</p> 
                                    
                                </Col>
                            </Row>                        
                             
                        </Col>
                    </Row>
                    
                </Container>

        );
    }
    
}
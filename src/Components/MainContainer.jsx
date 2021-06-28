import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MenuContainer from './MenuContainer';
import FilterContainer from './FilterContainer';

export default class MainContainer extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        
        return(
            <Jumbotron>
                
                <Container>
                    <MenuContainer></MenuContainer>
                    <Row className="text-center">
                        <Col xs={3}></Col>
                        <Col xs={6}>
                            <Image src="https://i.ibb.co/9gHC0nk/logo.png" fluid />
                        </Col>
                        <Col xs={3}></Col>
                    </Row>
                    <Row className="text-center text-select">
                        <Col>
                            <h1>Selecciona tu filtro</h1>
                        </Col>
                    </Row>
                    
                    
                </Container>
                
                <FilterContainer></FilterContainer>
               
            </Jumbotron>
            
            
        );
    }
}
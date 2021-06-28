import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDescription from './CardDescription';

function handleClick() {
    console.log('Button click ...');
}

export default class FilterContainer extends React.Component{

    

    render(){        
        return(
            <Container>
                <Row  className="text-center">
                
                <Col xs={6} className="point" onClick={handleClick}><h2 className="filter">ESTUDIANTES</h2></Col>
                <Col xs={6} className="point"><h2 className="filter">STAFF</h2></Col>
                </Row>
                <hr/>
                <Row  className="text-center">
                <Col xs={6}>
                 <CardDescription></CardDescription>
                </Col>
                </Row>
            </Container>

        );
    }
}
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDescription from './CardDescription';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const FilterContainer = () =>{

    
    const [stack, setStack]  = useState([]);
    const [opc, setOpc]  = useState();
    const [show, setStateShow]  = useState(false);
           
    return (
        
        <Container>
            
            <Row  className="text-center">
            
            <Col xs={6} className="point" ><h2 className="filter" onClick={() => {
                fetch('http://localhost:3002/gryffindor')
                .then(response => response.json())
                .then(result => {setStack(result)})
                .then(setOpc(true));
            }} >ESTUDIANTES</h2></Col>
            <Col xs={6} className="point" ><h2 className="filter" onClick={() => {
                fetch('http://localhost:3002/gryffindor')
                .then(response => response.json())
                .then(result => {setStack(result)})
                .then(setOpc(false));
            }} >STAFF</h2></Col>
            
            </Row>
            <hr/>
            <Row  className="text-center">
            
            {
                React.Children.toArray(
                    stack.map((item, i) => 
                    (opc === item.hogwartsStudent ) ? 
                    <Col xs={6}>
                        <CardDescription 
                        name={item.name}
                        image={item.image}
                        living={item.alive}
                        rol={item.hogwartsStudent}
                        age={item.dateOfBirth}
                        gender={item.gender}
                        colorEyes={item.eyeColour}
                        colorHair={item.hairColour}
                        house={item.house}
                        ></CardDescription>
                        <p>{opc}</p>
                    </Col>
                    :
                    ''
                )
                )
            }  
            
            </Row>
                <Modal show={show} onHide={() => setStateShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setStateShow(false)}>
                            Close
                        </Button>
                            <Button variant="primary" onClick={() => setStateShow(true)}>
                                Save Changes
                        </Button>
                    </Modal.Footer>
			    </Modal>
        </Container>

    )
    
}

export default FilterContainer;
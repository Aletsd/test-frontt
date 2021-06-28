import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import MenuContainer from './MenuContainer';

export default class MainContainer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Jumbotron>
                <Container>
                    <MenuContainer></MenuContainer>
                </Container>
            </Jumbotron>
        );
    }
}
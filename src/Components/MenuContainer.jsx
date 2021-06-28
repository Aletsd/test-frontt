import React from 'react';
import Button from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Media from 'react-bootstrap/Media';
import {isMobile} from 'react-device-detect';
import * as Icon from 'react-bootstrap-icons';


export default class MenuContainer extends React.Component{

    render(){
        if (isMobile) {
            return (
                <ButtonToolbar aria-label="Basic example" className="btn_nav" id="MenuMovil">
                <Button variant="secondary" className="btn_left_movil">                    
                    <Media>
                        <Media.Body>
                            <h2>FAVORITOS  <Icon.BookmarkFill size={50}/></h2>                            
                        </Media.Body>                        
                    </Media>
                </Button>
                <div className="divider"/>
                <Button variant="secondary" className="btn_right_movil">
                    <Media>
                        <Media.Body>
                            <h2>AGREGAR <Icon.PersonPlusFill size={50}/></h2>                            
                        </Media.Body>                        
                    </Media>                    
                </Button>
            </ButtonToolbar>
            );
        }
        return(
            
            <ButtonToolbar aria-label="Basic example" className="btn_nav" id="MenuDesktop">
                <Button variant="secondary" className="btn_left">                    
                    <Media>
                        <Media.Body>
                            <h5>FAVORITOS</h5>                            
                        </Media.Body>                        
                    </Media>
                </Button>
                <div className="divider"/>
                <Button variant="secondary" className="btn_right">
                    <Media>
                        <Media.Body>
                            <h5>AGREGAR</h5>                            
                        </Media.Body>                        
                    </Media>                    
                </Button>
            </ButtonToolbar>

        );
    }
}
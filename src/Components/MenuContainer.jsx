import React from 'react';
import Button from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Media from 'react-bootstrap/Media';
import {isMobile} from 'react-device-detect';
import * as Icon from 'react-bootstrap-icons';

import addCharacter from './addCharacter';



const MenuContainer = () => {
    const [show, setStateShow]  = useState(false);

    if (isMobile) {
        return (
            <ButtonToolbar aria-label="Basic example" className="btn_nav" id="MenuMovil">
            <Button variant="secondary" className="btn_left_movil">                    
                <Media>
                    <Media.Body>
                        <h3>FAVORITOS  <Icon.BookmarkFill size={50}/></h3>                            
                    </Media.Body>                        
                </Media>
            </Button>
            <div className="divider"/>
            <Button variant="secondary" className="btn_right_movil">
                <Media>
                    <Media.Body>
                        <h3>AGREGAR <Icon.PersonPlusFill size={50}/></h3>                            
                    </Media.Body>                        
                </Media>                    
            </Button>
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
        </ButtonToolbar>

    );
}



export default addCharacter;
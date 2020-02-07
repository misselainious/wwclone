import React, { Component } from "react";
import {  Divider, Image, Segment, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class Pato extends Component {
    render() {
        return (
            <div>
                    <Divider style={{marginTop:"50px"}} />
                    <Image centered src={"../images/group/acote.png"} size='big' />
                    <Segment centered attached style={{ textAlign:"center"}} color='violet'>A happy evening with Fílipa Pato and Willem Wouters at À Côté.</Segment>
                    <Divider hidden />
                    <Link to="/producerdetails/Fílipa%20Páto" >
                    <Button basic color='violet' content='Violet'>Check out Fílipa's wines here</Button>
                    </Link>
            </div>
        );
    }
}

export default Pato;


import React, { Component } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
// import "./AllProducersBtn.css"

const scrollToTop = () => { window.scroll(0,0)};

class AllProdBtn extends Component {
    render() {
        return (
            <Grid.Row>
            <Link to="/producers" onClick={scrollToTop}>
                <Button className="allProdBtn" icon labelPosition='left' > 
                <Icon name='arrow circle left' />        
                All Producers
                </Button>
                </Link>
            </Grid.Row>
        );
    }
}

export default AllProdBtn;
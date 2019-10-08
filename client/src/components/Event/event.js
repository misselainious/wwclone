import React, { Component } from "react";
import { Button, Header, Icon, Segment, Advertisement, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import './event.css';

const Event = () => (
    <div style= {{ marginTop: '100px'}}>
    <Segment inverted color='grey' attached ='top'> 
    <Link to="/producerdetails/Aldinger" >
        <Header className='toplinked'  style= {{ display: 'inline'}}>WineWise Welcomes Aldinger! </Header>
        </Link>
    </Segment>

    <Segment attached className='chosenProducers'>
        <Image src="../images/group/GAL.png" size='large' centered style={{ marginTop: '20px'}}/>
    </Segment>
    <Segment className="bottom" attached='bottom'>
        The newest addtion to our German portfolio
    </Segment>
  </div>
)

export default Event
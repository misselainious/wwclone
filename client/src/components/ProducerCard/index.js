import React from 'react'
import { Link } from "react-router-dom";
import { Card } from 'semantic-ui-react'
import "./index.css";

const Producercard = (props) => {
  return (
    <Link to={"/producerdetails/" + props.id}>
<Card className="prodcard" style={{height: '100px', margin:"10px"}}>
    <Card.Content>
      <Card.Header>{props.producer} {props.header}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.country} <br/> {props.region}</span>
      </Card.Meta>
      <Card.Description> 
      {props.producer.country}
        
      </Card.Description>
    </Card.Content>
</Card>
</Link> 
  )
}

export default Producercard

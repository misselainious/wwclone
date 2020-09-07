import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { Card, Image, Header, Table } from 'semantic-ui-react'
import {Moon, Female, Leaf, Sun, New} from '../../components/Labels/Labels'
import "./NewWineCard.css";


class NewWinecard extends Component {

  defaultSrc(ev){
    ev.target.src = '../../images/StockRED.png'
  }

render(){

  return(
    <Link to={"/details/" + this.props.wineid} >
  
    <Card className="card" >

    {/* <Image onError={this.defaultSrc} className="cardImage" src={`https://s3.us-west-1.wasabisys.com/wwassets/bottles/${this.props.Code}.png`}/> */}

  
 {/* CORNER LABELS */}

  {/* { ((this.props.farming === "Organic") || (this.props.farming === "Certified Organic" )) && <Leaf />}
  { ((this.props.farming === "Bio-dynamic") || (this.props.farming === "Certified Bio-dynamic" )) && <Moon />}
  { this.props.farming === "HEV" && <Sun />}
  { this.props.female === "Female Winemaker"  && <Female />}
  { this.props.new === "Yes" && <New />} */}


      <Card.Content style={{textAlign: "center"}}>
        <Card.Header className='cardHeader'>{this.props.producer} </Card.Header>
        <Card.Header className='cardHeader'>{this.props.header}</Card.Header>
        <Card.Meta className='cardData'>
          <span>{this.props.region}, {this.props.country}</span>
          <span>{this.props.color}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    </Link> 
  )
}

 
}
export default NewWinecard



import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'
// import {Moon, Female, Leaf, Sun, New} from '../../components/Labels/Labels'
import "./Winecard.css";


class Winecard extends Component {

  defaultSrc(ev){
    ev.target.src = '/images/StockRED.png'
  }

render(){

  return(
    <Link to={"/details/" + this.props.wineid} >
  
    <Card className="card" >

    <Image onError={this.defaultSrc} className="cardImage" src={`https://winewiseassets.s3-us-west-1.amazonaws.com/${this.props.Code}.png`}/>

  
 {/* CORNER LABELS */}

  {/* { ((this.props.farming === "Organic") || (this.props.farming === "Certified Organic" )) && <Leaf />}
  { ((this.props.farming === "Bio-dynamic") || (this.props.farming === "Certified Bio-dynamic" )) && <Moon />}
  { this.props.farming === "HEV" && <Sun />}
  { this.props.female === "Female Winemaker"  && <Female />}
  { this.props.new === "Yes" && <New />} */}


      <Card.Content style={{textAlign: "center"}}>
        <Card.Header className='cardHeader'>{this.props.producer} {this.props.header}</Card.Header>
        <Card.Meta className='cardData'>
          <span>{this.props.region}, {this.props.country}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    </Link> 
  )
}

 
}
export default Winecard



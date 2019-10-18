import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import {
    Button,
    Divider,
    Grid,
    Header,
    Image

} from 'semantic-ui-react';
// import { createCipher } from "crypto";


class Feature extends Component {
  state = {
    wines: []
  };
  //onload we get all the wine and producer data


  componentDidMount() {
    
    this.loadWines();
  }
  loadWines = () => {
    API.featureWine()
      .then(res => {
        this.setState({ wines: res.data })
      }
      )
      .catch(err => console.log(err));
  };

  defaultSrc(ev){
    ev.target.src = '../../images/StockRED.png'
  }

  render() {
    let description;
    let wineName;
    let code;
    let pageLink;
    if (this.state.wines.length > 0){
        description = this.state.wines[0].WineWise_Notes;
        wineName = this.state.wines[0].Wine;
        code = this.state.wines[0].Code;
        pageLink = this.state.wines[0]._id;
    }
    return (
     


        <Grid.Column width={4}>
        <Divider
          as='h2'
          className='header'
          horizontal
          style={{ color: '#962d2d', margin: '1em 0em', textTransform: 'uppercase' }}>
          FEATURED WINE
        </Divider>
        
          <Header as='h3' style={{ fontSize: '1.5em' }}>
          {wineName}
          </Header>
          <p style={{ fontSize: '1em' }}>
          {description}
          </p>
    
         <Grid.Column floated='right' width={6}>
          <Image style={{marginLeft:'auto', marginRight:'auto' }} bordered rounded size='medium'onError={this.defaultSrc} className="cardImage" src={`https://s3.us-west-1.wasabisys.com/wwassets/bottles/${code}.png`} />
          <Link to={"/details/" + pageLink} >
            <Button className="seeAllWinesBtn" style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto', color: '#962d2d', marginTop:'15px' }} size='small'>
            <p className="seeAllWinesText">View Wine</p>
            </Button>
           </Link>
         </Grid.Column>
        
        <br />
    
        </Grid.Column>


    );
  }
}

export default Feature;
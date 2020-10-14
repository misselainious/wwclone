import React, { Component } from "react";
import API from "../../utils/API";
import Winecard from "../WineCard/index.js"
import { Grid, Divider, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";


class Justin extends Component {
  state = {
    wines: []
  };
  //onload we get all the wine and producer data


  componentDidMount() {
    
    this.loadWines();
  }
  loadWines = () => {
    API.newWines()
      .then(res => {
        this.setState({ wines: res.data })
      }
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
     


<Grid doubling centered columns={4}>

        <Grid.Row>
      
        <Divider
                        as='h2'
                        className='header'
                        horizontal
                        style={{ color: '#962d2d', margin: '1em 0em', textTransform: 'uppercase' }}>
                          <i class="ship icon" style={{ color: '#2f3623'}}></i>
                     JUST ARRIVED!
                    </Divider>
      </Grid.Row>

      <Grid.Row>

      
                    {this.state.wines.map(wine => (
                      <div>
                      <Winecard header={wine.Wine} region={wine.Region} producer={wine.Producer} country={wine.Country} wineid={wine._id} key={wine._id} url={wine.URL} Code={wine.Code} />
                      <Link to= {'/producerdetails/'+ wine.Producer}>
                      <Button>View {wine.Producer}'s Page</Button>
                      </Link>
                      </div>
                    ))}
      </Grid.Row>
                  </Grid>


    );
  }
}

export default Justin;
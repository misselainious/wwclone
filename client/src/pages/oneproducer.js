import React, { Component } from "react";
import API from "../utils/API";
import { Grid, Table, List, Header, Responsive, Segment, Embed} from "semantic-ui-react";
import Winecard from "../components/WineCard"
import OneProdBtn from "../components/AllProducersBtn/index"
// import Press from "../components/Press/press"
import Fouet from "../components/Fouet/fouet"

class OneProducer extends Component {
  state = {
    producer: {},
    wines: [],
    press: []
  };
  removeUnderscores(myString){
    return myString.split("_").join(" ")
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    API.getProducer(this.props.match.params.id)
      .then(res => this.setState({ producer: res.data, press: res.data.Press }))
      .then(   
    API.getWines()
      .then(res => {
        let data = res.data
        data = data.filter((item) => item.Producer === this.state.producer.Producer)
        this.setState({ wines: data })
      })
      )
      .catch(err => console.log(err))
  }


render() {
    const { producer } = this.state;
    delete producer._id
    const producerObjKeys = Object.keys(producer).filter(key => key!=='URL');
    let producerWines = this.state.wines

    // let returnWines = producerWines.filter(this.state.producer.Producer === this.state.wines.Producer)

    return (
<div>
{/* FOR MOBILE: */}

<Responsive maxWidth={767}>
 <Grid centered>
   <Grid.Row>
   <Grid.Column>
      <Header as='h1' style={{color: '#510409', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "10px", paddingBottom: "10px"}} >
      {this.state.producer.Producer}
      </Header>
    </Grid.Column>
   </Grid.Row>

   <Grid.Row centered>
    <Grid.Column width={14}>
     <Segment padded style={{backgroundColor: "#e6eae5"}}>
            {this.state.producer.List_Notes}
     </Segment>
    </Grid.Column>
   </Grid.Row>

   <Grid.Row>
    <Grid.Column width={13}>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">About the Estate</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
         <Table.Body>

       
        {
            producerObjKeys.map(key => 
                    producer[key] && key !== 'List_Notes' && key !== 'Order' && key !== 'Press' && key !== 'Female' && key !== 'YouTube' &&<Table.Row key={key}>
                        <Table.Cell>{this.removeUnderscores(key)}</Table.Cell>
                        <Table.Cell>{producer[key]}</Table.Cell>
                    </Table.Row>
            )
        }
         </Table.Body>
       </Table>
    </Grid.Column>

{(producerWines.length === 0) ? <div></div> : 
 <Grid.Column width={10}>
    <Header as='h3' style={{marginTop:'20px'}}>{this.state.producer.Producer}'s Wines</Header>
  <Grid.Row>
   <Grid.Column width={8}>
        {producerWines.length ? (
            <List >
              <Grid >
                <Grid.Row columns={3}>
                  {producerWines.map(wine => (
                    // <Winecard header={wine.Wine} producer={wine.Producer} region={wine.Region} country={wine.Country} wineid={wine._id} key={wine._id} url={wine.URL} />
                    <Winecard header={wine.Wine} region={wine.Region}  country={wine.Country} wineid={wine._id} key={wine._id} url={wine.URL} Code={wine.Code} closure={wine.Closure} producer={wine.Producer}  farming={wine.Farming_practices} female={wine.Female_Winemaker}/>
                  
                  ))}
                </Grid.Row>
              </Grid>
            </List>
            ) : (
                <h3>{this.state.isLoading ? "loading..." : "No results to display"}</h3>
              )}

  </Grid.Column>
  </Grid.Row>
 </Grid.Column>
}
</Grid.Row>

{ this.state.producer.YouTube &&
  <Grid.Row width={15}>
      <Grid.Column width={14}>
      <Embed
    id={this.state.producer.YouTube}
    placeholder={'https://img.youtube.com/vi/'+ this.state.producer.YouTube + '/0.jpg'}
    source='youtube'
  />
      </Grid.Column>
    </Grid.Row>
    }

{ (this.state.producer.Producer === "Dom. Fouet") &&
<Grid.Row>
<Grid.Column width={15} style={{ backgroundColor: '#f0f2ed', paddingBottom: "40px"}} >
  <Header as="h3" style={{ color: '#634b06', backgroundColor: '#f0f2ed', textAlign: 'center', paddingTop: "20px"}}>Hiram's 2019 tasting visit to with Julien Fouet conducted on a traditional flat-bottomed Loire boat, steered by the boat-maker - one of only two left making them.</Header>
<Fouet />
</Grid.Column>
</Grid.Row>

}

{/* Press Section */}
{/* { this.state.press && 
  <Grid.Row>
    <Grid.Column width={10}>
    <Press />
    </Grid.Column>
    
  </Grid.Row>
  } */}


 </Grid>
</Responsive>

{/* FOR DESKTOP: */}
<Responsive minWidth={768}>
  <Grid style={{marginTop: "40px", marginBottom: "40px", marginLeft: "20px", marginRight: "20px"}}>
    
   <Grid.Row>
    <Grid.Column>
      <Header as='h1' style={{color: '#510409', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "40px", paddingBottom: "40px"}} >
      {this.state.producer.Producer}
      </Header>
    </Grid.Column>
   </Grid.Row>

   <Grid.Row centered>
    <Grid.Column width={10}>
     <Segment padded='very' style={{backgroundColor: "#e6eae5"}}>
            {this.state.producer.List_Notes}
     </Segment>
    </Grid.Column>
   </Grid.Row>

   <Grid.Row>
    <Grid.Column width={8}>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">About the Estate</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
         <Table.Body>
        {
            producerObjKeys.map(key => 
                    producer[key] && key !== 'List_Notes' && key !== 'Order' && key !== 'Press' && key !== 'YouTube' && key !== 'Female'&& <Table.Row key={key}>
                        <Table.Cell>{this.removeUnderscores(key)}</Table.Cell>
                        <Table.Cell>{producer[key]}</Table.Cell>
                    </Table.Row>
            )
        }
         </Table.Body>
       </Table>
    </Grid.Column>

{(producerWines.length === 0) ? <div></div> : 

 <Grid.Column width={8}>
    <Header as='h3'>{this.state.producer.Producer}'s Wines</Header>
  <Grid.Row>
   <Grid.Column width={8}>
        {producerWines.length ? (
            <List >
              <Grid >
                <Grid.Row columns={3}>
                  {producerWines.map(wine => (
                    <Winecard header={wine.Wine} producer={wine.Producer} region={wine.Region} country={wine.Country} wineid={wine._id} Code={wine.Code} key={wine._id} url={wine.URL} />
                  ))}
                </Grid.Row>
              </Grid>
            </List>
            ) : (
                <h3>{this.state.isLoading ? "loading..." : "No results to display"}</h3>
              )}

  </Grid.Column>
  </Grid.Row>
{ this.state.producer.YouTube &&
  <Grid.Row width={12}>
      <Grid.Column width={6}>
      <Embed
    id={this.state.producer.YouTube}
    placeholder={'https://img.youtube.com/vi/'+ this.state.producer.YouTube + '/0.jpg'}
    source='youtube'
  />
      </Grid.Column>
    </Grid.Row>
    }

 </Grid.Column>

}

</Grid.Row>
         
{/* <OneProdBtn /> */}

{/* Press Section */}
{/* { this.state.press && 
<Grid.Row>
  <Grid.Column width={10}>
  <Press />
  </Grid.Column>
  
</Grid.Row>
} */}

{ (this.state.producer.Producer === "Dom. Fouet") &&
<Grid.Row>
<Grid.Column width={10} style={{ backgroundColor: '#f0f2ed', paddingBottom: "40px"}} >
  <Header as="h3" style={{ color: '#634b06', backgroundColor: '#f0f2ed', textAlign: 'center', paddingTop: "20px"}}>Hiram's 2019 tasting visit to with Julien Fouet conducted on a traditional flat-bottomed Loire boat, steered by the boat-maker - one of only two left making them.</Header>
<Fouet />
</Grid.Column>
</Grid.Row>

}

    </Grid>
    </Responsive>   

</div>
    );
  }
}

export default OneProducer;

import React, { Component, createRef } from "react";
// import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { Grid, Card, Header, Segment, Dimmer, Loader } from "semantic-ui-react";
import Producercard from "../components/ProducerCard";
import CountryDropdown from "../components/CountryDropdown/countryDropdown";


class Producers extends Component {

contextRef = createRef()

    state = {
      Producers: [],
      isLoading: true
    };
  
    componentDidMount() {
      window.scrollTo(0, 0)
      this.loadProducers();
    }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

    loadProducers = () => {

      window.scrollTo(0,0);
      API.getProducers()
      .then(res => 
        this.setState({Producers: res.data, isLoading: false})
        )
        .catch(err => console.log(err));
    }



  // loadProducers = () => {
  //   this.setState({
  //     isLoading: true
  //   })
  //   API.getProducers()
  //     .then(res => {
  //       //The World's least efficient way of alphabetizing an array of objects
  //       let idArray=[];
  //       res.data.map( producer => {idArray.push(producer.Producer)})
  //       idArray.sort()
  //       let alphabeticalProducers = []
  //       idArray.map( id => {
  //         alphabeticalProducers.push( res.data.find( (producer)=>{ return producer.Producer === id } ))
  //       })
  //       this.setState({ Producers: alphabeticalProducers })
  //     }
  //     )
  //     .catch(err => console.log(err));
  // };
  
render() {
 let france = this.state.Producers.filter(p => p.Country === "France");
 let spain = this.state.Producers.filter(p => p.Country === "Spain");
 let portugal = this.state.Producers.filter(p => p.Country === "Portugal");
 let greece = this.state.Producers.filter(p => p.Country === "Greece");
 let germany = this.state.Producers.filter(p => p.Country === "Germany");
 let austria = this.state.Producers.filter(p => p.Country === "Austria");

 // Function sorts each country by the 'Order' Column, because it is not necessarily alphabetical.
 function compare(a,b){
   const numA = a.Order;
   const numB = b.Order;

   let comparison = 0;
   if(numA > numB){
     comparison = 1;
   } else if (numA < numB){
     comparison = -1
   }
   return comparison
 }

 france = france.sort(compare);
 spain = spain.sort(compare);
 portugal = portugal.sort(compare);
 greece = greece.sort(compare);
 germany = germany.sort(compare);
 austria = austria.sort(compare);

 



    return (
        <Grid centered style={{marginTop: "40px", marginBottom: "40px"}}>

        <Grid.Row>
      <Grid.Column>
        <Header as='h1' textAlign='right' style={{color: '#510409', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "40px", paddingBottom: "40px"}} >
      Our Producers
    </Header>
    </Grid.Column>
        </Grid.Row>

    <Grid.Row>
      <Grid.Column width={11}>
    <center>
      <p style={{fontSize: '1.1em'}}>
      We seek wines of character from people we like and places which are not always well-known or popular. We are not averse to the classics, but we are not scared of the obscure. Our wines do not have to meet any ideological litmus test, but we do have to like them. If they are grown organically it does not hurt, but we don’t insist on it. While we have a number of sought-after and expensive wines in our portfolio, our animating force is the acquisition of great wines that almost anyone can afford to drink – a rather more exacting discipline than the converse. Above all, we like people. Our growers tend to be interesting and often amusing people, sometimes with a spiritual bent, sometimes unrepentantly earthy. We have watched with pleasure as the sons and daughters we knew as babies and children have grown up to be the proprietors of their parents’ estates. We like to think of ourselves as the link between these friends and the people drinking their wines in restaurants or at home.
      </p>
              {/* <SearchProducers /> */}
            </center>
            </Grid.Column> 
    </Grid.Row>

      <CountryDropdown />
      
    <Grid.Row style={{marginTop: '20px'}}>
  
    </Grid.Row>

{this.state.isLoading ?
  <Dimmer active inverted>
  <Loader inverted>Loading... </Loader>
</Dimmer>
: (
  <Grid centered>


{/* FRANCE */}
<Grid.Row id='france'>
  <Grid.Column>
<Header as='h1' textAlign='right' style={{color: '#221244', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "20px", paddingBottom: "20px"}} >
      France
    </Header>
    </Grid.Column>
</Grid.Row>

    <Grid.Row>

<Grid.Column width={12}>
        {france.length ? (
          
            <Card.Group itemsPerRow={4}>
          {france.map(producer => (
              <Producercard id={producer.Producer} producer={producer.Producer} country={producer.Country} subregion={producer.Subregion} region={producer.Region} key={producer._id}/>            
          ))}
        </Card.Group>
            ) : (
              <h3> "No results to display"</h3>
            )}
            </Grid.Column>
          
            </Grid.Row>

{/* SPAIN */}
<Grid.Row id='spain'>
  <Grid.Column>
<Header as='h1' textAlign='right' style={{color: '#221244', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "20px", paddingBottom: "20px"}} >
      Spain
    </Header>
    </Grid.Column>
</Grid.Row>

    <Grid.Row>

<Grid.Column width={12}>
        {spain.length ? (
          
            <Card.Group itemsPerRow={4}>
          {spain.map(producer => (
              <Producercard id={producer.Producer} producer={producer.Producer} country={producer.Country} subregion={producer.Subregion} region={producer.Region} key={producer._id}/>            
          ))}
        </Card.Group>
            ) : (
              <h3> "No results to display"</h3>
            )}
            </Grid.Column>
          
            </Grid.Row>


{/* PORTUGAL */}
<Grid.Row id='portugal'>
  <Grid.Column>
<Header as='h1' textAlign='right' style={{color: '#221244', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "20px", paddingBottom: "20px"}} >
      Portugal
    </Header>
    </Grid.Column>
</Grid.Row>

    <Grid.Row>

<Grid.Column width={12}>
        {portugal.length ? (
          
            <Card.Group itemsPerRow={4}>
          {portugal.map(producer => (
              <Producercard id={producer.Producer} producer={producer.Producer} country={producer.Country} subregion={producer.Subregion} region={producer.Region} key={producer._id}/>            
          ))}
        </Card.Group>
            ) : (
              <h3> "No results to display"</h3>
            )}
            </Grid.Column>
          
            </Grid.Row>

{/* GREECE */}
<Grid.Row id='greece'>
  <Grid.Column>
<Header as='h1' textAlign='right' style={{color: '#221244', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "20px", paddingBottom: "20px"}} >
      Greece
    </Header>
    </Grid.Column>
</Grid.Row>

    <Grid.Row>

<Grid.Column width={12}>
        {greece.length ? (
          
            <Card.Group itemsPerRow={4}>
          {greece.map(producer => (
              <Producercard id={producer.Producer} producer={producer.Producer} country={producer.Country} subregion={producer.Subregion} region={producer.Region} key={producer._id}/>            
          ))}
        </Card.Group>
            ) : (
              <h3> "No results to display"</h3>
            )}
            </Grid.Column>
          
            </Grid.Row>

{/* Germany */}
<Grid.Row id='germany'>
  <Grid.Column>
<Header as='h1' textAlign='right' style={{color: '#221244', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "20px", paddingBottom: "20px"}} >
      Germany
    </Header>
    </Grid.Column>
</Grid.Row>

    <Grid.Row>

<Grid.Column width={12}>
        {germany.length ? (
          
            <Card.Group itemsPerRow={4}>
          {germany.map(producer => (
              <Producercard id={producer.Producer} producer={producer.Producer} country={producer.Country} subregion={producer.Subregion} region={producer.Region} key={producer._id}/>            
          ))}
        </Card.Group>
            ) : (
              <h3> "No results to display"</h3>
            )}
            </Grid.Column>
          
            </Grid.Row>

            {/* AUSTRIA */}
<Grid.Row id='austria'>
  <Grid.Column>
<Header as='h1' textAlign='right' style={{color: '#221244', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "20px", paddingBottom: "20px"}} >
      Austria
    </Header>
    </Grid.Column>
</Grid.Row>

    <Grid.Row>

<Grid.Column width={12}>
        {austria.length ? (
          
            <Card.Group itemsPerRow={4}>
          {austria.map(producer => (
              <Producercard id={producer.Producer} producer={producer.Producer} country={producer.Country} subregion={producer.Subregion} region={producer.Region} key={producer._id}/>            
          ))}
        </Card.Group>
            ) : (
              <h3> "No results to display"</h3>
            )}
            </Grid.Column>
          
            </Grid.Row>
            </Grid>
)}

     </Grid>
    );
  }
}

export default Producers;


import React, { Component, createRef } from "react";
// import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { Grid, Card, Header, Segment, Dimmer, Loader } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Producercard from "../components/ProducerCard";



class FemaleProducers extends Component {

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

  
render() {
let champagne = this.state.Producers.filter(p => p.Region === "Champagne");
 let france = this.state.Producers.filter(p => (p.Country === "France" && p.Region != "Champagne"));
 let spain = this.state.Producers.filter(p => p.Country === "Spain");
 let portugal = this.state.Producers.filter(p => p.Country === "Portugal");
 let greece = this.state.Producers.filter(p => p.Country === "Greece");
 let germany = this.state.Producers.filter(p => p.Country === "Germany");
 let austria = this.state.Producers.filter(p => p.Country === "Austria");

 let femaleProducer = this.state.Producers.filter(p=> p.Female === "Female Winemaker");

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
 champagne = champagne.sort(compare);
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
      Female Winemakers
    </Header>
    </Grid.Column>
        </Grid.Row>

    <Grid.Row>
      <Grid.Column width={11}>
    <center>
      <p style={{fontSize: '1.1em', paddingBottom: "20px"}}>
      We are proud to work with a number of female winemakers. Although most of our producers have women as a part of the process, these winemakers are specifically female owned and operated.
       </p>
            </center>
      </Grid.Column> 
    </Grid.Row>

    


     
  

{this.state.isLoading ?
  <Dimmer active inverted>
  <Loader inverted>Loading... </Loader>
</Dimmer>
: (
  <Grid centered>


{/* Row for Female Producers */}
 <Grid.Row id='femaleProducer' style={{backgroundColor:'#e6e6d2'}}>
  <Grid.Column style={{backgroundColor:'#e6e6d2'}}>
<Header as='h2' textAlign='right' style={{color: '#221244', backgroundColor: '#e6e6d2', textAlign: 'center', paddingTop: "10px", paddingBottom: "10px"}} >
      Female Winemakers
    </Header>
    </Grid.Column>
</Grid.Row>

<Grid.Row style={{backgroundColor:'#e6e6d2', paddingBottom: '35px'}}>

<Grid.Column width={12} style={{backgroundColor:'#e6e6d2'}}>
        {femaleProducer.length ? (
          
            <Card.Group itemsPerRow={4}>
          {femaleProducer.map(producer => (
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

export default FemaleProducers;


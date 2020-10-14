import React, { Component } from "react";
import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { Grid, Header, Segment, Dimmer, Loader, Table, Icon } from "semantic-ui-react";
import Winecard from "../components/WineCard"
import SearchWines from "../components/SearchWines"
import { Link } from "react-router-dom";


class Wines extends Component {
  state = {
    activeIndex: 0,
    wines: [],
    
    regionNames: [],
    isLoading: false,

    filters: {
      countries: [],
      colors: [],
      regions: [],
      farming: [],
      female: []
    }
  };
  //onload we get all the wine and producer data

  componentDidMount() {
    
    this.loadWines();
    // this.loadProducers();
  }
  loadWines = () => {
    this.setState({
      isLoading: true
    })
    API.getWines()
      .then(res => {
        this.setState({ wines: res.data })
        let regionNames = []
        res.data.map(wine => (!regionNames.includes(wine.Region)) && regionNames.push(wine.Region))
        this.setState({ 
          regionNames,
        isLoading: false })
      }
      )
      .catch(err => console.log(err));
  };
  // loadProducers = () => {
  //   API.getProducers()
  //     .then(res => {
  //       let producerNames = [];
  //       res.data.map(producer => {
  //         producerNames.push(producer.Producer)
  //       })
  //       this.setState({ producerNames })

  //     }
  //     )
  //     .catch(err => console.log(err));
  // };

  handleFilterChange = event => {
    // console.log('event.target', event.target);
    if (event.target.checked) {
      //define the selected filter
      const selectedFilter = event.target.getAttribute("data-filter");
      const filterArray = this.state.filters[selectedFilter];
      filterArray.push(event.target.value);
      //the bug seems to come from set state, we're accidentally getting rid of all the other arrays
      //we will need to use the previous state
      let oldFilters = this.state.filters
      oldFilters[selectedFilter] = filterArray
      this.setState({
        filters: oldFilters
      })
    } else {
      const filterArray = this.state.filters[event.target.getAttribute("data-Filter")].filter(elem => elem !== event.target.value);
      this.setState({
        filters: {
          ...this.state.filters,
          [event.target.getAttribute("data-Filter")]: filterArray
        }
      })
    }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render() {
    // const mainStyle = { marginLeft: "250px" }
    const wineAreaStyle= {minHeight:"100vh"};
    const countries = ["Germany", "France", "Austria", "Spain", "Portugal", "Greece"]
    const colors = ["Rosé", "White", "Red", "Sparkling", "Dessert"]
    const female = ["Female Winemaker"]
    const regions = this.state.regionNames;
    const notes = this.state.WineWise_Notes;
    const origin = this.state.Country;
    const region = this.state.Region;
    const color = this.state.Color;

    // const producers = this.state.producerNames;
    const farming = ["Sustainable", "Organic", "Certified Organic", "Bio-dynamic", "Certified Bio-dynamic", "HEV"];

    const filterElements = [{
      filterType: "countries",
      elements: countries
    }, {
      filterType: "colors",
      elements: colors
    }, 
    // {
    //   filterType: "regions",
    //   elements: regions
    // }, 
    // {
    //   filterType: "producers",
    //   elements: producers
    // }, 
    {
      filterType: "farming",
      elements: farming
    }, {
      filterType: "female",
      elements: female
    }]

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
  
    let wineList = this.state.wines
    // console.log("preWinelist", wineList)
    //this is a hacky way to access the wine data field given that each word is
    //slightly different than the actual keyword
    const wineFieldAdjuster = { "countries": "Country", "regions": "Region", "colors": "Color", "farming": "Farming_practices", "female": "Female_Winemaker" }
    // filter by each keyword if the filter is selected
    for (let keyword of ["countries", "colors", "regions", "farming", "female"]) {
      wineList = wineList.filter(wine => {
        return (
          (this.state.filters[keyword].length === 0) ||
          this.state.filters[keyword].includes(wine[wineFieldAdjuster[keyword]])
        )
      })
    }
    wineList = wineList.sort(compare);

    return (
      <Grid style={{marginTop: '30px'}} columns={2}>
     
        <Grid.Column width={3} >
        <SearchWines />
        <CheckboxSidebar checkableArrays={filterElements} handleFilterChange={this.handleFilterChange} />

        </Grid.Column>
   <Grid.Column width={12} style={wineAreaStyle}>
      <Grid centered style={{marginTop: '80px'}}>
        {/* { (wineList.length === 0) ? <h3>No results to display</h3> :(<h3>yes results</h3>)} */}
        {wineList.length ? (
           <Grid.Row >
       
                
                 
                    {/* {wineList.map(wine => (
                      <Winecard header={wine.Wine} region={wine.Region}  country={wine.Country} wineid={wine._id} key={wine._id} url={wine.URL} color={wine.Color} Code={wine.Code} new= {wine.Just_In} producer={wine.Producer} notes={wine.WineWise_Notes} farming={wine.Farming_practices} female={wine.Female_Winemaker}/>
                    ))} */}


{/* New Table Display */}

<Table>
<Table.Header>
   <Table.Row>
     <Table.HeaderCell singleLine>Country - Region</Table.HeaderCell>
     <Table.HeaderCell>Producer</Table.HeaderCell>
     <Table.HeaderCell>Wine</Table.HeaderCell>
     <Table.HeaderCell>Color</Table.HeaderCell>
     <Table.HeaderCell singleLine>Farming</Table.HeaderCell>
   </Table.Row>
 </Table.Header>
{wineList.map(wine => (


 <Table.Body>
   <Table.Row>
     <Table.Cell>
       <Header as='h5' textAlign='left'>
         {wine.Country} - {wine.Region}
       </Header>
     </Table.Cell>
     
     <Table.Cell singleLine>
     <Link to={"/producerdetails/" + wine.Producer} >
       {wine.Producer}
       </Link>
       </Table.Cell>
     
     <Table.Cell>
     <Link to={"/details/" + wine._id} >
       {wine.Wine}
       </Link>
     </Table.Cell>
     <Table.Cell textAlign='left'>
       {wine.Color}
       
     </Table.Cell>
     <Table.Cell>
     { ((wine.Farming_practices === "Organic") || (wine.Farming_practices === "Certified Organic" )) && <Icon name='leaf' size='small' color='green'/>}
     { ((wine.Farming_practices === "Bio-dynamic") || (wine.Farming_practices === "Certified Bio-dynamic" )) && <Icon name='moon' size='small' color='blue'/>}
  { wine.Farming_practices === "HEV" && <Icon name='sun' size='small' color='yellow'/>}
     {wine.Farming_practices}
     </Table.Cell>
   </Table.Row>

 </Table.Body>
    
                    ))}
</Table>      
{/* Done New Table Display */}              
                </Grid.Row>
            ) : (
                <Header as='h3'>{this.state.isLoading ? 
           
                  <Dimmer active inverted>
                    <Loader inverted>Loading... </Loader>
                  </Dimmer>
                : "No wines meet your criteria"}</Header>
              )}

      </Grid>
      </Grid.Column>
      </Grid>

  )
            }
            }
export default Wines;

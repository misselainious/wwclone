import React, { Component } from "react";
// import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { Grid, Header, Segment, Dimmer, Loader, Dropdown, Menu, Checkbox, Icon, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Winecard from "../components/WineCard"
import SearchWines from "../components/SearchWines"

class Wines extends Component {
  state = {
    wines: [],
    list: [],
    test: [],
    isLoading: false
  };
  //onload we get all the wine and producer data

  componentDidMount() {
    this.loadWines();
  }
  loadWines = () => {
    this.setState({
      isLoading: true
    })
    API.getWines()
      .then(res => {
        this.setState({ wines: res.data, list: res.data })     
      })
      .catch(err => console.log(err));
  };

  handleDropdown = (event, {value}) => {
   this.setState({ list: value})
   console.log(value)
   console.log("working?")
  }
//   handleFilterChange = event => {
//     // console.log('event.target', event.target);
//     if (event.target.checked) {
//       //define the selected filter
//       const selectedFilter = event.target.getAttribute("data-filter");
//       const filterArray = this.state.filters[selectedFilter];
//       filterArray.push(event.target.value);
//       //the bug seems to come from set state, we're accidentally getting rid of all the other arrays
//       //we will need to use the previous state
//       let oldFilters = this.state.filters
//       oldFilters[selectedFilter] = filterArray
//       this.setState({
//         filters: oldFilters
//       })
//     } else {
//       const filterArray = this.state.filters[event.target.getAttribute("data-Filter")].filter(elem => elem !== event.target.value);
//       this.setState({
//         filters: {
//           ...this.state.filters,
//           [event.target.getAttribute("data-Filter")]: filterArray
//         }
//       })
//     }
//   }

//   handleClick = (e, titleProps) => {
//     const { index } = titleProps
//     const { activeIndex } = this.state
//     const newIndex = activeIndex === index ? -1 : index
//     this.setState({ activeIndex: newIndex })
//   }

  render() {
    const options = [
        { key: 'France', text: 'France', value: 'France' },
        { key: 'Spain', text: 'Spain', value: 'Spain'},
        { key: 'Portugal', text: 'Portugal', value: 'Portugal' },
        { key: 'Greece', text: 'Greece', value: 'Greece' },
        { key: 'Germany', text: 'Germany', value: 'Germany' },
        { key: 'Austria', text: 'Austria', value: 'Austria' }
      ]
      const wineType = [
        { key: 'Rosé', text: 'Rosé', value: 'Rosé' },
        { key: 'White', text: 'White', value: 'White' },
        { key: 'Red', text: 'Red', value: 'Red' },
        { key: 'Sparkling', text: 'Sparkling', value: 'Sparkling' },
        { key: 'Dessert', text: 'Dessert', value: 'Dessert' }
      ]

      const farm = [
        { key: 'Sustainable', text: 'Sustainable', value: 'Sustainable'  },
        { key: 'Organic', text: 'Organic', value: 'Organic' },
        { key: 'Certo', text: 'Certified Organic', value: 'Certo' },
        { key: 'Bio', text: 'Bio-dynamic', value: 'Bio' },
        { key: 'CertB', text: 'Certified Bio-dynamic', value: 'CertB' },
        { key: 'HEV', text: 'HEV', value: 'HEV' }
      ]
    // const mainStyle = { marginLeft: "250px" }
    const wineAreaStyle= {minHeight:"100vh"};
    const countries = ["Germany", "France", "Austria", "Spain", "Portugal", "Greece"]
    const colors = ["Rosé", "White", "Red", "Sparkling", "Dessert"]
    const female = ["Female Winemaker"]
    const regions = this.state.regionNames;
    const farming = ["Sustainable", "Organic", "Certified Organic", "Bio-dynamic", "Certified Bio-dynamic", "HEV"];

    const filterElements = [{
      filterType: "countries",
      elements: countries
    }, {
      filterType: "colors",
      elements: colors
    }, {
      filterType: "regions",
      elements: regions
    }, 
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
    // const wineFieldAdjuster = { "countries": "Country", "regions": "Region", "colors": "Color", "farming": "Farming_practices", "female": "Female_Winemaker" }
    // // filter by each keyword if the filter is selected
    // for (let keyword of ["countries", "colors", "regions", "farming", "female"]) {
    //   wineList = wineList.filter(wine => {
    //     return (
    //       (this.state.filters[keyword].length === 0) ||
    //       this.state.filters[keyword].includes(wine[wineFieldAdjuster[keyword]])
    //     )
    //   })
    // }
    wineList = wineList.sort(compare);

    return (
      <Grid style={{marginTop: '30px'}} columns={2}>
        <Grid.Column width={3} style={{marginTop: '40px', marginBottom: '40px'}}>
        <SearchWines />
        {/* <CheckboxSidebar checkableArrays={filterElements} handleFilterChange={this.handleFilterChange} /> */}
        
    
  <Dropdown onAddItem={this.handleDropdown} placeholder='Countries' fluid multiple selection options={options}style={{marginTop: '20px', marginBottom: '20px'}} />
  <Dropdown placeholder='Type / Color' fluid multiple selection options={wineType} style={{ marginBottom: '20px'}} />
  <Dropdown placeholder='Sustainability' fluid multiple selection options={farm} style={{ marginBottom: '20px'}} />

  
      </Grid.Column>
      <Grid.Column width={12} style={wineAreaStyle}>
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
      </Grid.Column>
      </Grid>

  )
            }
            }
export default Wines;

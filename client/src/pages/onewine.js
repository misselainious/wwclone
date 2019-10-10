import React, { Component } from "react";
import API from "../utils/API";
import { Grid, Table, Segment, Image, Header, Responsive, Dimmer, Loader, Button, Icon, Dropdown} from "semantic-ui-react";
import Winecard from '../components/WineCard'
import Pricing from '../components/Pricing/pricing'
import MobilePricing from '../components/Pricing/mobilePricing'
import { Link } from "react-router-dom";
import {Moon, Female, Leaf, Sun} from '../components/Labels/Labels'
import decode from 'jwt-decode';
var jwt = require('jsonwebtoken');


class OneWine extends Component {

  
  state = {
    wine: {},
    wines: [],
    open: false,
    isLoaded: false,
    pdfcode: "",
    industry: false
  };



loggedIn = () => {
const token = localStorage.getItem('id_token')
// console.log("ID token is: ", token);
if (token) {
  this.setState({ industry: true})
}
}

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  removeUnderscores(myString){
    return myString.split("_").join(" ")
  }

  componentWillMount() {
    this.loggedIn();
    window.scrollTo(0,0);
    API.getWine(this.props.match.params.id)
      .then(res => this.setState({ wine: res.data}))
      .then(
        API.getWines()
        .then(res => {
          let data = res.data
          data = data.filter((item) => item.Producer === this.state.wine.Producer)
          data = data.filter((item) => item.Code !== this.state.wine.Code)
          this.setState({ wines: data, isLoaded: true, pdfcode: this.state.wine.Code
          }
          )
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }))
  }
  // componentDidUpdate(prevProps) {
  //   if (this.props.userID !== prevProps.userID){

  //   }
  // }


  defaultSrc(ev){
    ev.target.src = '../../images/StockRED.png'
  }

render() {
  // const { open } = this.state
    const { error, wine, isLoaded } = this.state;
    delete wine._id
    const wineObjKeys = Object.keys(wine).filter(key => key!=='URL');
    let producerWines = this.state.wines
    const farming = this.state.wine.Farming_practices;
    let techSheet;
    let validSheet= true;

    if(isLoaded){
      try{
  techSheet = require(`../TechSheets/Tech_${this.state.pdfcode}.pdf`)
      }
      catch(err){
        validSheet = false;
      }
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return  (
      <Dimmer active inverted>
        <Loader inverted>Loading... </Loader>
      </Dimmer>
      )
    } else {
    return (
      <div>

      {/* Mobile */}
<Responsive maxWidth={767}>
<Grid centered>

{/* <a href = {Tech} target = "_blank" rel="noopener noreferrer">
          <Button basic color="brown" target="_blank" rel="noopener noreferrer">
          <Icon name='folder' /> Item Descriptions
          </Button>
          </a> */}

<Grid.Row style={{marginTop:'25px'}}>
  <Grid.Column width={15}>
<Link to={"/producerdetails/" + this.state.wine.Producer}>
            <Header onMouseOver={this.handleHover} style={{backgroundColor:'#dfdfbf'}} as='h2' attached='top'>
            {this.state.wine.Producer}
            </Header>
          </Link>
            <Segment attached>
            {this.state.wine.Wine}
            </Segment>

            { (this.state.wine.WineWise_Notes === "")? null
            :
  
            <Segment className='WWNotes' attached>
            {this.state.wine.WineWise_Notes}
            </Segment>
            }
            </Grid.Column>
</Grid.Row>

  <Grid.Row style={{margin: '20px'}}>
    <Grid.Column>

  <Image onError={this.defaultSrc} src={`https://winewiseassets.s3-us-west-1.amazonaws.com/${this.state.wine.Code}.png`} size='large'/>

{/* Tech Sheet */}
{ validSheet &&
  <Segment style={{ backgroundColor: '#b4bbc6', maxHeight: '60px'}}>
  <Dropdown text='Tech Sheet'> 
    <Dropdown.Menu >

      <Dropdown.Item text='View in Browser' href={techSheet} target = "_blank" rel="noopener noreferrer" ><Icon name='file pdf outline icon' /> View in Browser</Dropdown.Item>

      <Dropdown.Item text='Download' download href={techSheet}> <Icon name='download icon' /> Download</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown> 
  </Segment>
}
   
{/* CORNER LABELS */}
{/* If the wine is Organic, puts a green leaf label */}
  { ((farming === "Organic") || (farming === "Certified Organic" )) && <Leaf />}

{/* If the wine is Bio-dynamic, puts a blue moon label */}
  { ((farming === "Bio-dynamic") || (farming === "Certified Bio-dynamic" )) && <Moon />}

{/* If the wine is HEV, puts a yellow Sun label */}
  { farming === "HEV" && <Sun />}

{/* If the winemaker is female, puts a pink female label */}
  { this.state.wine.Female_Winemaker === "Female Winemaker"  && <Female />}
  </Grid.Column>
  </Grid.Row>

  {/* <Grid.Row>
  <Grid.Column width={14}>
{ this.state.industry && <MobilePricing caseSize={wine.Case_Size} price={wine.Price} net={wine.Net} avail={wine.Availability}/>}
</Grid.Column>
</Grid.Row> */}

  <Grid.Row>
    <Grid.Column width={14}>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="2">{this.state.wine.Wine}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
            wineObjKeys.map(key => 
                    wine[key] !== '' && key !== 'WineWise_Notes' && key !== 'Just_In' && key !== 'Female_Winemaker' && key !== 'Order' && key !== 'Availability'&& key !== 'Price' && key !== 'Case_Size' && key !== 'Net' && <Table.Row key={key}>
                        <Table.Cell>{this.removeUnderscores(key)}</Table.Cell>
                        <Table.Cell>{wine[key]}</Table.Cell>
                    </Table.Row>
            )
        }
    </Table.Body>
   </Table>
   </Grid.Column>
  </Grid.Row>

  {(this.state.wines.length === 0)? <div></div>:

<Grid.Row>
<Grid.Column width={12}>
<Header as='h3'>{this.state.wine.Producer}'s Other Wines</Header>
      
       <Grid.Row>
         
         <Grid.Column width={8}>
                  
               <Grid >
                 <Grid.Row columns={12}>
                   {producerWines.map(wine => (
    <Winecard header={wine.Wine} region={wine.Region} producer={wine.Producer} country={wine.Country} wineid={wine._id} key={wine._id} url={wine.URL} Code={wine.Code}/>
                   ))}
                 </Grid.Row>
               </Grid>

         </Grid.Column>
       </Grid.Row>
       </Grid.Column>
       </Grid.Row>
}

</Grid>
</Responsive>

{/* Desktop */}
<Responsive minWidth={768}>
  <Grid style={{marginTop: '100px', marginLeft:'20px', marginBottom: '20px'}} >




<Grid.Row>

 <Grid.Column width={3}>
{/* Renders Photo of wine */}
  <Image onError={this.defaultSrc}  src={`https://winewiseassets.s3-us-west-1.amazonaws.com/${this.state.wine.Code}.png`} size='large'/>         
 

{/* CORNER LABELS */}
{/* If the wine is Organic, puts a green leaf label */}
 { ((farming === "Organic") || (farming === "Certified Organic" )) && <Leaf />}

{/* If the wine is Bio-dynamic, puts a blue moon label */}
 { ((farming === "Bio-dynamic") || (farming === "Certified Bio-dynamic" )) && <Moon />}

{/* If the wine is HEV, puts a yellow Sun label */}
 { farming === "HEV" && <Sun />}

{/* If the winemaker is female, puts a pink female label */}
 { this.state.wine.Female_Winemaker === "Female Winemaker"  && <Female />}
 
 
{/* Tech Sheet */}
{ validSheet &&
  <Segment style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#b4bbc6'}}>
  <Dropdown text='Tech Sheet'> 
    <Dropdown.Menu >

      <Dropdown.Item text='View in Browser' href={techSheet} target = "_blank" rel="noopener noreferrer" ><Icon name='file pdf outline icon' /> View in Browser</Dropdown.Item>

      <Dropdown.Item text='Download' download href={techSheet}> <Icon name='download icon' /> Download</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown> 
  </Segment>
}
</Grid.Column>

 <Grid.Column width={6}>
         <Link to={"/producerdetails/" + this.state.wine.Producer}>
           <Header style={{backgroundColor:'#dfdfbf'}} as='h2' attached='top'>
           {this.state.wine.Producer}
           </Header>
         </Link>
           <Segment attached>
           {this.state.wine.Wine}
           </Segment>
           { (this.state.wine.WineWise_Notes === "")? null
           :
 
           <Segment className='WWNotes' attached>
           {this.state.wine.WineWise_Notes}
           </Segment>
           }

 </Grid.Column>

 {/* PRICING */}
 {/* <Grid.Column width={6}>
 <Grid.Row>
{ this.state.industry && <Pricing caseSize={wine.Case_Size} price={wine.Price} net={wine.Net} avail={wine.Availability}/>}
</Grid.Row>
 </Grid.Column> */}
</Grid.Row>

<Grid.Row>

 <Grid.Column width={8}>
  <Table celled>
   <Table.Header>
     <Table.Row>
       <Table.HeaderCell colSpan="2">{this.state.wine.Wine}</Table.HeaderCell>
     </Table.Row>
   </Table.Header>

   <Table.Body>
       {
           wineObjKeys.map(key => 
                   wine[key] !== '' && key !== 'WineWise_Notes' && key !== 'Just_In' && key !== 'Female_Winemaker' && key !== 'Order' && key !== 'Availability' && key !== 'Price' && key !== 'Case_Size' && key !== 'Net' && <Table.Row key={key}>
                       <Table.Cell>{this.removeUnderscores(key)}</Table.Cell>
                       <Table.Cell>{wine[key]}</Table.Cell>
                   </Table.Row>
           )
       }
   </Table.Body>
  </Table>
 </Grid.Column>
</Grid.Row>


{/* Producer's Other Wines */}
{(this.state.wines.length === 0)? <div></div>:

<Grid.Row>
<Grid.Column width={12}>
<Header as='h3'>{this.state.wine.Producer}'s Other Wines</Header>
      
       <Grid.Row>  

         <Grid.Column width={8}>
 
               <Grid >
                 <Grid.Row columns={12}>
                   {producerWines.map(wine => (
    <Winecard header={wine.Wine} justIn={wine.Just_In} region={wine.Region} producer={wine.Producer} country={wine.Country} wineid={wine._id} key={wine._id} url={wine.URL} Code={wine.Code} />
                   ))}
                 </Grid.Row>
               </Grid>

         </Grid.Column>
       </Grid.Row>
       </Grid.Column>
       </Grid.Row>
}

</Grid>










</Responsive>
</div>
 
    );
  }
}
}

export default OneWine;

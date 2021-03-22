import React, { Component } from "react";
import Inv from '../pdf_files/inventory.pdf'
import Desc from '../pdf_files/WineWise_priceList.pdf'
import German from  '../pdf_files/priceList_Germany.pdf'
import Sparkling from  '../pdf_files/priceList_Sparkling.pdf'
import Austrian from '../pdf_files/austrianList.pdf'
import Old from '../pdf_files/OldRioja.pdf'
import Mags from  '../pdf_files/MagnumHalf.pdf'
import {
  Grid,
  Button,
  Message,
  Table,
  Icon,
  Image,
  Header
} from 'semantic-ui-react';


// const options = [
//   { key: 'r', text: 'Red', value: 'Red' },
//   { key: 'w', text: 'White', value: 'White' },
//   { key: 's', text: 'Sparkling', value: 'Sparkling' },
//   { key: 'ro', text: 'Rose', value: 'Rose' },
//   { key: 'd', text: 'Dessert', value: 'Dessert' },
// ]
// const countryOptions = [
//   { key: 'f', text: 'France', value: 'France' },
//   { key: 'g', text: 'Greece', value: 'Greece' },
//   { key: 's', text: 'Spain', value: 'Spain' },
//   { key: 'p', text: 'Portugal', value: 'Portugal' },
// ]


class Admin extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    producer: "",
    wine: "",
    region: "",
    subregion: "",
    code: "",
    description: ""
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  // handleInputChange = (event, { value }) => {
  //   //this will capture form input
  //   this.setState({ [event.target.name]: event.target.value });
  // }
  // // separate onChange methods to assign state for Select form values
  // handleSelectCountryChange = ({ value }) => this.setState({ country: value })
  // handleSelectColorChange = ({ value }) => this.setState({ color: value })

  // handleFormSubmit = event => {
  //   // console.log(this);
  //   event.preventDefault();
  //   if (this.state.producer) {
  //     API.saveWine({
  //       producer: this.state.producer,
  //       wine: this.state.wine,
  //       color: this.state.color,
  //       country: this.state.country,
  //       code: this.state.code,
  //       region: this.state.region,
  //       subregion: this.state.subregion,
  //       description: this.state.description
  //     })
  //       // .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };
  render() {
    // const { value } = this.state
    // const { pageNumber, numPages } = this.state;
    return (
      <Grid centered style={{ marginTop: '100px', marginBottom: '100px'}}>

      <Grid.Row>
      <Message color='brown'>
        <Message.Header> 
          <i class="box icon"></i>
          Welcome to the Trade section of WineWise
        </Message.Header>
        <p style={{fontSize: '1em'}}>
          Please click on an item below to view.
        </p>
      </Message>
      </Grid.Row>

      <div class="ui divider"></div>

{/* <Grid.Row>
<Message>
    <Message.Header style={{fontSize: '1.5em', color: '#990000', marginBottom: '25px'}}>2020 Offer of Old Riojas</Message.Header>
    <p style={{fontSize: "1.1em"}}>
      Please view our available selections.
    </p>
    <a href = {Old} target = "_blank" rel="noopener noreferrer">
          <Button basic color = "brown" target="_blank" rel="noopener noreferrer">
          <Icon name='folder' /> Old Rioja Offer
          </Button>
          </a>
  </Message>
</Grid.Row> */}


<Grid.Row>
  <Grid.Column width='8'>

<Table celled striped style={{marginTop: '4%'}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign='center' colSpan='3' style={{fontSize: '1.3em'}}>PDF's available for download</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell textAlign='center'>
        <a href = {Inv} target = "_blank" rel="noopener noreferrer">
          <Button basic color = "brown" target="_blank" rel="noopener noreferrer">
          <Icon name='folder' />  Price List
          </Button>
          </a>
          
        </Table.Cell>
        <Table.Cell>Weekly updated list of available inventory.</Table.Cell>
      
      </Table.Row>
      <Table.Row>
        <Table.Cell textAlign='center'> 
        <a href = {Desc} target = "_blank" rel="noopener noreferrer">
          <Button basic color="brown" target="_blank" rel="noopener noreferrer">
          <Icon name='folder' /> Item Descriptions
          </Button>
          </a>
         
        </Table.Cell>
        <Table.Cell>Detailed desciptions of all of our wines.</Table.Cell>
    

      </Table.Row>
      <Table.Row>
        <Table.Cell textAlign='center'>
        <a href = {German} target = "_blank" rel="noopener noreferrer">
          <Button basic color = "brown" target="_blank" rel="noopener noreferrer">
          <Icon name='folder' />German
          </Button>
          </a>
        </Table.Cell>
        <Table.Cell>List of German offerings only.</Table.Cell>
      </Table.Row>


   
      <Table.Row>
        <Table.Cell textAlign='center'>
        <a href = {Austrian} target = "_blank" rel="noopener noreferrer">
          <Button basic color = "brown" target="_blank" rel="noopener noreferrer">
          <Icon name='folder' />Austrian
          </Button>
          </a>
        </Table.Cell>
        <Table.Cell>List of Austrian offerings only.</Table.Cell>
      </Table.Row>
      
      <Table.Row>
        <Table.Cell textAlign='center'>
        <a href = {Sparkling} target = "_blank" rel="noopener noreferrer">
          <Button basic color="brown" target="_blank" rel="noopener noreferrer">
          <Icon name='folder' /> Sparkling
          </Button>
          </a>
        </Table.Cell>
        <Table.Cell>List of Sparkling offerings only.</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell textAlign='center'>
        <a href = {Mags} target = "_blank" rel="noopener noreferrer">
          <Button basic color = "brown" target="_blank" rel="noopener noreferrer">
          <Icon name='folder' />Magnums &amp; Half Bottles
          </Button>
          </a>
        </Table.Cell>
        <Table.Cell>List of Magnums and Half bottles only.</Table.Cell>
      </Table.Row>


    </Table.Body>
  </Table>

  </Grid.Column>
</Grid.Row>
<Grid.Row>
  <Grid.Column>
    <Header textAlign="center" as="h3">Pay with Credit or ACH using: </Header>
  <a href = "https://melio.me/WineWise" target = "_blank" rel="noopener noreferrer">
    <Image centered src="../images/cf4ba8206a453cfb509a77ea35e546bc.png" size="tiny" style={{padding: "7px", backgroundColor: "#7b4dfe"}}></Image>
  </a>
  </Grid.Column>
</Grid.Row>


      </Grid>
    )
  }
}

export default Admin

import React, { Component } from "react";
import Tasting from  '../pdf_files/WineWise_Tasting_Sheet_Nov_2022.pdf'
import {
  Grid,
  Button,
  Message,
  Table,
  Icon,
  Image,
  Header
} from 'semantic-ui-react';



class Secret extends Component {
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

  render() {
    // const { value } = this.state
    // const { pageNumber, numPages } = this.state;
    return (
      <Grid centered style={{ marginTop: '100px', marginBottom: '100px'}}>

      <Grid.Row>
      <Message color='purple'>
        <Message.Header> 
          {/* <i class="lightning icon"></i> */}
          Hello! Welcome to our Tasting Page.
        </Message.Header>
        <p style={{fontSize: '1em'}}>
          Please click on an item below to view.
        </p>
      </Message>
      </Grid.Row>

      <div class="ui divider"></div>




<Grid.Row>
  <Grid.Column width='8'>

<Table celled striped style={{marginTop: '4%'}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign='center' colSpan='5' style={{fontSize: '1.3em'}}>PDF's available for download</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell textAlign='center'>
        <a href = {Tasting} target = "_blank" rel="noopener noreferrer">
          <Button basic color = "violet" target="_blank" rel="noopener noreferrer">
          <Icon name='folder' />  November 2022 Tasting Sheet
          </Button>
          </a>
          
        </Table.Cell>
        <Table.Cell>2022 Champagne Tasting Sheet and Price List</Table.Cell>
      
      </Table.Row>

    </Table.Body>
  </Table>

  </Grid.Column>
</Grid.Row>
      </Grid>
    )
  }
}

export default Secret

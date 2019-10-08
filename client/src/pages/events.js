import React, { Component } from "react";
import Mags from  '../pdf_files/MagnumHalf.pdf'
import { Header, Table, Rating, Grid, Image, Button, Icon } from 'semantic-ui-react'
import SD from '../pdf_files/SD.pdf'
import LA from '../pdf_files/LA.pdf'
import CM from '../pdf_files/CM.pdf'


const EventsTable = () => (
<Grid>
    <Grid.Row centered>
        <Grid.Column width={10}>
        <Image centered src='../../images/inviteTemplate.png' fluid style={{marginTop: '100px'}}/>
        </Grid.Column>
    </Grid.Row>
    <Grid.Row centered style={{ marginBottom:'100px'}}>
        <Grid.Column centered width={12}>
        <Table celled padded >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>City</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Venue</Table.HeaderCell>
          <Table.HeaderCell>R.S.V.P.</Table.HeaderCell>
          <Table.HeaderCell>View Invitation</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>

        <Table.Row>
          <Table.Cell singleLine>
            <Header as='h2' textAlign='center'>
            San Diego
            </Header>
          </Table.Cell>
          <Table.Cell singleLine>Monday, October 14</Table.Cell>
          <Table.Cell singleLine>
            Juniper and Ivy
          </Table.Cell>
          <Table.Cell >
           tami@winewise.biz
          </Table.Cell>
          <Table.Cell>
          <a href = {SD} target = "_blank" rel="noopener noreferrer">
          <Button basic color = "violet" target="_blank" rel="noopener noreferrer">
          <Icon name='folder' />  San Diego Tasting
          </Button>
          </a>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell singleLine>
            <Header as='h2' textAlign='center'>
            Los Angeles
            </Header>
          </Table.Cell>
          <Table.Cell singleLine>Monday, October 14</Table.Cell>
          <Table.Cell singleLine>
            Antico 
          </Table.Cell>
          <Table.Cell >
           john@winewise.biz
          </Table.Cell>
          <Table.Cell>
          <a href = {LA} target = "_blank" rel="noopener noreferrer">
          <Button basic color = "violet" target="_blank" rel="noopener noreferrer">
          <Icon name='folder' />  Los Angeles Tasting
          </Button>
          </a>
          </Table.Cell>
        </Table.Row>


                <Table.Row>
          <Table.Cell singleLine>
            <Header as='h2' textAlign='center'>
            Costa Mesa
            </Header>
          </Table.Cell>
          <Table.Cell singleLine>Tuesday, October 15</Table.Cell>
          <Table.Cell singleLine>
            Vaca
          </Table.Cell>
          <Table.Cell>
           nicole@winewise.biz
          </Table.Cell>
          <Table.Cell>
          <a href = {CM} target = "_blank" rel="noopener noreferrer">
          <Button basic color = "violet" target="_blank" rel="noopener noreferrer">
          <Icon name='folder' />  Costa Mesa Tasting
          </Button>
          </a>
          </Table.Cell>
        </Table.Row>

        
      </Table.Body>
    </Table>
        </Grid.Column>
    </Grid.Row>

</Grid>


    
  )
  
  export default EventsTable
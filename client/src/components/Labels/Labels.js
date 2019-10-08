import React, {Component} from 'react';
import { Label, Portal, Segment, Header} from "semantic-ui-react";

class Moon extends Component {
    state = {
        open: false,
    }

    handleOpen = () => {
        this.setState({ open: true })
      }
    
      handleClose = () => {
        this.setState({ open: false })
      }
    render(){
        const { open } = this.state
    return (

        <Portal
        closeOnTriggerClick
        openOnTriggerClick
        trigger={
            <Label as={'a'} color={'blue'} corner={'left'} icon={'moon'} 
            negative={open}
            positive={!open}
          />
        }
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        >

<Segment style={{ left: '20%', position: 'fixed', top: '20%', zIndex: 1000, marginRight: '80px', backgroundColor: '#d7dae5'}}>
              <Header>This wine is Bio-dynamic</Header>
              <p style={{fontSize: '1em'}}>This winemaker uses organic farming methods (e.g. employing compost as fertilizer and avoiding most pesticides) while also employing soil supplements prepared according to Rudolf Steiner's formulas, following a planting calendar that depends upon astronomical configurations, and treating the earth as "a living and receptive organism."</p>
            </Segment>
          </Portal>
    );
};}


class Leaf extends Component {
    state = {
        open: false,
    }

    handleOpen = () => {
        this.setState({ open: true })
      }
    
      handleClose = () => {
        this.setState({ open: false })
      }
    render(){
        const { open } = this.state
    return (

        <Portal
        closeOnTriggerClick
        openOnTriggerClick
        trigger={
            <Label as={'a'} color={'green'} corner={'left'} icon={'leaf'} 
            negative={open}
            positive={!open}
          />
        }
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        >

<Segment style={{ left: '20%', position: 'fixed', top: '20%', zIndex: 1000, marginRight: '80px', backgroundColor: '#dfe5d7'}}>
              <Header>This wine is Organic</Header>
              <p style={{fontSize: '1em'}}>Organic winemaking excludes the use of artificial chemical fertilizers, pesticides, fungicides and herbicides.</p>
            </Segment>
          </Portal>
    );
};}

class Sun extends Component {
    state = {
        open: false,
    }

    handleOpen = () => {
        this.setState({ open: true })
      }
    
      handleClose = () => {
        this.setState({ open: false })
      }
    render(){
        const { open } = this.state
    return (

        <Portal
        closeOnTriggerClick
        openOnTriggerClick
        trigger={
            <Label as={'a'} color={'yellow'} corner={'left'} icon={'sun'} 
            negative={open}
            positive={!open}
          />
        }
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        >

<Segment style={{ left: '20%', position: 'fixed', top: '20%', zIndex: 1000, marginRight: '80px', backgroundColor: '#efefcb'}}>
              <Header>This wine is HEV</Header>
              <p style={{fontSize: '1em'}}>HEV stands for 'High Environmental Value' and certification guarantees that the pressure applied to the environment by farming practices (on air, water, soil, climate, biodiversity and landscape) is kept to a minimum.</p>
            </Segment>
          </Portal>
    );
};}


class Female extends Component {
    state = {
        open: false,
    }

    handleOpen = () => {
        this.setState({ open: true })
      }
    
      handleClose = () => {
        this.setState({ open: false })
      }
    render(){
        const { open } = this.state
    return (

        <Portal
        closeOnTriggerClick
        openOnTriggerClick
        trigger={
            <Label as={'a'} color={'pink'} corner={'right'} icon={'venus'} 
            negative={open}
            positive={!open}
          />
        }
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        >

<Segment style={{ left: '20%', position: 'fixed', top: '20%', zIndex: 1000, marginRight: '80px', backgroundColor: "#e5d7e3"}}>
              <Header>This wine is made by a lady</Header>
              <p style={{fontSize: '1em'}}>We feel that empowering women makes the world stronger and are proud to work with a number of female winemakers.</p>
            </Segment>
          </Portal>
    );
};}

class New extends Component {
  state = {
      open: false,
  }

  handleOpen = () => {
      this.setState({ open: true })
    }
  
    handleClose = () => {
      this.setState({ open: false })
    }
  render(){
      const { open } = this.state
  return (

      <Portal
      closeOnTriggerClick
      openOnTriggerClick
      trigger={
          <Label as={'a'} color={'orange'} corner={'left'} >New! </Label>
          // negative={open}
          // positive={!open}
        
      }
      onOpen={this.handleOpen}
      onClose={this.handleClose}
      >

<Segment style={{ left: '20%', position: 'fixed', top: '20%', zIndex: 1000, marginRight: '80px', backgroundColor: '#efefcb'}}>
            <Header>This wine is New!</Header>
          
          </Segment>
        </Portal>
  );
};}

export {Moon, Female, Leaf, Sun, New};
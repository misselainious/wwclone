
import React, {Component} from 'react'
import { Image, Menu, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const scrollToTop = () => { window.scroll(0,0)};

class FixedMenuLayout extends Component{
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name }).then(
      this.setState({
        activeItem : ""
      })
  )


  
  render(){
    const { activeItem } = this.state
  return(
  <div>
    <Menu fixed='top'>

        <Menu.Item  
          as={Link} to='/' 
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}style={{color: '#510409', fontSize: '1.3em'}}>
          <Image size='mini' src='./images/owl.png' style={{ marginRight: '1.5em' }} />
          WineWise
        </Menu.Item>
 
        <Menu.Item name='producers' as={Link} to='/producers' active={activeItem === 'producers'} onClick={this.handleItemClick}>Producers </Menu.Item>
        <Menu.Item name='allwines' as={Link} to='/allwines' active={activeItem === 'allwines'} onClick={this.handleItemClick}>Wines </Menu.Item>
        <Menu.Item name='about' as={Link} to='/aboutus' active={activeItem === 'about'} onClick={this.handleItemClick}>About Us </Menu.Item>
        
      
      {/* OLD LINK */}
      {/* <Link to="/" onClick={scrollToTop}>
        <Menu.Item   name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}style={{color: '#510409'}}>
          <Image size='mini' src='./images/owl.png' style={{ marginRight: '1.5em' }} />
          WineWise
        </Menu.Item>
        </Link> */}


        
{/* Future Dropdown with Countries */}
      
        {/* <Dropdown item simple text='Countries'>
          <Dropdown.Menu>
            <Dropdown.Item>Austria</Dropdown.Item>
            <Dropdown.Item>France</Dropdown.Item>
            <Dropdown.Item>Germany</Dropdown.Item>
            <Dropdown.Item>Greece</Dropdown.Item>
            <Dropdown.Item>Portugal</Dropdown.Item>
            <Dropdown.Item>Spain</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>France</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}

  
        {/* Trade Button */}
        <Menu.Item position='right' style={{marginRight:'10px'}} >
        <Link to="/admin" onClick={scrollToTop}>
        <Button>
        <i className="dolly icon"></i> For the Trade
          </Button> 
          </Link>
          </Menu.Item>


     
    </Menu>

  </div>
  )}
      }

export default FixedMenuLayout
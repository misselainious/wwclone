import React from 'react'
import {
  Image,
  Menu,
  Button
} from 'semantic-ui-react'

import { Link } from 'react-router-dom';

const scrollToTop = () => { window.scroll(0,0)};

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top'>
      
      <Link to="/" onClick={scrollToTop}>
        <Menu.Item as='a' header style={{color: '#510409'}}>
          <Image size='mini' src='../../../images/owl.png' style={{ marginRight: '1.5em' }} />
          WineWise
        </Menu.Item>
        </Link>
        
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

        <Menu.Item as='a'><Link to="/producers" onClick={scrollToTop}>Producers  </Link></Menu.Item>
        <Menu.Item as='a'><Link to="/allwines" onClick={scrollToTop}>Wines  </Link></Menu.Item>
        <Menu.Item as='a'><Link to="/aboutus" onClick={scrollToTop}>About Us  </Link></Menu.Item>
        

               {/* Events Button */}
        {/* <Menu.Item position='right' style={{marginRight:'10px'}} >
        <Link to="/events" onClick={scrollToTop}>
        <Button style={{ backgroundColor: '#88b2b8'}}>
         Polz Pre-Arrival
          </Button> 
          </Link>
          </Menu.Item> */}


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
)

export default FixedMenuLayout




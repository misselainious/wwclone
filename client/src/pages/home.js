import React from "react";
import Carousel from "../components/common/Carousel/Carousel";
import { Link } from "react-router-dom";
import Justin from "../components/JustIn/justin";
import Feature from "../components/FeaturedWine/feature";
import Videos from "../components/Videos/video";
import Event from "../components/Event/event";
import Announcement from "../components/Announcements/announcement";
import Announcement2 from "../components/Announcements/announcement2";
import Pato from "../components/Photo/pato";

import {
  Button,
  Divider,
  Grid,
  Header,
  Image,
  Responsive,
  Message
} from 'semantic-ui-react';
// import { createCipher } from "crypto";

const Home = () => (
  
<div>

{/* Only shows if on mobile */}
<Responsive maxWidth={767} >

<Image src="../images/group/LinkedIn.png" />
 <Grid.Row dividing>
 <Header as='h1'style={{ textAlign: 'center', fontSize: '4em', color: '#962d2d'}}>WineWise</Header>
 </Grid.Row>

 <Grid.Column width={12}>
    {/* <Announcement /> */}
    {/* <Announcement2 /> */}
    </Grid.Column>
  <Grid.Column style={{textAlign: "center", marginTop:"15px"}}  centered>
  <Link to="/producers">
        <Button  style={{textAlign: "center"}} className="seeAllWinesBtn" size='small'>
        <p className="seeAllWinesText">Browse Our Producers</p>
        </Button>
      </Link>
  </Grid.Column>

 {/* <Grid.Row>
   <Event />
  </Grid.Row> */}

{/* <Grid.Row>
  <Pato />
</Grid.Row> */}

<Grid centered>
 <Grid.Row>
   <Grid.Column width={14}>
    <Divider
        as='h2'
        className='header'
        horizontal
        style={{ color: '#962d2d', margin: '1em 0em', textTransform: 'uppercase' }}>
        Our mission
      </Divider>

{/*      
        <p  style={{ padding:'20px',fontSize: '1.2em' }}>
          Since 1989, WineWise has been importing some of the finest estate-grown wines from France, Germany, Austria, Spain, Portugal and Greece. Our speciality is small family firms that offer over-performing wines and exceptional value. Grower Champagnes and other sparkling wines are a particular area of emphasis for us.
        </p>
            
      <Link to="/allwines">
        <Button className="seeAllWinesBtn" size='small'>
        <p className="seeAllWinesText">See All Wines</p>
        </Button>
      </Link> */}
   </Grid.Column>
 </Grid.Row>

 {/* <Grid.Row>
  <Feature />
 </Grid.Row> */}

 <Grid.Row>
  <Justin />
 </Grid.Row>

 </Grid>

</Responsive>



{/* Only Shows On Desktop */}
<Responsive minWidth={768}>
 <Grid centered style={{marginTop: '20px'}}>
   <Grid.Row>
     <Grid.Column style={{paddingTop: '40px'}} width={7}>
     </Grid.Column>
   </Grid.Row>


  <Grid.Row>
   <Carousel />
  </Grid.Row>

  {/* <Grid.Row>
    <Grid.Column marginRight={'20px'} width={5}>
    <Announcement />
    </Grid.Column>
    </Grid.Row> */}

  {/* <Grid.Row>
   <Event />
  </Grid.Row> */}

{/* <Grid.Row>
  <Pato />
</Grid.Row> */}
 
 <Grid.Row>
   <Grid.Column width={8}>
   <p style={{ padding:'20px',fontSize: '1.4em' }}>
     <em>
        Since 1989, Wine Wise has been importing some of the finest estate-grown wines from France, Germany, Austria, Spain, Portugal and Greece. Our speciality is small family firms that offer over-performing wines and exceptional value. Grower Champagnes and other sparkling wines are a particular area of emphasis for Wine Wise.
        </em>
         </p>
   </Grid.Column>

 </Grid.Row>
    
  {/* </Grid.Row> */}

  <Grid.Row columns={2} divided >

   <Grid.Column width={6} >

    <Divider
      as='h2'
      className='header'
      horizontal
      style={{ color: '#962d2d', margin: '1em 0em', textTransform: 'uppercase' }}>
  Our Newest Videos
    </Divider>

    {/* <Image src="../images/vineyard.jpg" size='large' centered/>
      <p style={{ padding:'20px',fontSize: '1.2em' }}>
        Since 1989, Wine Wise has been importing some of the finest estate-grown wines from France, Germany, Austria, Spain, Portugal and Greece. Our speciality is small family firms that offer over-performing wines and exceptional value. Grower Champagnes and other sparkling wines are a particular area of emphasis for Wine Wise.
      </p>
          
    <Link to="/allwines">
      <Button className="seeAllWinesBtn" size='small'>
      <p className="seeAllWinesText">See All Wines</p>
      </Button>
    </Link> */}
   
    <Videos />
    {/* <Announcement2 /> */}
  
   </Grid.Column>

 <Feature />

 </Grid.Row>

 <Grid.Row>
  <Justin />
 </Grid.Row>
    
</Grid>
</Responsive>
</div>
)
export default Home;

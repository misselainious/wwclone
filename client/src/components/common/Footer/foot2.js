import React from "react";
import { Segment, Container, Icon, Grid, Button, Image } from "semantic-ui-react";
import "./Footer.css";

const Footer = () => (
  
  <Segment>
    <Container textAlign="center">
    <Grid verticalAlign='middle' relaxed columns={3}>
        <Grid.Column>
            <Grid.Row>
              <span style={{marginBottom:'5px', color: '#6a6a6b'}}>
              orders@winewise.biz
              </span>
            </Grid.Row>
            <Grid.Row>
              <span style={{color: '#9d9da0'}}>
              5655 College Avenue Oakland, CA 94618
              </span>
            </Grid.Row>
            <Grid.Row>
              <span style={{color: '#9d9da0'}}>
            p (510) 473 5482 f (510) 550 2640
            </span>
            </Grid.Row>
      </Grid.Column>
      <Grid.Column align='center' >
          {/* <Header className="WWFoot" as="h2">
            WineWise
          </Header> */}
           <Image size='medium' src='images/Wiselogo.png' />
      </Grid.Column>
      <Grid.Column>
      <Button className="social" target="_blank" href='https://www.facebook.com/winewiseimports'size='tiny'style={{marginBottom:'5px', marginTop: '5px'}}>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button target="_blank" href='https://www.linkedin.com/company/winewise-llc/?viewAsMember=true' size='tiny'style={{marginBottom:'5px', marginTop: '5px'}}>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button target="_blank" href='https://www.instagram.com/wine_wise/' size='tiny'style={{marginBottom:'5px', marginTop: '5px'}}>
      <Icon name='instagram' /> Instagram
    </Button>
      </Grid.Column>
    </Grid>
    
    </Container>
  </Segment>

);

export default Footer;

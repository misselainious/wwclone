import React from "react";
import { Link } from 'react-router-dom';

import {
    Button,
    Grid,
    Header,
    Image,
    Segment,
    Divider
} from 'semantic-ui-react';
import SalesTeamModal from "../components/SalesTeam/Modal/Modal";
import TeamMembersContainer from '../components/SalesTeam/TeamMembersContainer';

class AboutUs extends React.Component {
    state = {
        modal: false,
        currentMember: null,
    }

    handleOpenModal = member => {
        this.setState({ modal: true, currentMember: member });
    }

    handleCloseModal = () => {
        this.setState({ modal: false, currentMember: null });
    }

    render() {
        const { modal, currentMember } = this.state;
        return (
            <React.Fragment>
      
        <div style={{backgroundColor: '#f2efef'}}>
        <Divider
                        as='h2'
                        className='header'
                        horizontal
                        style={{ color: '#962d2d', margin: '1em 0em', textTransform: 'uppercase', paddingTop: '3.5em' }}>
                        our philosophy
                    </Divider>
               
                <Grid centered container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={12}>
                <p style={{ fontSize: '1.25em' }}>
          The philosophy of Wine Wise is straightforward: we seek wines of character from people we like and places which are not always well-known or popular. We are not averse to the classics, but we are not scared of the obscure. Our wines do not have to meet any ideological litmus test, but we do have to like them. If they are grown organically it does not hurt, but we don’t insist on it. While we have a number of sought-after and expensive wines in our portfolio, our animating force is the acquisition of great wines that almost anyone can afford to drink – a rather more exacting discipline than the converse. Above all, we like people. Our growers tend to be interesting and often amusing people, sometimes with a spiritual bent, sometimes unrepentantly earthy. We have watched with pleasure as the sons and daughters we knew as babies and children have grown up to be the proprietors of their parents’ estates. We like to think of ourselves as the link between these friends and the people drinking their wines in restaurants or at home. We have developed from an essentially one-man band into a team with a dozen or so sales representatives spanning virtually the entire state of California and a small phalanx of impossibly clever people handling the many functions that lie beyond the principals’ capabilities. We are very lucky people!
        </p>
                                </Grid.Column>
                                </Grid.Row>
                                </Grid>

                                </div>
                                {/* </Segment>     */}
                <Segment style={{ padding: '2em 0em' }} vertical>
                <Divider
                        as='h2'
                        className='header'
                        horizontal
                        style={{ color: '#962d2d', margin: '1em 0em', textTransform: 'uppercase' }}>
                        FOUNDERS
                    </Divider>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Hiram Simon, Principal
                </Header>
                                <p style={{ fontSize: '1.25em' }}>
                                    Hiram Simon founded this company on the principle of providing great wine from great people. He's been fortunate to shape the direction of this company.
                                </p>
                                <Link to="/hiram">
                                <Button className="seeAllWinesBtn" size='small'>
                                    <p className="seeAllWinesText">Read More</p>
                                </Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image bordered rounded size='medium' src='/images/Hiram.jpg' />
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>


                    <Segment style={{ padding: '2em 0em' }} vertical>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column floated='left' width={6}>
                                    <Image className="modalImageSize" bordered rounded size='medium' src='/images/BrianGreenwood.jpg' />
                                </Grid.Column>

                                <Grid.Column floated='right' width={8}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        Brian Greenwood, Principal
                </Header>
                                    <p style={{ fontSize: '1.25em' }}>
                                        Brian helped WineWise grow organically into what it is today though his refreshing outlook on the industry. He keeps the company moving forward and always has great recommendations from his years of experience.
                                </p>
                                <Link to="/greenwood">
                                <Button className="seeAllWinesBtn" size='small'>
                                    <p className="seeAllWinesText">Read More</p>
                                </Button>
                                </Link>

                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>


                    {/* <Segment style={{ padding: '0em' }} vertical>
                        <Grid celled='internally' columns='equal' stackable>
                            <Grid.Row textAlign='center'>
                                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        Primary Contacts
                </Header>
                                    <p style={{ fontSize: '1.33em' }}>Hiram Simon • hiram@winewise.biz • 510.848.6879
                            <br />
                                        Brian Greenwood • brian@winewise.biz • 510.524.2270
                            </p>
                                </Grid.Column>
                                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        Order Desk
                </Header>
                                    <p style={{ fontSize: '1.33em' }}>
                                     
                                        orders@winewise.biz • 510.473.5482
                                    <br />
                                        <Image avatar src='./images/winecorks.jpg' />
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment> */}


                    <TeamMembersContainer handleOpenModal={this.handleOpenModal} />


                    <SalesTeamModal open={modal} member={currentMember} closeModal={this.handleCloseModal} />

                </Segment>
            </React.Fragment>
        )
    }
}


export default AboutUs;

import React from 'react';
import { Grid, Segment, Header, Icon, Divider, List, Message, Popup} from "semantic-ui-react";


const Announcement = () => {
    return (
        <div style={{marginRight:"30px"}}>
                <Message
      attached
      content='Hang in there!'
      style={{ backgroundColor:"#fcfbf2", fontSize:"1.3em", textAlign:"center"}}
    />
            <Segment className='attached fluid segment' style={{backgroundColor:"#f2edf2"}}>
                <Grid columns={1} >
                    <Grid.Column >
                        <p style={{ textAlign:"left", fontSize:"1.1em"}}>
                        These times too will pass. Never has the business of selling wine seemed more noble! We are doing what we can and we know that you are as well. From what we can tell, our producers have mostly retreated to their vineyards, to enjoy the fresh air and the relative freedom afforded by that environment.

Looking forward, we have not ceased for one second to plan for the resumption of normal business and have an impressive number of orders either on their way from Europe or in preparation for departure soon. Among the producers from whom you can soon expect to see new offerings are López de Heredia, Stéphane Tissot, Aphros, Fílipa Páto, Mas Grand Plagniol, Domaine Aux Moines, Forest-Marié and Tetramythos. When normal life resumes, we want to be in the best possible position to help you. In the meantime, do not hesitate to make our day by passing us an order if you have a need that we can meet.</p>

    <p style={{ textAlign:"right", fontSize:"1.2em"}}>~ Your friends at WineWise</p>                
  
{/* <Header as='h4'>
For our part, these are the steps we have taken in response to this existential threat :
</Header>
<List as='ul'>
    <List.Item as='li' style={{ textAlign:"left"}}>For wines that are already affected by the existing 25% tariff, we have lowered our margin to mitigate the increase. Many of our producers have made a similar gesture of solidarity.</List.Item>
    <List.Item as='li' style={{ textAlign:"left"}}>We have delayed re-ordering certain wines that we can imagine living without for a while until the situation clarifies itself regarding the proposed new tariffs.</List.Item>
    <List.Item as='li' style={{ textAlign:"left"}}>We have tried to rush certain shipments in to beat a possible increase. It is risky, and we can only hope that we have acted quickly enough. It does not help that other importers have had the same bright idea, or that strikes in Europe and adverse weather conditions have impeded this process.</List.Item>
    <List.Item as='li' style={{ textAlign:"left"}}>Fortunately, we still have ample stocks of many lovely wines from all six countries with which we work, all brought in without the added burden of tariffs, which may take on added interest in these difficult times!</List.Item>
</List> */}
                    </Grid.Column>
                </Grid>   
            </Segment>
            
        </div>
    );
};

export default Announcement;
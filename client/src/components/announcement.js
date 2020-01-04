import React from 'react';
import { Grid, Segment, Header, Icon, Divider, List, Message} from "semantic-ui-react";


const Announcement = () => {
    return (
        <div>
                <Message
      attached
      content='A Note on Tariffs...'
      style={{ backgroundColor:"#eddcad", fontSize:"1.3em", textAlign:"center"}}
    />
            <Segment className='attached fluid segment' style={{backgroundColor:"#fff5d9"}}>
                <Grid columns={2} >
                    <Grid.Column >
                        <p style={{ textAlign:"left", fontSize:"1.1em"}}>
                        If you are reading this, you are undoubtedly aware of the <a href="https://www.history.com/news/what-was-the-sword-of-damocles" target = "_blank" rel="noopener noreferrer"target = "_blank" rel="noopener noreferrer" style={{ textDecoration:"none", display:"inline"}}>sword of Damocles</a> hanging over us and all other specialist importers of European wines. We will refrain from commenting upon the government that chooses to imperil long-standing trading relations between friendly states, not to mention the livelihoods of hundreds of thousands of people involved in the wine business, whether as importers, distributors, retailers or producers (to name the most obviously affected groups). We will just encourage you to voice your objections at the following link :
                        </p>
                        <a href="https://www.regulations.gov/document?D=USTR-2019-0003-2518" target = "_blank" rel="noopener noreferrer" >https://www.regulations.gov/document?D=USTR-2019-0003-2518</a>
                    </Grid.Column>
                    <Grid.Column>
<Header as='h4'>
For our part, these are the steps we have taken in response to this existential threat :
</Header>
<List as='ul'>
    <List.Item as='li' style={{ textAlign:"left"}}>For wines that are already affected by the existing 25% tariff, we have lowered our margin to mitigate the increase. Many of our producers have made a similar gesture of solidarity.</List.Item>
    <List.Item as='li' style={{ textAlign:"left"}}>We have delayed re-ordering certain wines that we can imagine living without for a while until the situation clarifies itself regarding the proposed new tariffs.</List.Item>
    <List.Item as='li' style={{ textAlign:"left"}}>We have tried to rush certain shipments in to beat a possible increase. It is risky, and we can only hope that we have acted quickly enough. It does not help that other importers have had the same bright idea, or that strikes in Europe and adverse weather conditions have impeded this process.</List.Item>
    <List.Item as='li' style={{ textAlign:"left"}}>Fortunately, we still have ample stocks of many lovely wines from all six countries with which we work, all brought in without the added burden of tariffs, which may take on added interest in these difficult times!</List.Item>
</List>
                    </Grid.Column>
                </Grid>   
                <Divider vertical  >
                <i class="circle" style={{ color: '#2f3623'}}></i>
                </Divider>
            </Segment>
            
        </div>
    );
};

export default Announcement;
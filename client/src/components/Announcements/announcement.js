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
            <Segment className='attached fluid segment' style={{backgroundColor:"#fcfbf2"}}>
                <Grid columns={1} >
                    <Grid.Column >
                        <Grid.Row>
                        <p style={{ textAlign:"left", fontSize:"1.1em"}}>
                        These times too will pass. Never has the business of selling wine seemed more noble! We are doing what we can and we know that you are as well. From what we can tell, our producers have mostly retreated to their vineyards, to enjoy the fresh air and the relative freedom afforded by that environment.

Looking forward, we have not ceased for one second to plan for the resumption of normal business and have an impressive number of orders either on their way from Europe or in preparation for departure soon. Among the producers from whom you can soon expect to see new offerings are López de Heredia, Stéphane Tissot, Aphros, Fílipa Páto, Mas Grand Plagniol, Domaine Aux Moines, Forest-Marié and Tetramythos. When normal life resumes, we want to be in the best possible position to help you. In the meantime, do not hesitate to make our day by passing us an order if you have a need that we can meet.</p>

    <p style={{ textAlign:"right", fontSize:"1.2em"}}>~ Your friends at WineWise</p>                
                        </Grid.Row>
                        {/* <Grid.Row>
                            <Grid.Column>
                                <Segment>Blah!</Segment>
                            </Grid.Column>
                        </Grid.Row> */}
                    </Grid.Column>
                </Grid>   
            </Segment>
            
        </div>
    );
};

export default Announcement;
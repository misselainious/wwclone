import React from 'react';
import { Grid, Segment, Message, Button, Image} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Announcement = () => {
    return (
        <div style={{marginRight:"30px"}}>
                <Message
      attached
      content='WineWise Welcomes Paterianakis!'
      style={{ backgroundColor:"#fcfbf2", fontSize:"1.3em", textAlign:"center"}}
    />
            <Segment className='attached fluid segment' style={{backgroundColor:"#fcfbf2"}}>
                <Grid columns={1} >
                    <Grid.Column >
                        <Grid.Row>
                            <Image src="../../images/group/HPA.png" size="medium" centered></Image>
                        <p style={{ textAlign:"left", fontSize:"1.1em", marginTop:"10px"}}>
                        Established in 1990, this was the first certified organic estate in Crete. With its 4000 year-old wine culture, this magnificent island offers no shortage of unique indigenous grape varieties, which are what we have chosen to feature here. The winery itself is intelligently constructed into a hillside, which offers natural insulation and the valuable possibility to move everything by gravity. Giorgios Paterianakis makes an impressive array of wines for a modestly sized estate. Our initial selection is two whites and a red. 
                        </p>
                        <div style={{textAlign: 'center'}}>
                        <Link to= {'/producerdetails/Paterianakis'}>
                      <Button style={{textAlign: 'center'}}>View Paterianakis' Page</Button>
                      </Link>
                      </div>
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
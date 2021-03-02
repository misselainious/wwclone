import React from 'react';
import { Grid, Segment, Message, Button, Image} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Announcement = () => {
    return (
        <div style={{marginRight:"30px"}}>
                <Message
      attached
      content='WineWise Welcomes Antonio Madeira!'
      style={{ backgroundColor:"#fcfbf2", fontSize:"1.2em", textAlign:"center"}}
    />
            <Segment className='attached fluid segment' style={{backgroundColor:"#fcfbf2"}}>
                <Grid columns={1} >
                    <Grid.Column >
                        <Grid.Row>
                            <Image src="../../images/group/PAM.png" size="medium" centered></Image>
                        <p style={{ textAlign:"left", fontSize:"1.1em", marginTop:"10px"}}>
                        When Vasco Croft of Aphros recommended António to us, he described him as “a young brilliant producer who is making a unique job with reaching old vines and terroirs, using organic farming and biodynamics.” He further stated that he thought these the best wines in the Dão today, and certainly the most mineral.
                        </p>
                        <div style={{textAlign: 'center'}}>
                        <Link to= {'/producerdetails/Antonio Madeira'}>
                      <Button style={{textAlign: 'center'}}>View Antonio Madeira's Page</Button>
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
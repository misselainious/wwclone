import React from 'react';
import { Grid, Segment, Message, Button, Image} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Announcement = () => {
    return (
        <div style={{marginRight:"30px"}}>
                <Message
      attached
      content='WineWise Welcomes Herdade do Mouchão!'
      style={{ backgroundColor:"#fcfbf2", fontSize:"1.2em", textAlign:"center"}}
    />
            <Segment className='attached fluid segment' style={{backgroundColor:"#fcfbf2"}}>
                <Grid columns={1} >
                    <Grid.Column >
                        <Grid.Row>
                            <Image src="../../images/group/PMO.png" size="medium" centered></Image>
                        <p style={{ textAlign:"left", fontSize:"1.1em", marginTop:"10px"}}>
                        It is no exaggeration to say that we have been interested in this great estate since we began importing from Portugal over a decade ago. However, we were only recently able to taste their wines and connect the dots between the press accolades, their iconic status in Portugal and the wines themselves. It turns out that the oldest active winery in the Alentejo, beloved of luminaries as diverse as Jancis Robinson, Sarah Ahmed and Hugh Johnson, makes not just the world-class reds we were hoping to find, but stunning, seriously age-worthy whites as well.
                         </p>
                        <div style={{textAlign: 'center'}}>
                        <Link to= {'/producerdetails/Herdade do Mouchão'}>
                      <Button style={{textAlign: 'center'}}>View Herdade do Mouchão's Page</Button>
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
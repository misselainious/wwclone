import React from 'react';
import { Grid, Segment, Header, Icon, Divider, Image, List, Message, Popup} from "semantic-ui-react";


const Announcement2 = () => {
    return (
        <div style={{marginRight:"30px", marginTop:"40px"}}>
 
            <Segment style={{backgroundColor:"#f6f3f7"}}>
                <Grid columns={1} >
                    <Grid.Column >
                        <Grid.Row>

                        <p style={{ textAlign:"center", fontSize:"2.2em"}}>Thank You!</p>    
                        <p style={{ textAlign:"center", fontSize:"1.1em"}}>We thank all our customers who enabled us to donate </p> 
                        <div style={{ textAlign:"center", marginBottom:"20px"}}>
                        <p style={{ textAlign:"center", display:"inline", fontSize:"2.8em"}}> $1780</p>
                        <p style={{ textAlign:"center", display:"inline", fontSize:"1.8em"}}> to</p>
                       <p style={{ textAlign:"center", fontSize:"1.8em", display:"inline", color:"#e2b007"}}> Color</p>
                       <p style={{ textAlign:"center", fontSize:"1.8em", display:"inline", color:"#fa9571"}}> Of</p>
                       <p style={{ textAlign:"center", fontSize:"1.8em", display:"inline", color:"#f85218"}}> Change</p> <br></br>
                       </div>
                       <p style={{ textAlign:"center", fontSize:"1.1em"}}> for sales made and/or delivered in the week of June 8. </p>
                       <p style={{ textAlign:"center", fontSize:"2.15em", marginBottom:"20px"}}> Black Lives Matter!</p>

               
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>
                                    <a href={'https://colorofchange.org/'}>
                                    <Image centered src={`https://s3.us-west-1.wasabisys.com/wwassets/offers/coc.png`}></Image>
                                    <p style={{textAlign:"center", marginTop:"15px"}}>www.colorofchange.org</p>
                                    </a>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>   
            </Segment>

            
            
        </div>
    );
};

export default Announcement2;
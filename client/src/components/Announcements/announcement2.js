import React from 'react';
import { Grid, Segment, Header, Icon, Divider, Image, List, Message, Popup} from "semantic-ui-react";


const Announcement2 = () => {
    return (
        <div style={{marginRight:"30px", marginTop:"40px"}}>
 
            <Segment style={{backgroundColor:"#f6f3f7"}}>
                <Grid columns={1} >
                    <Grid.Column >
                        <Grid.Row>

                         
                        <p style={{ textAlign:"center", fontSize:"1.6em"}}> <Icon name='truck' size='large' /> A note about shipping charges...</p> 
                        <br />
                        {/* <div style={{ textAlign:"center", marginBottom:"20px"}}>
                        <p style={{ textAlign:"center", display:"inline", fontSize:"2.8em"}}> $1780</p>
                        <p style={{ textAlign:"center", display:"inline", fontSize:"1.8em"}}> to</p>
                       <p style={{ textAlign:"center", fontSize:"1.8em", display:"inline", color:"#e2b007"}}> Color</p>
                       <p style={{ textAlign:"center", fontSize:"1.8em", display:"inline", color:"#fa9571"}}> Of</p>
                       <p style={{ textAlign:"center", fontSize:"1.8em", display:"inline", color:"#f85218"}}> Change</p> <br></br>
                       </div> */}
                       <p style={{ textAlign:"center", fontSize:"1.1em"}}> After long and deep consideration, we have reluctantly come up with a new scale of supplementary charges in light of Zephyr's implacable decision to institute a minimum charge on all deliveries.</p>
                       <p style={{ textAlign:"center", fontSize:"1.8em", color:"#ce633a"}}> We thank you for your understanding and continued support.</p> 

                      <List bulleted style={{ textAlign: "center", fontSize: "1.2em", color:"#202428"}}>
                          <List.Item>1 case deliveries - $15 surcharge</List.Item>
                          <List.Item>2 case deliveries - $10 surcharge</List.Item>
                      </List>
                      
                       <br />

               
                        </Grid.Row>
                       
                    </Grid.Column>
                </Grid>   
            </Segment>

            
            
        </div>
    );
};

export default Announcement2;
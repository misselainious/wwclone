import React from 'react';
import { Grid, Segment, Message, Button, Image, Responsive} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Announcement = () => {
    return (
        <div style={{marginRight:"30px"}}>

            {/* Only shows if on mobile */}
<Responsive maxWidth={767} >
                <Message
      attached
      content='Our newest Greek wines are here!!'
      style={{ backgroundColor:"#fcfbf2", fontSize:"1.2em", textAlign:"center"}}
    />
            <Segment className='attached fluid segment' style={{backgroundColor:"#fff"}}>
                <Grid columns={1} >
                    {/* <Grid.Row>
                        <p style={{ textAlign:"center", fontSize:"1.6em", marginTop:"10px"}}>
                        Explore these producers: 
                        </p>
                        </Grid.Row> */}
                    
                    <Grid.Row>


                    <Grid.Column >
                       
                    <Grid.Row centered style={{paddingBottom: "20px"}}>
                    <div style={{textAlign: 'center'}}>
                    <Image src="../../images/group/HMW.png" size="small" centered></Image>
                    <Link to= {'/producerdetails/Monemvasia'}>
                    <Button style={{textAlign: 'center'}}>View Monemvasia's Page</Button>
                    </Link>
                    </div>
                    </Grid.Row>

                    <Grid.Row centered style={{paddingBottom: "20px"}}>
                    <div style={{textAlign: 'center'}}>
                    <Image src="../../images/group/HTE.png" size="small" centered></Image>
                    <Link to= {'/producerdetails/Tetramythos'}>
                    <Button style={{textAlign: 'center'}}>View Tetramythos' Page</Button>
                    </Link>
                    </div>
                    </Grid.Row>

                    <Grid.Row centered style={{paddingBottom: "20px"}}>
                    <div style={{textAlign: 'center'}}>
                    <Image src="../../images/group/HPA.png" size="small" centered></Image>
                    <Link to= {'/producerdetails/Paterianakis'}>
                    <Button style={{textAlign: 'center'}}>View Paterianakis' Page</Button>
                    </Link>
                    </div>
                    </Grid.Row>

              
                    <Grid.Row centered style={{paddingBottom: "20px"}}>
                    <div style={{textAlign: 'center'}}>
                    <Image src="../../images/group/HKO.png" size="small" centered></Image>
                    <Link to= {'/producerdetails/Koukos'}>
                    <Button style={{textAlign: 'center'}}>View Koukos' Page</Button>
                    </Link>
                    </div>
                    </Grid.Row>

                    <Grid.Row centered style={{paddingBottom: "20px"}}>
                    <div style={{textAlign: 'center'}}>
                    <Image src="../../images/group/HPM.png" size="small" centered></Image>
                    <Link to= {'/producerdetails/Pateromichelakis'}>
                    <Button style={{textAlign: 'center'}}>View Pateromichelakis' Page</Button>
                    </Link>
                    </div>
                    </Grid.Row>

                    <Grid.Row centered style={{paddingBottom: "20px"}}>
                    <div style={{textAlign: 'center'}}>
                    <Image src="../../images/group/HZO.png" size="small" centered></Image>
                    <Link to= {'/producerdetails/Zoinos'}>
                    <Button style={{textAlign: 'center'}}>View Zoinos' Page</Button>
                    </Link>
                    </div>
                    </Grid.Row>

                    </Grid.Column>

</Grid.Row>
                </Grid>   
            </Segment>
            </Responsive>      



             {/* Only shows if on Desktop */}
<Responsive minWidth={768} >
                <Message
      attached
      content='Our newest Greek wines are here!!'
      style={{ backgroundColor:"#fcfbf2", fontSize:"1.2em", textAlign:"center"}}
    />
            <Segment className='attached fluid segment' style={{backgroundColor:"#fff"}}>
                <Grid columns={2} >
                    {/* <Grid.Row>
                        <p style={{ textAlign:"center", fontSize:"1.6em", marginTop:"10px"}}>
                        Explore these producers: 
                        </p>
                        </Grid.Row> */}
                    
                    <Grid.Row>

{/* Begin Column 1 */}
                    <Grid.Column >
                       
                    <Grid.Row centered style={{paddingBottom: "20px"}}>
                    <div style={{textAlign: 'center'}}>
                    <Image src="../../images/group/HMW.png" size="small" centered></Image>
                    <Link to= {'/producerdetails/Monemvasia'}>
                    <Button style={{textAlign: 'center'}}>View Monemvasia's Page</Button>
                    </Link>
                    </div>
                    </Grid.Row>

                    <Grid.Row centered style={{paddingBottom: "20px"}}>
                    <div style={{textAlign: 'center'}}>
                    <Image src="../../images/group/HTE.png" size="small" centered></Image>
                    <Link to= {'/producerdetails/Tetramythos'}>
                    <Button style={{textAlign: 'center'}}>View Tetramythos' Page</Button>
                    </Link>
                    </div>
                    </Grid.Row>

                    <Grid.Row centered style={{paddingBottom: "20px"}}>
                    <div style={{textAlign: 'center'}}>
                    <Image src="../../images/group/HPA.png" size="small" centered></Image>
                    <Link to= {'/producerdetails/Paterianakis'}>
                    <Button style={{textAlign: 'center'}}>View Paterianakis' Page</Button>
                    </Link>
                    </div>
                    </Grid.Row>

                    </Grid.Column>
{/* End Column 1 */}

{/* Column 2 */}
                    <Grid.Column>
                    <Grid.Row centered style={{paddingBottom: "20px"}}>
                    <div style={{textAlign: 'center'}}>
                    <Image src="../../images/group/HKO.png" size="small" centered></Image>
                    <Link to= {'/producerdetails/Koukos'}>
                    <Button style={{textAlign: 'center'}}>View Koukos' Page</Button>
                    </Link>
                    </div>
                    </Grid.Row>

                    <Grid.Row centered style={{paddingBottom: "20px"}}>
                    <div style={{textAlign: 'center'}}>
                    <Image src="../../images/group/HPM.png" size="small" centered></Image>
                    <Link to= {'/producerdetails/Pateromichelakis'}>
                    <Button style={{textAlign: 'center'}}>View Pateromichelakis' Page</Button>
                    </Link>
                    </div>
                    </Grid.Row>

                    <Grid.Row centered style={{paddingBottom: "20px"}}>
                    <div style={{textAlign: 'center'}}>
                    <Image src="../../images/group/HZO.png" size="small" centered></Image>
                    <Link to= {'/producerdetails/Zoinos'}>
                    <Button style={{textAlign: 'center'}}>View Zoinos' Page</Button>
                    </Link>
                    </div>
                    </Grid.Row>

                    </Grid.Column>

{/* End Column 2 */}
</Grid.Row>
                </Grid>   
            </Segment>
            </Responsive>      
        </div>
    );
};

export default Announcement;
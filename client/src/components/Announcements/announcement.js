import React from 'react';
import { Grid, Segment, Message, Button, Image} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Announcement = () => {
    return (
        <div style={{marginRight:"30px"}}>
                <Message
      attached
      content='WineWise Welcomes Lacourte-Godbillion!'
      style={{ backgroundColor:"#fcfbf2", fontSize:"1.2em", textAlign:"center"}}
    />
            <Segment className='attached fluid segment' style={{backgroundColor:"#fcfbf2"}}>
                <Grid columns={1} >
                    <Grid.Column >
                        <Grid.Row>
                            <Image src="../../images/group/KLG.png" size="medium" centered></Image>
                        <p style={{ textAlign:"left", fontSize:"1.1em", marginTop:"10px"}}>
                        on it for some time now. Géraldine Lacourte and her husband Richard Desvignes took it over from her parents in 2007. They left the co-op in 2012, began an organic conversion in 2017 (certified since 2020) and are now almost finished with the further conversion to biodynamic viticulture. They present a compelling range of wines designed to showcase the surprisingly myriad possibilities offered by their 1er Cru vineyards in Écueil (which is coincidentally the home of Gracianne Marié, of Forest-Marié). The house-style might be described as extroverted, with most of the wines revelling in their generous fruit endowment and effortlessly supporting their prevalent dryness. 
                        </p>
                        <div style={{textAlign: 'center'}}>
                        <Link to= {'/producerdetails/Lacourte-Godbillon'}>
                      <Button style={{textAlign: 'center'}}>View Lacourte-Godbillion's Page</Button>
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
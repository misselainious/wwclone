import React from 'react';
import { Grid, Segment, Header, Icon, Divider, List, Message, Popup, Embed} from "semantic-ui-react";


const Videos = () => {
    return (
        <div style={{margin:"30px"}}>
   
   {/* Filipa Pato Video */}
   <Segment className='attached fluid segment' style={{backgroundColor:"#fcfbf2", margin: '10px', textAlign:"center"}}>
       <Header>Fílipa Páto</Header>
   <Embed
   id='_-Jj8MF2Ruw/1'
    placeholder={'https://img.youtube.com/vi/_-Jj8MF2Ruw/1.jpg'}
    source='youtube'
  />
  </Segment>


     {/* Chenin Video */}
     <Segment className='attached fluid segment' style={{backgroundColor:"#fcfbf2", margin: '10px', textAlign:"center"}}>
        <Header>Chenin Blanc & The Loire Valley</Header> 
     <Embed
     id='zK4GGISFKJY/0'
    placeholder={'https://img.youtube.com/vi/zK4GGISFKJY/0.jpg'}
    source='youtube'
  />
            </Segment>
        </div>
    );
};

export default Videos;
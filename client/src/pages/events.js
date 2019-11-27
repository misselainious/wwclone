import React, { Component } from "react";
import API from "../utils/API";
import Mags from  '../pdf_files/MagnumHalf.pdf'
import { Header, Table, Dropdown, Grid, Image, Button, List, Segment, Icon, Message, Responsive, Card} from 'semantic-ui-react'
import SD from '../pdf_files/SD.pdf'
import POLZ from '../pdf_files/PolzOffer.pdf'
import PA from '../pdf_files/PA.png'
import POSSI from '../pdf_files/Possi.png'
import MID from '../pdf_files/the.png'
import MAX from '../pdf_files/max.png'
import Winecard from "../components/WineCard"
import { Link } from "react-router-dom";

class EventsTable extends Component {
  state = {
    producer: {},
    wines: []
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    API.getProducer('Polz')
      .then(res => this.setState({ producer: res.data, press: res.data.Press }))
      .then(   
    API.getWines()
      .then(res => {
        let data = res.data
        data = data.filter((item) => item.Producer === this.state.producer.Producer)
        this.setState({ wines: data })
      })
      )
      .catch(err => console.log(err))
  }

  render() {

    const { producer } = this.state;
    delete producer._id
    const producerObjKeys = Object.keys(producer).filter(key => key!=='URL');
    let producerWines = this.state.wines
    let techSheet ='../pdf_files/PolzOffer.pdf'

    return (
      <div>
        {/* DESKTOP */}
<Responsive minWidth={768}>
<Grid centered>
  <Grid.Row>
    <Grid.Column >
      <Header  as='h1' style={{marginTop: '80px', textAlign: 'center', fontSize:'2.5em'}}>Polz Pre-Arrival Offer</Header>
    </Grid.Column>
  </Grid.Row>

  

<Grid.Row>
    <Grid.Column width={3}  style={{marginRight: '20px'}}>
    <Segment style={{ backgroundColor: '#b4bbc6', maxHeight: '60px'}}>
  <Dropdown text='Printable Polz Offer PDF'> 
    <Dropdown.Menu >

      <Dropdown.Item text='View in Browser' href='https://s3.us-west-1.wasabisys.com/wwassets/offers/Polz Offer.pdf' target = "_blank" rel="noopener noreferrer" ><Icon name='file pdf outline icon' /> View in Browser</Dropdown.Item>

      <Dropdown.Item text='Download' download href='https://s3.us-west-1.wasabisys.com/wwassets/offers/Polz Offer.pdf'> <Icon name='download icon' /> Download</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown> 
  </Segment>
    </Grid.Column>
  </Grid.Row>


    <Grid.Row>
    
      <Grid.Column width={4} >
        <Image src={PA} style={{ marginLeft: '20px'}} />
      </Grid.Column>
    
      <Grid.Column width={8} style={{ marginLeft:'30px'}}>
        <Segment style={{fontSize:'.9em'}}>
          <p>When we at WineWise established ourselves as Austrian pioneers in California, way back in the last millennium, one of the first producers in our portfolio was Polz, then as now deemed one of the “Big Three” of Styria. We were therefore overjoyed to re-connect with this marvelous family last year and to be appointed their first-time California direct importer. In the succeeding years, the brothers Erich and Walter have handed over the reins to Erich’s son Christoph, who has gone from strength to strength. They have also expanded into other sectors of Steiermark besides their native Südsteiermark region, have bought the famed Tscheppe winery with its remarkable Sekt-making facilities and attached superb hotel-restaurant, and even taken over an estate in the Thermenregion, which they have conferred to the care of another son, Erich Jr., whom some of you may remember meeting when he was an amazingly poised 15 year-old accompanying his Aunt Maria on a tasting tour.</p>
          <p>Through all these changes and expansion, the quality-concentration that is at the estate’s core has only become stronger.  Last year, we introduced a range of wines designed to showcase Polz’s remarkable performance at the entry-to-mid range of the market. This year, we have decided to boldly go where none before have ventured and bring to you the simply extraordinary Sauvignons that they conjure from their best vineyards in three of the different sub-districts of Südsteiermark where they have their holdings. Each one of these single-vineyard wines presents a clear and distinct face of this most rewarding variety, which finds in Südsteiermark a home that is at least as apt as Sancerre or Pouilly Fumé. 2017 was an utterly exceptional vintage for these wines, which were aged patiently until ready for release.</p>
          <p>By an uncanny coincidence, a few months after we selected these wines, they were reviewed by Stephan Reinhardt of The Wine Advocate. As you can see below, he shares our extremely high opinion of them.</p>
        </Segment>
      </Grid.Column>
    </Grid.Row>

    {/* PA Table */}

  <Grid.Row centered>
    <Grid.Column width={12}>
      <Table celled>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell colSpan='2' style={{fontSize: '1.3em', backgroundColor:"#fcf8f0"}}>2017  Sauvignon Blanc “Czamilla” Ried Czamillonberg</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' style={{width: '140px', color:'#575655'}}>Regular Price</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' style={{width: '140px'}}>Pre-Arrival Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell colSpan='2' style={{fontSize: '1em', color:'#575655'}}>(from Leutschach – grown in Opok, a singular composite of marl and chalk)</Table.Cell>
            <Table.Cell textAlign='center' style={{color:'#575655'}}>$208/12</Table.Cell>
            <Table.Cell textAlign='center' > <strong>$180/12</strong></Table.Cell>
          </Table.Row>
          
          <Table.Row>
            <Table.Cell style={{width:'180px', height:'180px'}}> <Image size='medium' src={POSSI} style={{ marginLeft: '20px'}} /></Table.Cell>
            <Table.Cell colSpan='5' style={{backgroundColor:'#e8dcd8'}}>Fermented and aged in large used oak, the 2017 Sauvignon Blanc Czamilla is very clear, ripe and intense on the nose, with aromas of super ripe, stewed white apples and a touch of melted butter. Very fine on the nose! Pure, tight and straight on the palate, this is a tightly woven yet very elegant Sauvignon Blanc with a stimulating salty-piquant  finish. This is excellent quality that needs a year or two to develop all its talents. Tasted July 2018.</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Grid.Column>
  </Grid.Row>

  <Grid.Row centered>
    <Grid.Column width={12}>
      <Table celled>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell colSpan='2' style={{fontSize: '1.3em', backgroundColor:"#fcf8f0"}}>2017  Sauvignon Blanc Ried Pössnitzberg</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' style={{width: '140px', color:'#575655'}}>Regular Price</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' style={{width: '140px'}}>Pre-Arrival Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell colSpan='2' style={{fontSize: '1em', color:'#575655'}}>(from Leutschach – grown in Opok)</Table.Cell>
            <Table.Cell textAlign='center' style={{color:'#575655'}}>$208/12</Table.Cell>
            <Table.Cell textAlign='center' > <strong>$180/12</strong></Table.Cell>
          </Table.Row>
          
          <Table.Row>
            <Table.Cell style={{width:'180px', height:'180px'}}> <Image size='medium' src={POSSI} style={{ marginLeft: '20px'}} /></Table.Cell>
            <Table.Cell colSpan='5' style={{backgroundColor:'#e8dcd8'}}>From calcareous marl soils and vinifed for one year in large oak vats and another six months in stainless steel, the 2017 Ried Pössnitzberg Leutschach Sauvignon Blanc is very elegant and slightly flinty on the ripe and calm nose with sweetish spicy notes. Round and intense on the palate, with good mineral grip and structure, this is a pure and fine Sauvignon with a remarkably pure and refreshing, forward and powerful, iodine finish. This is excellent terroir wine, tight and fresh and frm and salty, and it is only slowly opening. Think of Chablis, and you come pretty close. Tasted in May 2019 from lot L-17 (which was bottled in May last year).</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Grid.Column>
  </Grid.Row>


  <Grid.Row centered>
    <Grid.Column width={12}>
      <Table celled>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell colSpan='2' style={{fontSize: '1.3em', backgroundColor:"#fcf8f0"}}>2018  Sauvignon Blanc  “Therese”  Ried Theresienhöhe</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' style={{width: '140px', color:'#575655'}}>Regular Price</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' style={{width: '140px'}}>Pre-Arrival Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell colSpan='2' style={{fontSize: '1em', color:'#575655'}}>(from Kitzeck-Sausal – grown in slate)</Table.Cell>
            <Table.Cell textAlign='center' style={{color:'#575655'}}>$120/6</Table.Cell>
            <Table.Cell textAlign='center' > <strong>$108/6</strong></Table.Cell>
          </Table.Row>
          
          <Table.Row>
            <Table.Cell style={{width:'180px', height:'180px'}}> <Image size='medium' src={MID} style={{ marginLeft: '20px'}} /></Table.Cell>
            <Table.Cell colSpan='5' style={{backgroundColor:'#e8dcd8'}}>From the coolest Polz vineyard at 500 meters altitude in the Kitzeck-Sausal subregion, the stainless steel-fermented 2018 Ried Theresienhöhe Sauvignon Blanc Therese is ripe and concentrated on the sharp, precise and flinty, attractively reductive nose that displays ripe citrus fruit and gooseberry aromas at this stage. Lush and intense on the silky-textured, crystalline and full-bodied palate, this is a beautifully elegant, aromatic and juicy Therese with fine tannins, salts and voluptuous mango and passion fruit flavors, whereas the slatey salinity rejuvenates this highly promising Sauvignon that could be a Riesling as well. Terrific! Release date: September this year. Tasted as a barrel sample from the lees in May 2019.</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Grid.Column>
  </Grid.Row>

  <Grid.Row centered>
    <Grid.Column width={12}>
      <Table celled>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell colSpan='2' style={{fontSize: '1.3em', backgroundColor:"#fcf8f0"}}>2017  Sauvignon Blanc Ried Hochgrassnitzberg</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' style={{width: '140px', color:'#575655'}}>Regular Price</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' style={{width: '140px'}}>Pre-Arrival Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell colSpan='2' style={{fontSize: '1em', color:'#575655'}}>(from Spielfeld – clay and limestone; this is Polz’s most famous wine)</Table.Cell>
            <Table.Cell textAlign='center' style={{color:'#575655'}}>$180/6</Table.Cell>
            <Table.Cell textAlign='center' > <strong>$160/6</strong></Table.Cell>
          </Table.Row>
          
          <Table.Row>
            <Table.Cell style={{width:'180px', height:'180px'}}> <Image size='medium' src={MAX} style={{ marginLeft: '20px'}} /></Table.Cell>
            <Table.Cell colSpan='5' style={{backgroundColor:'#e8dcd8'}}>From 30- and 42-year-old vines and vinified in traditional 20- and 25-hectoliter oak vats for one year and another six months on the fine lees in stainless steel, the 2017 Ried Hochgrassnitzberg Sauvignon Blanc HG –G STK– displays a clear, refined and crystalline, spicy/herbal nose with yeasty notes and elegant, discreet and quite ripe fruit. On the palate, this is a round, lush and intense, charmingly fruity and very elegant HG Sauvignon with a lot of power, grip and complexity. This is a great, complex, crystalline, salty, tightly woven and very persistent Sauvignon with a great character. Tasted in May 2019, which was four weeks after the bottling.</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Grid.Column>
  </Grid.Row>

  <Grid.Row centered style={{marginTop:'35px'}}>
    <Grid.Column width={6}>
    <a href="mailto:orders@winewise.biz?subject=WineWise Polz PA Order" target="_blank" >
    <Message style={{textAlign:'center'}}
    icon='envelope outline'
    header='Click here to email us with your Pre-Arrival order!'
  >

  </Message>
  </a>
    </Grid.Column>
  </Grid.Row>

  <Header  as='h3' style={{marginTop: '80px', textAlign: 'center', fontSize:'2.5em'}}>Polz Wines Currently In Stock</Header>
  <Grid.Row centered>
   <Grid.Column width={16}>
        {producerWines.length ? (
            <List >
              <Grid centered >
                <Grid.Row columns={3}>
                  {producerWines.map(wine => (
                    <Winecard header={wine.Wine} producer={wine.Producer} region={wine.Region} country={wine.Country} wineid={wine._id} Code={wine.Code} key={wine._id} url={wine.URL} />
                  ))}
                </Grid.Row>
              </Grid>
            </List>
            ) : (
                <h3>{this.state.isLoading ? "loading..." : "No results to display"}</h3>
              )}

  </Grid.Column>
  </Grid.Row>

  <Grid.Row>
    <Grid.Column width={3} >
    <Link to="/producerdetails/Polz" >
<Button style={{backgroundColor:'#e8dcd8', color:"#3d4869"}}>More Information about Polz</Button>
</Link>
    </Grid.Column>
</Grid.Row>

</Grid>
</Responsive>

{/* MOBILE */}
<Responsive maxWidth={767} >
<Grid>
  <Grid.Row >
    <Grid.Column >
      <Header  as='h1' style={{marginTop: '40px', textAlign: 'center', fontSize:'2.5em'}}>Polz Pre-Arrival Offer</Header>
    </Grid.Column>
  </Grid.Row>

    <Grid.Row centered>
      <Grid.Column width={12} >
        <Image src={PA} />
      </Grid.Column>
      </Grid.Row>
    
      <Grid.Row centered>
    <Grid.Column width={6}  style={{marginRight: '20px'}}>
    <Segment style={{ backgroundColor: '#b4bbc6', maxHeight: '60px'}}>
  <Dropdown text='Printable Polz Offer PDF'> 
    <Dropdown.Menu >

      <Dropdown.Item text='View in Browser' href='https://s3.us-west-1.wasabisys.com/wwassets/offers/Polz Offer.pdf' target = "_blank" rel="noopener noreferrer" ><Icon name='file pdf outline icon' /> View in Browser</Dropdown.Item>

      <Dropdown.Item text='Download' download href='https://s3.us-west-1.wasabisys.com/wwassets/offers/Polz Offer.pdf'> <Icon name='download icon' /> Download</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown> 
  </Segment>
    </Grid.Column>
  </Grid.Row>

    <Grid.Row centered>
      <Grid.Column width={14}>
        <Segment style={{fontSize:'.8em'}}>
          <p>When we at WineWise established ourselves as Austrian pioneers in California, way back in the last millennium, one of the first producers in our portfolio was Polz, then as now deemed one of the “Big Three” of Styria. We were therefore overjoyed to re-connect with this marvelous family last year and to be appointed their first-time California direct importer. In the succeeding years, the brothers Erich and Walter have handed over the reins to Erich’s son Christoph, who has gone from strength to strength. They have also expanded into other sectors of Steiermark besides their native Südsteiermark region, have bought the famed Tscheppe winery with its remarkable Sekt-making facilities and attached superb hotel-restaurant, and even taken over an estate in the Thermenregion, which they have conferred to the care of another son, Erich Jr., whom some of you may remember meeting when he was an amazingly poised 15 year-old accompanying his Aunt Maria on a tasting tour.</p>
          <p>Through all these changes and expansion, the quality-concentration that is at the estate’s core has only become stronger.  Last year, we introduced a range of wines designed to showcase Polz’s remarkable performance at the entry-to-mid range of the market. This year, we have decided to boldly go where none before have ventured and bring to you the simply extraordinary Sauvignons that they conjure from their best vineyards in three of the different sub-districts of Südsteiermark where they have their holdings. Each one of these single-vineyard wines presents a clear and distinct face of this most rewarding variety, which finds in Südsteiermark a home that is at least as apt as Sancerre or Pouilly Fumé. 2017 was an utterly exceptional vintage for these wines, which were aged patiently until ready for release.</p>
          <p>By an uncanny coincidence, a few months after we selected these wines, they were reviewed by Stephan Reinhardt of The Wine Advocate. As you can see below, he shares our extremely high opinion of them.</p>
        </Segment>
      </Grid.Column>
    </Grid.Row>

<Grid.Row>
  <Grid.Column>
    <List >
              <Grid centered >
                <Grid.Row columns={3}>
               
                <Card>
    <Card.Content header='2017  Sauvignon Blanc “Czamilla” Ried Czamillonberg'/>
    <Card.Content  style={{fontSize:".75em"}}
    description='Fermented and aged in large used oak, the 2017 Sauvignon Blanc Czamilla is very clear, ripe and intense on the nose, with aromas of super ripe, stewed white apples and a touch of melted butter. Very fine on the nose! Pure, tight and straight on the palate, this is a tightly woven yet very elegant Sauvignon Blanc with a stimulating salty-piquant  finish. This is excellent quality that needs a year or two to develop all its talents. Tasted July 2018.' />
    <Image centered size='tiny' src={POSSI}  />
    <Card.Content extra >
      Reg. Price $208/12 <strong> PA Price $180/12</strong>
    </Card.Content>
  </Card>

  <Card>
    <Card.Content header='2017  Sauvignon Blanc Ried Pössnitzberg'/>
    <Card.Content  style={{fontSize:".75em"}}
    description='From calcareous marl soils and vinifed for one year in large oak vats and another six months in stainless steel, the 2017 Ried Pössnitzberg Leutschach Sauvignon Blanc is very elegant and slightly flinty on the ripe and calm nose with sweetish spicy notes. Round and intense on the palate, with good mineral grip and structure, this is a pure and fine Sauvignon with a remarkably pure and refreshing, forward and powerful, iodine finish. This is excellent terroir wine, tight and fresh and frm and salty, and it is only slowly opening. Think of Chablis, and you come pretty close. Tasted in May 2019 from lot L-17 (which was bottled in May last year).' />
    <Image centered size='tiny' src={POSSI}  />
    <Card.Content extra >
      Reg. Price $208/12 <strong> PA Price $180/12</strong>
    </Card.Content>
  </Card>

  <Card>
    <Card.Content header='2018  Sauvignon Blanc  “Therese”  Ried Theresienhöhe'/>
    <Card.Content  style={{fontSize:".75em"}}
    description='From the coolest Polz vineyard at 500 meters altitude in the Kitzeck-Sausal subregion, the stainless steel-fermented 2018 Ried Theresienhöhe Sauvignon Blanc Therese is ripe and concentrated on the sharp, precise and flinty, attractively reductive nose that displays ripe citrus fruit and gooseberry aromas at this stage. Lush and intense on the silky-textured, crystalline and full-bodied palate, this is a beautifully elegant, aromatic and juicy Therese with fine tannins, salts and voluptuous mango and passion fruit flavors, whereas the slatey salinity rejuvenates this highly promising Sauvignon that could be a Riesling as well. Terrific! Release date: September this year. Tasted as a barrel sample from the lees in May 2019.' />
    <Image centered size='tiny' src={MID}  />
    <Card.Content extra >
      Reg. Price $120/6 <strong> PA Price $108/6</strong>
    </Card.Content>
  </Card>


  <Card>
    <Card.Content header='2017  Sauvignon Blanc Ried Hochgrassnitzberg'/>
    <Card.Content  style={{fontSize:".75em"}}
    description='From 30- and 42-year-old vines and vinified in traditional 20- and 25-hectoliter oak vats for one year and another six months on the fine lees in stainless steel, the 2017 Ried Hochgrassnitzberg Sauvignon Blanc HG –G STK– displays a clear, refined and crystalline, spicy/herbal nose with yeasty notes and elegant, discreet and quite ripe fruit. On the palate, this is a round, lush and intense, charmingly fruity and very elegant HG Sauvignon with a lot of power, grip and complexity. This is a great, complex, crystalline, salty, tightly woven and very persistent Sauvignon with a great character. Tasted in May 2019, which was four weeks after the bottling.' />
    <Image centered size='tiny' src={MAX}  />
    <Card.Content extra >
      Reg. Price $180/6 <strong> PA Price $160/6</strong>
    </Card.Content>
  </Card>

                </Grid.Row>
              </Grid>
            </List>
            </Grid.Column>
            </Grid.Row>



    <Grid.Row centered style={{marginTop:'35px'}}>
    <Grid.Column width={14}>
    <a href="mailto:orders@winewise.biz?subject=WineWise Polz PA Order" target="_blank" >
    <Message style={{textAlign:'center'}}
    icon='envelope outline'
    header='Click here to email us with your Pre-Arrival order!'
  >

  </Message>
  </a>
    </Grid.Column>
  </Grid.Row>

 
  <Grid.Row centered>
   <Grid.Column width={16}>
   <Header  as='h3' style={{marginTop: '80px', textAlign: 'center', fontSize:'2.5em'}}>Polz Wines Currently In Stock</Header>
        {producerWines.length ? (
            <List >
              <Grid centered >
                <Grid.Row columns={3}>
                  {producerWines.map(wine => (
                    <Winecard header={wine.Wine} producer={wine.Producer} region={wine.Region} country={wine.Country} wineid={wine._id} Code={wine.Code} key={wine._id} url={wine.URL} />
                  ))}
                </Grid.Row>
              </Grid>
            </List>
            ) : (
                <h3>{this.state.isLoading ? "loading..." : "No results to display"}</h3>
              )}

  </Grid.Column>
  </Grid.Row>

  <Grid.Row centered>
    <Grid.Column width={6} >
    <Link to="/producerdetails/Polz" >
<Button style={{backgroundColor:'#e8dcd8', color:"#3d4869"}}>More Information about Polz</Button>
</Link>
    </Grid.Column>
</Grid.Row>

</Grid>
</Responsive>



</div>  
      
    );
  }
}

export default EventsTable;

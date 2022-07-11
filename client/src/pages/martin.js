import React from "react";

import {
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react';

const Martin = () => (

    <React.Fragment>

        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Martin Reyes
                         </Header>
                        
                        <p style={{ fontSize: '1em' }}>
                        Since the start, WineWise has been a part of Martin's prolific wine career in some way or another. Before building a career as a buyer, educator, speaker, judge, and winemaker, he was a young wine shop clerk cobbling up funds for a French trip in the early 2000s. Thanks to Hiram’s boundless generosity and grace, Martin was able to visit and taste one of WineWise’s top producers in the Loire Valley. Thus, our portfolio established permanent residency quite early on in his heart.
                        </p>
                        <p style={{ fontSize: '1em' }}>
                        Martin continued to source from WineWise while managing a Napa-based wine merchant, where he got to know both Hiram and Brian (now retired) quite well. Unsurprisingly to those who notice the WineWise way, a growing friendship kept their orbits close. As the principal buyer for prominent wine club programs (The New York Times, Food & Wine Magazine, and Williams-Sonoma-Wine) it’s rumored that Martin was named one of Wine Enthusiast’s “Top Forty under Forty” as a direct result of the sheer volume of WineWise collections he sourced during his tenure. At least, that’s what he’d like to think.
                        </p>
                        <p style={{ fontSize: '1em' }}>
                        Gradually, Martin developed a multifarious career that transcended national boundaries. Highlights include: being the first Master of Wine of Mexican descent in 2018, winning Best Paper at Vienna’s AAWE Conference in 2019 for his research in consumer purchasing behavior, producing one of Wine & Spirits Magazine’s “US Best Cabernets” under the Peter Paul Wines aegis… twice, and being named one of Wine Business Monthly’s 2020's Industry Leaders for co-founding Wine Unify, empowering diversity, equity, and inclusion in wine through education funding and mentorship. Through his Reyes Wine Group consultancy, Martin developed a deep passion for fostering sustainability, which culminated in co-founding Napa Thrives - a groundbreaking, community-driven symposium accelerating meaningful sustainability & climate action leadership in Napa County.
                        </p>
                        <p style={{ fontSize: '1em' }}> During his spare time, Martin occasionally writes (his work has been featured in JancisRobinson.com and Napa Valley Viticultural Society’s Journal), co-hosts the James Beard-awarded FourTop podcast on the culture and future of our industry, judges for several international competitions (Texsom, Decanter, IWC), and unfortunately for dinner guests, is an incorrigible purveyor of dad humor. Nevertheless, WineWise had the last laugh when Martin joined Hiram as Principal, finally passing through the noble gates of the virtuoso portfolio he’d only caught glimpses of while stocking empty wineshop shelves long ago.
                        </p>
                        
                    </Grid.Column>

                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='large' src='/images/Martin.jpg' />
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Segment>
    </React.Fragment>
)

export default Martin;

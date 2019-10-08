import React from "react";

import {
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react';

const Greenwood = () => (

    <React.Fragment>

        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Brian Greenwood, Principal
                </Header>
                        <p style={{ fontSize: '1em' }}>
                        I have never worked in the restaurant business, or done cellar work at a winery. Otherwise, I'm fairly sure I have done pretty much all that can be done in this industry, from retail to wholesale sales, wine blending both in CA and abroad, harvest grape sampling, sales management, importing, procurement --both retail and wholesale, and domestic and imported- and partnering in wineries and distributorships. However, all my ventures have been human-sized, hands on, and it is when they have threatened to grow out of control that I have moved on. I joined my old friend Hiram in 2004, after tasting wine with him on a monthly basis since 1985 (we still do), when Winewise had three salespeople in the North and none in the South, and together we have grown this behemoth to where it is, through many ups and a few downs. It remains human-sized, very personal, very much the expression of our personal appreciation of wines, which could once have been described as "classical," but now can only be termed "eclectic." </p>
                        <p style={{ fontSize: '1em' }}>
                        The category of "useful" wine has expanded exponentially in my time in the business. I remember early on discussing Rhone wines with an English MW, and it became very clear that he had no idea what the grapes were in a St. Joseph White. Being an MW in those days, I imagine, meant knowing your Bordeaux and Burgundy backwards and forwards, and paying grudging attention to a few other areas of the world. Now Jura wines are mainstream, and Grüner Veltliner is old hat, and the talk is more of how the wines are made and what is being done to the earth than whether the 1855 classification of Bordeaux still holds.</p>
                        <p style={{ fontSize: '1em' }}>
                        One thing never changes, however, which is that as much as our noses may be in our glasses, and our attention on the bottom line, this remains a business based on relationships. It begins with our customers, without whom we have no company, and continues to encompass the growers, past and present, who have taught us, learned from us, and laughed with us.  Most importantly, however, it is those 15-odd people who work with us in CA,  and those who have left us.  Getting to know all of these people has been a great pleasure for the last 15 years and I hope to continue to work with them for some time.
                       </p>
                    </Grid.Column>

                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='large' src='/images/BrianGreenwood.jpg' />
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Segment>
    </React.Fragment>
)

export default Greenwood;

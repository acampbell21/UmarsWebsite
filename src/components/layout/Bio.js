import React, { Component } from 'react';
import { Button, Icon, Header, Grid, Image, Segment } from 'semantic-ui-react';

const src = 'https://i.imgur.com/VfFFPqR.jpg';
const src1 = 'https://i.imgur.com/VfFFPqR.jpg';

export class Bio extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={src} />
          </Grid.Column>
          <Grid.Column width={13}>
            <Header textAlign='center' as='h3'>
              Bio
            </Header>
            <Segment basic>
              Born in 1992 a lover of Linkin Park, it was only natural that I
              become a drummer. I have drummed for the likes of Bob Marley and
              Slipknot. You can find me chillin on the beach slappin these bongs
              daily.
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={src1} />
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment basic>
              Born in 1992 a lover of Linkin Park, it was only natural that I
              become a drummer. I have drummed for the likes of Bob Marley and
              Slipknot. You can find me chillin on the beach slappin these bongs
              daily.
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Bio;

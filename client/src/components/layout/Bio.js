import React, { Component } from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';
import GridImageOne from '../../img/GridImageOne.png';
import GridImageTwo from '../../img/GridImageTwo.png';

const styles = {
  gridBackgroundImageOne: {
    backgroundImage: `url(${GridImageOne})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '900px',
    opacity: '0.8'
  },
  gridBackgroundImageTwo: {
    backgroundImage: `url(${GridImageTwo})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '700px',
    opacity: '0.8'
  },
  headerStyle: {
    color: 'white',
    fontFamily: 'Cormorant',
    fontSize: '50px',
    fontWeight: 'bold'
  },
  topText: {
    color: 'white',
    fontFamily: 'Cormorant',
    fontHeight: '12px',
    fontSize: '18px',
    fontWeight: '900',
    lineHeight: '2'
  },
  bottomText: {
    color: 'white',
    fontFamily: 'Cormorant',
    fontHeight: '12px',
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '2',
    display: 'flex',
    alignItems: 'center'
  }
};

export class Bio extends Component {
  render() {
    return (
      <Grid padded='vertically' centered>
        <Grid.Row
          style={styles.gridBackgroundImageOne}
          stretched
          textAlign='justifed'
        >
          <Grid.Column width={10}>
            <Header style={styles.headerStyle} textAlign='center' as='h1'>
              Bio
            </Header>
            <Segment style={styles.topText} centered basic>
              Umar Mausoof is a L.A. based percussionist and musician whose
              energy and adaptability allow him to work well with any artist or
              ensemble. His love for the drums flourished in high school,
              becoming intrigued by the playing and musicality of legendary
              drummers like Buddy Rich and Ginger Baker. Throughout his musical
              journey Umar has played with a variety of ensembles performing
              styles including: Jazz, Latin-jazz, Pop, Soul, Hip-Hop, R&B, Funk,
              Electronic, Rock, Alternative and more.
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row
          style={styles.gridBackgroundImageTwo}
          stretched
          textAlign='justifed'
        >
          <Grid.Column width={13}>
            <Segment style={styles.bottomText} padded='very' basic>
              Umar's musical experience started with extensive training in
              rudimental percussion, but his love for music blossomed once he
              started playing jazz. He brings his own sound to every ensemble,
              but more importantly serves the music and locks in with the other
              musicians.
            </Segment>
            <Segment style={styles.bottomText} padded basic>
              If you are interested in working with Umar please click the
              contact link above.
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Bio;

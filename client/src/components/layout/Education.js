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

export class Education extends Component {
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
              Education
            </Header>
            <Segment style={styles.topText} centered basic>
              For the past 15 years Umar has studied the art of percussion and
              performed with Percussion Ensembles, Jazz combos and Big Bands. He
              has studied drums with Geoff Clapp, Mark Converse, David Kopplin,
              Andy Sanesi, and Dean Koba to name a few. He will be receiving his
              Bachelor's of Arts in Music Industry Studies from California
              Polytechnic University of Pomona in 2019.
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
              Umar is available for private drum set instruction in the OC/LA
              area at very competitive prices. Please fill out the contact form
              to discuss availability and rates, and please include “Private
              Lessons” at the top of the message field.
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Education;

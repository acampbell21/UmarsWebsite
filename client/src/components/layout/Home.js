import React, { Component } from 'react';
import { Segment, Header, Grid, Image } from 'semantic-ui-react';
import Links from './Links';
import HomePhoto from '../../img/HomePhoto.png';

const styles = {
  buttonPadding: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 12px',
    cursor: 'pointer'
  },
  buttonSize: {
    padding: '14px 80px'
  },
  centeredButtons: {
    display: 'flex',
    alignItems: 'center'
  },
  buttonGroup: {
    border: '1px solid green'
  },
  gridRowHeight: {
    height: '350px'
  },
  homePhotoColumn: {
    height: '300px'
  },
  segmentText: {
    fontSize: '16px',
    fontWeight: 'bold'
  }
};

const src = `${HomePhoto}`;

export class Home extends Component {
  render() {
    return (
      <Grid verticalAlign='middle' centered>
        <Links />
        <Grid.Row style={styles.gridRowHeight} columns={3}>
          <Grid.Column mobile={16} tablet={8} computer={8} centered>
            <Image src={src} size='huge' fluid />
          </Grid.Column>
          <Grid.Column
            style={{ paddingTop: '28px' }}
            mobile={16}
            tablet={8}
            computer={4}
            centered
          >
            <Header as='h1' textAlign='center'>
              Umar Mausoof
            </Header>
            <Segment
              style={styles.segmentText}
              textAlign='center'
              basic
              vertical
            >
              Musician | Percussionist
            </Segment>
            <Segment
              style={styles.segmentText}
              textAlign='center'
              basic
              vertical
            >
              Producer | Sound Engineer
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;

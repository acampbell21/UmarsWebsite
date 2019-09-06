import React, { Component } from 'react';
import { Button, Icon, Header, Grid, Image } from 'semantic-ui-react';

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
  }
};

const src =
  'https://res.cloudinary.com/dgver7dmh/image/upload/v1567762749/Cajon_Pic_1_wivbjd.jpg';

export class Home extends Component {
  render() {
    return (
      <Grid columns={3} verticalAlign='middle' centered>
        <Grid.Row>
          <Grid.Column
            mobile={16}
            tablet={8}
            computer={4}
            centered
            style={{ margin: '0 auto' }}
          >
            <Header
              style={{ paddingTop: '20px' }}
              size='huge'
              textAlign='center'
            >
              <Image src={src} fluid circular /> Umar Mausoof
            </Header>
            <div style={styles.buttonPadding}>
              <a href='https:/google.com'>
                <Button style={styles.buttonSize} icon color='linkedin'>
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>
            <div style={styles.buttonPadding}>
              <a href='https:/google.com'>
                <Button style={styles.buttonSize} icon color='linkedin'>
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div style={styles.buttonPadding}>
              <a href='https:/google.com'>
                <Button style={styles.buttonSize} icon color='linkedin'>
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>
            <div style={styles.buttonPadding}>
              <a href='https:/google.com'>
                <Button style={styles.buttonSize} icon color='linkedin'>
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column
            mobile={16}
            tablet={8}
            computer={4}
            centered
            style={{ margin: '0 auto' }}
          >
            <div style={styles.buttonPadding}>
              <a href='https:/google.com'>
                <Button style={styles.buttonSize} icon color='linkedin'>
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div style={styles.buttonPadding}>
              <a href='https:/google.com'>
                <Button style={styles.buttonSize} icon color='linkedin'>
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div style={styles.buttonPadding}>
              <a href='https:/google.com'>
                <Button style={styles.buttonSize} icon color='linkedin'>
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>
            <div style={styles.buttonPadding}>
              <a href='https:/google.com'>
                <Button style={styles.buttonSize} icon color='linkedin'>
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;

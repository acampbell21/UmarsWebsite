import React, { Component } from 'react';
import { Button, Icon, Header, Grid } from 'semantic-ui-react';

const styles = {
  buttonStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 12px',
    cursor: 'pointer'
  },
  centeredButtons: {
    display: 'flex',
    alignItems: 'center'
  },
  buttonGroup: {
    border: '1px solid green'
  }
};

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
            <Header style={{ padding: '20px' }} as='h1' textAlign='center'>
              Umar Mausoof
            </Header>
            <div style={styles.buttonStyle}>
              <a href='https:/google.com'>
                <Button
                  size='large'
                  style={{ padding: '10px 24px' }}
                  icon
                  color='linkedin'
                >
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>
            <div style={styles.buttonStyle}>
              <a href='https:/google.com'>
                <Button icon color='linkedin'>
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div style={styles.buttonStyle}>
              <a href='https:/google.com'>
                <Button icon color='linkedin'>
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>
            <div style={styles.buttonStyle}>
              <a href='https:/google.com'>
                <Button icon color='linkedin'>
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
            <div style={styles.buttonStyle}>
              <a href='https:/google.com'>
                <Button icon color='linkedin'>
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div style={styles.buttonStyle}>
              <a href='https:/google.com'>
                <Button icon color='linkedin'>
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div style={styles.buttonStyle}>
              <a href='https:/google.com'>
                <Button icon color='linkedin'>
                  <Icon name='linkedin' />
                  LinkedIn
                </Button>
              </a>
            </div>
            <div style={styles.buttonStyle}>
              <a href='https:/google.com'>
                <Button icon color='linkedin'>
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

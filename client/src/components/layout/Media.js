import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import YouTube from 'react-youtube';

export class Media extends Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <Grid padded='vertically' centered>
        <Grid.Row style={{ postion: 'relative' }}>
          <YouTube style={{ position: 'absolute', top: '0', bottom: '0' }} videoId='zwW6QZnYax8' opts={opts} onReady={this._onReady} />
        </Grid.Row>
      </Grid>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Media;

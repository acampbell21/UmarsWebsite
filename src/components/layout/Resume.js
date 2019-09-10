import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';

const src = 'https://i.imgur.com/Sm0pCtr.png';

export class Resume extends Component {
  render() {
    return (
      <div>
        <Image centered size='large' src={src} />
      </div>
    );
  }
}

export default Resume;

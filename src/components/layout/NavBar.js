import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' />
          <Menu.Item name='bio' />
          <Menu.Item name='resume' />
        </Menu>
      </div>
    );
  }
}

export default Navbar;

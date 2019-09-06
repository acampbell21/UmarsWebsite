import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const styles = {
  MenuStyles: {
    display: 'flex',
    justifyContent: 'center'
  }
};

export class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu style={styles.MenuStyles} pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          <Link to='/bio'>
            <Menu.Item name='bio' />
          </Link>
          <Link to='/'>
            <Menu.Item name='resume' />
          </Link>
        </Menu>
      </div>
    );
  }
}

export default Navbar;

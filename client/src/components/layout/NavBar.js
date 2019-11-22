import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const styles = {
  MenuStyles: {
    display: 'flex',
    justifyContent: 'center',
    height: '40px'
  }
};

export class Navbar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu style={styles.MenuStyles} pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/bio'>
            <Menu.Item
              name='bio'
              active={activeItem === 'bio'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/media'>
            <Menu.Item
              name='media'
              active={activeItem === 'media'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/education'>
            <Menu.Item
              name='education'
              active={activeItem === 'education'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/contactform'>
            <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu>
      </div>
    );
  }
}

export default Navbar;

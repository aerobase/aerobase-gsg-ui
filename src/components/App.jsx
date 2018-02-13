import React, { Component } from 'react'
import { Label, Sidebar, Menu, Icon } from 'semantic-ui-react'

import 'assets/scss/App.scss';
import reactLogo from 'assets/img/react_logo.svg';

export default class MenuExampleVertical extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { activeItem } = this.state

    return (
    <Sidebar as={Menu} width='wide' visible="true" icon='labeled' vertical inverted>
        <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
	  <Icon name='settings' />
          YOUR APP CONFIGURATION
        </Menu.Item>

        <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
	<Icon name='book' />
          QUICK START GUIDES
        </Menu.Item>

        <Menu.Item name='resources' active={activeItem === 'updates'} onClick={this.handleItemClick}>
	<Icon name='linkify' />
          USEFUL RESOURCES
        </Menu.Item>
    </Sidebar>
    );
  }
}

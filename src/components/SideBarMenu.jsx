import React, { Component } from 'react'
import { Label, Sidebar, Menu, Icon } from 'semantic-ui-react'

export default class SideBarMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
	 activeItem: 'settings'
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <Sidebar as={Menu} width='wide' visible="true" animation="push" vertical inverted>
        <Menu.Item name='settings' active={activeItem === 'settings'} onClick={this.handleItemClick}>
	  <Icon name='settings' />
          Your App Configuration
        </Menu.Item>

        <Menu.Item name='guide' active={activeItem === 'guide'} onClick={this.handleItemClick}>
	<Icon name='book' />
          Quick Start Guides
        </Menu.Item>

        <Menu.Item name='resources' active={activeItem === 'resources'} onClick={this.handleItemClick}>
	<Icon name='linkify' />
          Useful Resources
        </Menu.Item>
    </Sidebar>
    );
  }
}

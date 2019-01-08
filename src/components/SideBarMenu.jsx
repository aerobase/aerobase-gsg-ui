import React, {Component} from 'react'
import PropTypes from "prop-types";
import {MuiThemeProvider} from 'material-ui/styles';
import {createMuiTheme, withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import {ListItemIcon, ListItemText} from 'material-ui/List';
import {MenuList, MenuItem} from 'material-ui/Menu';
import SettingsIcon from 'material-ui-icons/Settings';
import BookIcon from 'material-ui-icons/Book';
import LinkIcon from 'material-ui-icons/Link';
import UserIcon from 'material-ui-icons/AccountBox';

const drawerWidth = 300;

const themeDark = createMuiTheme ({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },

    overrides: {
        MuiDrawer: {
            // Name of the styleSheet
            docked: {
                height: '100%',
            },
        },
    },
});

const styles = theme => ({
    drawerHeader: theme.mixins.toolbar,

    drawerPaper: {
        width: 300,
        height: '100%',
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },

    avatar: {
        paddingTop: '13px',
        paddingLeft: '8px',
    },

    userTitle:{
        paddingTop: '9px',
        paddingLeft: '10px',
    },

    chromeIssueMargin:{
        margin: '1px',
    },
});

class SideBarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    state = {
        activeItem: 'settings',
    };

    handleItemClick(e, value) {
        e.stopPropagation();
        this.setState({
            activeItem: value,
        });
    }

    render() {
        const {activeItem} = this.state
        const {classes, theme} = this.props;

        const drawer = (
            <div>
                <div className={classes.drawerHeader}>
                    <div className={classes.avatar}>
                        <Grid container key="avatar" spacing="2">
                            <Grid item>
                                <Avatar>
                                    <UserIcon/>
                                </Avatar>
                            </Grid>
                            <Grid item className={classes.cardTitle}>
                                <Typography className={classes.userTitle}
                                    variant="headline">{this.props.username}</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>

                <Divider className={classes.chromeIssueMargin}/>

                <List>
                    <MenuList >
                        <MenuItem selected={activeItem === 'settings'} onClick={(e) => this.handleItemClick(e, 'settings')}>
                            <ListItemIcon>
                                <SettingsIcon onClick={(e) => this.handleItemClick(e, 'settings')}/>
                            </ListItemIcon>
                            <ListItemText primary="Your App Configuration" onClick={(e) => this.handleItemClick(e, 'settings')}/>
                        </MenuItem>
                        <MenuItem selected={activeItem === 'quickstart'} onClick={(e) => this.handleItemClick(e, 'quickstart')}>
                            <ListItemIcon>
                                <BookIcon onClick={(e) => this.handleItemClick(e, 'quickstart')}/>
                            </ListItemIcon>
                            <ListItemText primary="Quick Start Guides" onClick={(e) => this.handleItemClick(e, 'quickstart')}/>
                        </MenuItem>
                        <MenuItem selected={activeItem === 'resources'} onClick={(e) => this.handleItemClick(e, 'resources')}>
                            <ListItemIcon>
                                <LinkIcon onClick={(e) => this.handleItemClick(e, 'resources')}/>
                            </ListItemIcon>
                            <ListItemText primary="Useful Resources" onClick={(e) => this.handleItemClick(e, 'resources')}/>
                        </MenuItem>
                    </MenuList>
                </List>

                <Divider className={classes.chromeIssueMargin}/>
            </div>
        );

        return (
            <MuiThemeProvider theme={themeDark}>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.props.mobileOpen}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        onClose={() => this.props.handleDrawerToggle()}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </MuiThemeProvider>
        );
    }
}

SideBarMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(SideBarMenu);
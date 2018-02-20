import React, {Component} from 'react'
import PropTypes from "prop-types";
import {MuiThemeProvider} from 'material-ui/styles';
import {createMuiTheme, withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import {menuListItems} from './SideBarMenuItems';
import FolderIcon from 'material-ui-icons/Folder';


const drawerWidth = 300;

const themeDark = createMuiTheme({
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
});

class SideBarMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes, theme} = this.props;

        const drawer = (
            <div>
                <div className={classes.drawerHeader}>
                    <Avatar className={classes.avatar}>
                        <FolderIcon />
                    </Avatar>
                </div>
                <Divider/>
                <List>{menuListItems}</List>
                <Divider/>
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
                        onClose={()=>this.props.handleDrawerToggle()}
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
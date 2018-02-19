import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import Grid from 'material-ui/Grid';
import {MuiThemeProvider} from 'material-ui/styles';

import {menuListItems} from './tileData';

const drawerWidth = 300;

const themeLight = createMuiTheme({
    palette: {
        type: 'light', // Switching the dark mode on is a single property value change.
    },
});

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
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        flexGrow: 1,
    },

    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
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

    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
});

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render() {
        const {classes, theme} = this.props;

        const drawer = (
            <div>
                <div className={classes.drawerHeader}/>
                <Divider/>
                <List>{menuListItems}</List>
                <Divider/>
            </div>
        );

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar} color="default">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="Menu"
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap>
                                Getting Started
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <MuiThemeProvider theme={themeDark}>
                        <Hidden mdUp>
                            <Drawer
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={this.state.mobileOpen}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                onClose={this.handleDrawerToggle}
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

                    <MuiThemeProvider theme={themeLight}>
                        <main className={classes.content}>
                            <Grid container className={classes.root} justify="left" spacing="16">
                                <Grid key="gs" item xs={12}>
                                    <Typography
                                        variant="body1">{'To be able to use the'}
                                        <span>Aerobase</span> {'Server you need to create a PushApplication and at least one Variant.'}
                                    </Typography>
                                    <Typography
                                        variant="body1"> {'The wizard is launched when clicking the Create Application button on the PUSH NOTIFICATION page:'}</Typography>

                                </Grid>
                                <Grid key="root-endpoint" item xs={12} sm={6}>
                                </Grid>
                            </Grid>
                            <Divider/>
                        </main>
                    </MuiThemeProvider>

                </div>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ResponsiveDrawer);
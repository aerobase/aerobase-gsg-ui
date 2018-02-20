import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, withStyles} from 'material-ui/styles';
import AppBarMenu from './AppBarMenu';
import SideBarMenu from './SideBarMenu';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import {MuiThemeProvider} from 'material-ui/styles';

const themeLight = createMuiTheme({
    palette: {
        type: 'light', // Switching the dark mode on is a single property value change.
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

class AppDrawer extends React.Component {
    constructor(props){
        super(props);
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    }

    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render() {
        const {classes, theme} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBarMenu handleDrawerToggle={this.handleDrawerToggle}/>

                    <SideBarMenu handleDrawerToggle={this.handleDrawerToggle} mobileOpen={this.state.mobileOpen}/>

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

AppDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AppDrawer);
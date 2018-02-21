import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, withStyles} from 'material-ui/styles';
import AppBarMenu from './AppBarMenu';
import SideBarMenu from './SideBarMenu';
import CopyToClipboard from './CopyToClipboard';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import {MuiThemeProvider} from 'material-ui/styles';
import {Card} from 'semantic-ui-react'
import WebIcon from 'material-ui-icons/Language';
import AndroidIcon from 'material-ui-icons/Android';


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
    },

    container: {
        width: '100%',
        flexGrow: 1,
        paddingTop: '10px'
    },

    divider: {
        marginTop: '10px',
        marginBottom: '10px',
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
    constructor(props) {
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
                            <Grid container className={classes.container} justify="left" spacing="16">
                                <Grid key="gs" item xs={12} sm={6}>
                                    <Typography
                                        variant="body1">{'To be able to use the Aerobase Server you need to create a PushApplication and at least one Variant.'}
                                    </Typography>
                                    <Typography
                                        variant="body1">
                                        {'The wizard is launched when clicking the Create Application button on the PUSH NOTIFICATION page:'}
                                    </Typography>
                                </Grid>

                                <Grid key="root-endpoint" item xs={12} sm={6}>
                                    <CopyToClipboard></CopyToClipboard>
                                </Grid>

                                <Grid key="divider1" item xs={12}>
                                    <Divider className={classes.divider}/>
                                </Grid>

                                <Grid container className={classes.container} justify="left" spacing="16">
                                    <Grid key="qsg" item xs={12}>
                                        <Typography variant="title">{'Quick Start Guides'}</Typography>

                                    </Grid>
                                    <Grid key="qsg1" item xs={8}>
                                        <Card fluid={true}
                                              href='#card-example-link-card'
                                        >
                                            <Card.Content>
                                                <Card.Header>

                                                    <Grid container key="web-container" spacing={12} align="center">
                                                        <Grid item>
                                                            <WebIcon/>
                                                        </Grid>
                                                        <Grid item>
                                                            <span>Web</span>
                                                        </Grid>
                                                    </Grid>

                                                </Card.Header>
                                                <Card.Meta>
                                                    Develop a cross-platform web app
                                                </Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid>
                                    <Grid key="qsg2" item xs={8}>
                                        <Card fluid={true}
                                              href='#card-example-link-card'>
                                            <Card.Content>
                                                <Card.Header>
                                                    <div>
                                                        <AndroidIcon/>
                                                        Android
                                                    </div>
                                                </Card.Header>
                                                <Card.Meta>
                                                    Build an app for Android.
                                                </Card.Meta>
                                            </Card.Content>
                                        </Card>

                                    </Grid>
                                    <Grid key="qsg3" item xs={8}>
                                        <Card fluid={true} href='#card-example-link-card'>
                                            <Card.Content>
                                                <Card.Header>
                                                    <div>
                                                        <AndroidIcon/>
                                                        iOs
                                                    </div>
                                                </Card.Header>
                                                <Card.Meta>
                                                    Build an app for iOs.
                                                </Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid>
                                </Grid>

                                <Grid key="divider2" item xs={12}>
                                    <Divider className={classes.divider}/>
                                </Grid>

                                <Grid container className={classes.container} justify="left" spacing="16">
                                    <Grid key="ur" item xs={12}>
                                        <Typography variant="title">{'Useful Resources'}</Typography>

                                    </Grid>

                                    <Grid key="ur1" item xs={6} sm={3}>
                                        <Card fluid={true}
                                              href='https://aerobase.atlassian.net/wiki/spaces/ARB/overview'
                                              target='_blank'
                                              header='Documentation'
                                              meta='Understand how Aerobase works'
                                              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                        >

                                        </Card>
                                    </Grid>
                                    <Grid key="ur2" item xs={6} sm={3}>
                                        <Card fluid={true}
                                              href='https://aerobase.atlassian.net/projects/ARB?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page'
                                              target='_blank'
                                              header='Release Notes'
                                              meta='Stay on top of our latest features'
                                              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                        />
                                    </Grid>
                                    <Grid key="ur3" item xs={6} sm={3}>
                                        <Card fluid={true}
                                              href='#card-example-link-card'
                                              target='_blank'
                                              header='Stack Overflow'
                                              meta='Ask any questions and tag us'
                                              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                        />
                                    </Grid>

                                    <Grid key="ur1" item xs={6} sm={3}>
                                        <Card fluid={true}
                                              href='https://aerobase.atlassian.net/wiki/spaces/ARB/overview'
                                              target='_blank'
                                              header='Documentation'
                                              meta='Understand how Aerobase works'
                                              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                        />
                                    </Grid>
                                    <Grid key="ur2" item xs={6} sm={3}>
                                        <Card fluid={true}
                                              href='https://aerobase.atlassian.net/projects/ARB?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page'
                                              target='_blank'
                                              header='Release Notes'
                                              meta='Stay on top of our latest features'
                                              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                        />
                                    </Grid>
                                    <Grid key="ur3" item xs={6} sm={3}>
                                        <Card fluid={true}
                                              href='#card-example-link-card'
                                              target='_blank'
                                              header='Stack Overflow'
                                              meta='Ask any questions and tag us'
                                              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

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
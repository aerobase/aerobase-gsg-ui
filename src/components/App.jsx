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
import PhoneIphone from 'material-ui-icons/PhoneIphone';

const themeLight = createMuiTheme({
    palette: {
        type: 'light', // Switching the dark mode on is a single property value change.
    },

    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif'
        ].join(','),

        // In Japanese the characters are usually larger.

        fontSize: 16,
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
        paddingTop: '10px',
        paddingBottom: '20px',
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
        overflow: 'auto',
    },

    chromeIssueMargin:{
      margin: '1px',
    },

    cardTitle: {
        paddingTop: '2px',
        paddingLeft: '4px',
    },

});

class AppDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        this.handleUps = this.handleHrefs.bind(this);
    }

    componentWillMount() {
        this.handleHrefs();
    }

    state = {
        mobileOpen: false,
    };

    consoles = {
        top: "https://cloud.aerobase.io/portal/",
        ups: "https://cloud.aerobase.io/portal/push",
        iam: "https://cloud.aerobase.io/portal/users",
        portaliam: "https://cloud.aerobase.io/portal/users",
        portalups: "https://cloud.aerobase.io/portal/push",
    }

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    handleHrefs = () => {
        this.consoles.top = window.location.protocol + "//" + this.props.realmname + "." + this.props.topDomain;
        this.consoles.iam = window.location.protocol + "//" + this.props.realmname + "." + this.props.topDomain + "/auth/admin/" + this.props.realmname + "/console/";
        this.consoles.ups = window.location.protocol + "//" + this.props.realmname + "." + this.props.topDomain + "/unifiedpush-server/";

        this.consoles.portaliam = window.location.protocol + "//" + window.location.hostname + "/auth/admin/master/console/"
        this.consoles.portalups = window.location.protocol + "//" + window.location.hostname + "/unifiedpush-server/"
    };

    render() {
        const {classes, theme} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBarMenu handleDrawerToggle={this.handleDrawerToggle}/>

                    <SideBarMenu handleDrawerToggle={this.handleDrawerToggle} mobileOpen={this.state.mobileOpen} username={this.props.username}/>

                    <MuiThemeProvider theme={themeLight}>
                        <main className={classes.content}>
                            <Grid container className={classes.container} justify="left" spacing="16" >
                                <Grid key="gs" item xs={12} sm={12}>
                                    <Typography
                                        variant="headline">{'Wellcome to Aerobase server console'}
                                    </Typography>
                                </Grid>
                                
                                
                                <Grid key="gs" item xs={12} sm={6}>
                                    <Typography
                                        variant="body1" paragraph="true">
                                        {'To help you get started, we have published a '}<a target="_blank" href="https://github.com/aerobase-demo/angular-oauth2-starter/">demo application</a>{' under your private '}<a target="_blank" href={this.consoles.top}>subdomain</a>{'.'}<br/>
                                        {'You can start building your next awesome app using our '}<a target="_blank" href="https://github.com/aerobase/aerobase-js-sdk/">JavaScript SDK</a>
                                    </Typography>
                                </Grid>                            
                                

                                <Grid key="root-endpoint" item xs={12} sm={4}>
                                    <Grid key="root-endpoint" >
                                        <CopyToClipboard label="Demo Access" value={this.consoles.top} htmlFor="primery-endpoint"></CopyToClipboard>
                                    </Grid>
                                </Grid>

                                <Grid key="gs" item xs={12} sm={6}>
                                    <Typography
                                        variant="body1" paragraph="true">
                                        {'Your IAM console is available both from our '}<a href={this.consoles.portaliam}>identity & access</a>{' page or directly from your subdomain.'}<br/>
                                        {"In order to login directly from your "}<a target="_blank" href={this.consoles.iam}>subdomain</a>{" console, you must first reset your 'admin' password."}
                                    </Typography>
                                </Grid>                            
                                

                                <Grid key="root-endpoint" item xs={12} sm={4}>
                                    <Grid key="root-endpoint" >
                                        <CopyToClipboard label="IAM Console" value={this.consoles.iam} htmlFor="iam-endpoint"></CopyToClipboard>
                                    </Grid>
                                </Grid>

                                <Grid key="divider1" item xs={12}>
                                    <Divider className={classes.chromeIssueMargin}/>
                                </Grid>

                                <Grid container className={classes.container} justify="left" spacing="16">
                                    <Grid key="qsg" item xs={8}>
                                        <Typography variant="title">{'Quick Start Guides'}</Typography>
                                    </Grid>
                                    <Grid key="qsg1" item xs={12}>
                                        <Card fluid={true}
                                              href='https://aerobase.io/docs/gsg/index.html'
                                              target='_blank'
                                        >
                                            <Card.Content>
                                                <Card.Header>

                                                    <Grid container key="web-container" spacing="2">
                                                        <Grid item>
                                                            <WebIcon/>
                                                        </Grid>
                                                        <Grid item className={classes.cardTitle}>
                                                            <span>Hybrid</span>
                                                        </Grid>
                                                    </Grid>

                                                </Card.Header>
                                                <Card.Meta>
                                                    Develop a cross-platform web app
                                                </Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid>
                                    <Grid key="qsg2" item xs={12}>
                                        <Card fluid={true}
                                              href='https://aerobase.io/docs/gsg/index.html'
                                              target='_blank'
                                        >
                                            <Card.Content>
                                                <Card.Header>
                                                    <Grid container key="android-container" spacing="2">
                                                        <Grid item>
                                                            <AndroidIcon/>
                                                        </Grid>
                                                        <Grid item className={classes.cardTitle}>
                                                            <span>Android</span>
                                                        </Grid>
                                                    </Grid>

                                                </Card.Header>
                                                <Card.Meta>
                                                    Build an app for Android.
                                                </Card.Meta>
                                            </Card.Content>
                                        </Card>

                                    </Grid>
                                    <Grid key="qsg3" item xs={12 }>
                                        <Card fluid={true}
                                              href='https://aerobase.io/docs/gsg/index.html'
                                              target='_blank'
                                        >
                                            <Card.Content>
                                                <Card.Header>
                                                    <Grid container key="ios-container" spacing="2">
                                                        <Grid item>
                                                            <PhoneIphone/>
                                                        </Grid>
                                                        <Grid item className={classes.cardTitle}>
                                                            <span>iOs</span>
                                                        </Grid>
                                                    </Grid>
                                                </Card.Header>
                                                <Card.Meta>
                                                    Build an app for iOs.
                                                </Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid>
                                </Grid>

                                <Grid key="divider2" item xs={12}>
                                    <Divider className={classes.chromeIssueMargin}/>
                                </Grid>

                                <Grid container className={classes.container} justify="left" spacing="16">
                                    <Grid key="ur" item xs={12}>
                                        <Typography variant="title">{'Useful Resources'}</Typography>

                                    </Grid>

                                    <Grid key="ur1" item xs={8} sm={4}>
                                        <Card fluid={true}
                                              href='https://aerobase.io/docs/gsg/index.html'
                                              target='_blank'
                                        >
                                            <Card.Content>
                                                <Card.Header>
                                                    <Grid container key="android-container" spacing="2">
                                                        <Grid item>
                                                            <i class="large clone icon"/>
                                                        </Grid>
                                                        <Grid item className={classes.cardTitle}>
                                                            <span>Documentation</span>
                                                        </Grid>
                                                    </Grid>

                                                </Card.Header>
                                                <Card.Meta>
                                                    <Typography variant="body3" noWrap>Understand how Aerobase works.</Typography>
                                                </Card.Meta>
                                            </Card.Content>

                                        </Card>
                                    </Grid>
                                    <Grid key="ur2" item xs={8} sm={4}>
                                        <Card fluid={true}
                                              href='https://aerobase.atlassian.net/projects/ARB?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page'
                                              target='_blank'>
                                            <Card.Content>
                                                <Card.Header>
                                                    <Grid container key="android-container" spacing="2">
                                                        <Grid item>
                                                            <i class="large sticky note icon"/>
                                                        </Grid>
                                                        <Grid item className={classes.cardTitle}>
                                                            <span>Release Notes</span>
                                                        </Grid>
                                                    </Grid>

                                                </Card.Header>
                                                <Card.Meta >
                                                    <Typography variant="body3" noWrap>Stay on top of our latest features</Typography>
                                                </Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid>
                                    <Grid key="ur3" item xs={8} sm={4}>
                                        <Card fluid={true}
                                              href='http://stackoverflow.com/questions/tagged/aerobase'
                                              target='_blank'>
                                            <Card.Content>
                                                <Card.Header>
                                                    <Grid container key="android-container" spacing="2">
                                                        <Grid item>
                                                            <i class="large stack overflow icon"/>
                                                        </Grid>
                                                        <Grid item className={classes.cardTitle}>
                                                            <span>Stack Overflow</span>
                                                        </Grid>
                                                    </Grid>

                                                </Card.Header>
                                                <Card.Meta>
                                                    <Typography variant="body3" noWrap>Ask any questions and tag us</Typography>
                                                </Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid>
                                </Grid>

                                <Grid container className={classes.container} justify="left" spacing="16">
                                    <Grid key="ur1" item xs={8} sm={4}>
                                        <Card fluid={true}
                                              href='https://github.com/Aerobase'
                                              target='_blank'>
                                            <Card.Content>
                                                <Card.Header>
                                                    <Grid container key="android-container" spacing="2">
                                                        <Grid item>
                                                            <i class="large github icon"/>
                                                        </Grid>
                                                        <Grid item className={classes.cardTitle}>
                                                            <span>GitHub</span>
                                                        </Grid>
                                                    </Grid>

                                                </Card.Header>
                                                <Card.Meta>
                                                    <Typography variant="body3" noWrap>Contribute to Aerobase</Typography>
                                                </Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid>
                                    <Grid key="ur2" item xs={8} sm={4}>
                                        <Card fluid={true}
                                              href='https://aerobase.slack.com/'
                                              target='_blank'>
                                            <Card.Content>
                                                <Card.Header>
                                                    <Grid container key="android-container" spacing="2">
                                                        <Grid item>
                                                            <i class="large slack icon"/>
                                                        </Grid>
                                                        <Grid item className={classes.cardTitle}>
                                                            <span>Slack</span>
                                                        </Grid>
                                                    </Grid>

                                                </Card.Header>
                                                <Card.Meta>
                                                    <Typography variant="body3" noWrap>Connects with Aerobase developers</Typography>
                                                </Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid>
                                    <Grid key="ur3" item xs={8} sm={4}>
                                        <Card fluid={true}
                                              href='mailto:support@aerobase.io'>
                                            <Card.Content>
                                                <Card.Header>
                                                    <Grid container key="android-container" spacing="2">
                                                        <Grid item>
                                                            <i class="large envelope icon"/>
                                                        </Grid>
                                                        <Grid item className={classes.cardTitle}>
                                                            <span>Email</span>
                                                        </Grid>
                                                    </Grid>

                                                </Card.Header>
                                                <Card.Meta>
                                                    <Typography variant="body3" noWrap>Get direct support from our developers</Typography>
                                                </Card.Meta>
                                            </Card.Content>
                                        </Card>
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
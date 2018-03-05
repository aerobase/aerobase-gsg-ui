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

                    <SideBarMenu handleDrawerToggle={this.handleDrawerToggle} mobileOpen={this.state.mobileOpen} username={this.props.username}/>

                    <MuiThemeProvider theme={themeLight}>
                        <main className={classes.content}>
                            <Grid container className={classes.container} justify="left" spacing="16" >
                                <Grid key="gs" item xs={12} sm={6}>
                                    <Typography
                                        variant="body1">{'To be able to use the Aerobase Server you need to create a PushApplication and at least one Variant.'}
                                    </Typography>
                                    <Typography
                                        variant="body2">
                                        {'The wizard is launched when clicking the Create Application button on the PUSH NOTIFICATION page:'}
                                    </Typography>
                                </Grid>

                                <Grid key="root-endpoint" item xs={12} sm={4}>
                                    <CopyToClipboard value={this.props.realmname}></CopyToClipboard>
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
                                              href='https://aerobase.atlassian.net/wiki/display/ARB/JavaScript'
                                              target='_blank'
                                        >
                                            <Card.Content>
                                                <Card.Header>

                                                    <Grid container key="web-container" spacing="2">
                                                        <Grid item>
                                                            <WebIcon/>
                                                        </Grid>
                                                        <Grid item className={classes.cardTitle}>
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
                                    <Grid key="qsg2" item xs={12}>
                                        <Card fluid={true}
                                              href='https://aerobase.atlassian.net/wiki/display/ARB/Android'
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
                                              href='https://aerobase.atlassian.net/wiki/display/ARB/iOS'
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
                                              href='https://aerobase.atlassian.net/wiki/spaces/ARB/overview'
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
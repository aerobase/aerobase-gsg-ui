import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import {withStyles} from "material-ui/styles";
import Typography from 'material-ui/Typography';

const drawerWidth = 300;

const styles = theme => ({
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
});

class AppBarMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes, theme} = this.props;
        const {drawerWidth} = this.props;

        return (
            <AppBar className={classes.appBar} color="default">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Menu"
                        onClick={()=>this.props.handleDrawerToggle()}
                        className={classes.navIconHide}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap>
                        Getting Started
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

AppBarMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AppBarMenu);
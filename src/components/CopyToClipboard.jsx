import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Tooltip from 'material-ui/Tooltip';
import {withStyles} from "material-ui/styles";
import Clipboard from 'react-clipboard.js'

import Visibility from 'material-ui-icons/ContentCopy';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        width: '500px',
    },

    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
});



class CopyToClipboard extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        value: 'portal.aerobase.io',
    };

    componentDidMount() {
        const clipboard = new Clipboard(this.refs.copybutton, {
            target: (trigger) => {
                return this.refs.serverendpoint;
            }
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <FormControl className={classes.formControl} disabled>
                <InputLabel htmlFor="server-endpoint">Server Endpoint</InputLabel>
                <Input
                    id="server-endpoint"
                    ref="serverendpoint"
                    type='text'
                    fullWidth={true}
                    value={this.state.value}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton id="copy-button" ref="copybutton" onClick={this.handleClick}>
                                <Tooltip id="tooltip-top" title="Copy" placement="top">
                                    <Visibility/>
                                </Tooltip>
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>

        );
    }
}

CopyToClipboard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(CopyToClipboard);
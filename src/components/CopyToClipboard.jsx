import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Tooltip from 'material-ui/Tooltip';
import {withStyles} from "material-ui/styles";

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
        amount: '',
        value: 'portal.aerobase.io',
        weight: '',
        showPassword: false,
    };

    handleCopyValue = () => {
        this.setState({showPassword: !this.state.showPassword});
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleCopyValue = event => {
        event.preventDefault();
    };

    render() {
        const { classes } = this.props;

        return (
            <FormControl className={classes.formControl} disabled>
                <InputLabel htmlFor="password">Server Endpoint</InputLabel>
                <Input
                    id="adornment-password"
                    type='text'
                    fullWidth={true}
                    value={this.state.value}
                    onChange={this.handleChange('value')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={this.handleCopyValue}
                                onMouseDown={this.handleCopyValue}
                            >
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
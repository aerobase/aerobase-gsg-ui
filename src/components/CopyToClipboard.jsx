import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Tooltip from 'material-ui/Tooltip';
import {withStyles} from "material-ui/styles";
import ClipboardJS from 'clipboard'
import Visibility from 'material-ui-icons/ContentCopy';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        width: '100%',
    },

    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },

    copybutton: {},
});


class CopyToClipboard extends React.Component {
    constructor(props) {
        super(props);

        this.onSuccess = this.onSuccess.bind(this);
    }

    state = {
        value: this.props.value,
    };

    onSuccess() {
        console.info('successfully coppied');
    }

    render() {
        console.log(this.props.realmname);
        const {classes} = this.props;

        new ClipboardJS('.copybutton');

        return (


            <FormControl className={classes.formControl} readonly>
                <InputLabel htmlFor="server-endpoint">Server Endpoint</InputLabel>
                <Input
                    id="serverendpoint"
                    type='text'
                    fullWidth={true}
                    value={this.state.value}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton id="copybutton" className="copybutton" data-clipboard-target="#serverendpoint" onClick={this.onSuccess}>
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
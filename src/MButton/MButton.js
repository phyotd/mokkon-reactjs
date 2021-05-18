import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

function MButton(props) {
    const classes = useStyles();
    const { action, onCallback } = props;

    const handleAction = () => {
        onCallback();
    }

    return (
        <div className={classes.root}>
            <Box>
                <Button
                    variant="contained" style={{ float: 'right', margin: "5px" }}
                    onClick={(e) => { handleAction }}
                >{action.icon}{action.label}</Button>
            </Box>
        </div>
    );
}

MButton.propTypes = {
    history: PropTypes.object,
    action: PropTypes.object,
    onCallback: PropTypes.func
};

export default (MButton);
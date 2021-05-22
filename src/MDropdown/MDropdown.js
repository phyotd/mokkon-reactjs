import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Grid,
    Typography,
    NativeSelect
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

function MDropdown(props) {
    const classes = useStyles();
    const { field } = props;

    return (
        <div className={classes.root}>
            <Grid key={field.fieldName} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <Grid item xs={12} sm={5}>
                    <Box style={{ width: '150px' }}>
                        <Typography style={{ paddingRight: '30px', color: 'grey' }}>{field.label}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <NativeSelect
                        // value={data !== undefined ? data[fieldId] : ''}
                        // onChange={(e) => handleDropDownChange(e, field.fieldName)}
                        id={field.fieldName}
                        // input={<BootstrapInput />}
                        style={{ width: '100%' }}
                    >
                        <option aria-label="None" value="" >Select</option>
                        {field.options.map((d, i) => {
                            var name = d[field.fieldName] !== undefined ? d[field.fieldName] : d.name;
                            return (<option name={name} value={d.id} key={d.id}>{name}</option>);
                        })}
                    </NativeSelect>
                </Grid>
            </Grid>
        </div>
    );
}

MDropdown.propTypes = {
    history: PropTypes.object,
    field: PropTypes.any,
};

export default (MDropdown);
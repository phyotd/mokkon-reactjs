import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    TextField,
    Grid,
    InputBase,
    Button,
    NativeSelect,
    Box,
    Typography
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: 'transparent',
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    }
}));

function FieldEditor(props) {
    const classes = useStyles();
    const { fields = [],
        currentTabName = "account",
        isNew = false,
        buttonColor = 'blue',
        updateData = {},
        onCreate,
        onUpdate,
        onInvite,
        onCancel,
        onApproved } = props;
    const [data, setDataField] = React.useState(updateData != undefined ? updateData : {});
    const [imgPreview, setImgPreviewPath] = React.useState(null);

    const handleTextString = (e, fieldName) => {
        if (isNew) {
            setDataField({ ...data, [fieldName]: e.target.value });
        } else {
            setDataField({ ...data, [fieldName]: e.target.value });
        }
    }

    const handleTextNumber = (e, fieldName) => {
        if (isNew) {
            setDataField({ ...data, [fieldName]: e.target.value });
        } else {
            setDataField({ ...data, [fieldName]: e.target.value });
        }
    }

    const handleTextMultiline = (e, fieldName) => {
        if (isNew) {
            setDataField({ ...data, [fieldName]: e.target.value });
        } else {
            setDataField({ ...data, [fieldName]: e.target.value });
        }
    }

    const handleDate = (e, fieldName) => {
        if (isNew) {
            setDataField({ ...data, [fieldName]: e.target.value });
        } else {
            setDataField({ ...data, [fieldName]: e.target.value });
        }
    }

    const handleDropDownChange = (e, fieldName) => {
        var selectedIndex = e.target.options.selectedIndex;
        var selectedValue = e.target.options[selectedIndex].getAttribute('name');

        var fn = fieldName.split('_');
        var fieldId = fn[0] + '_' + 'id';

        if (isNew) {
            setDataField({ ...data, [fieldName]: selectedValue, [fieldId]: e.target.value });

        } else {
            setDataField({ ...data, [fieldName]: selectedValue, [fieldId]: e.target.value });

        }
    }

    const handleSave = () => {
        if (isNew) {
            onCreate(data);
        } else {
            onUpdate(data);
        }
    }

    const handleApproved = () => {
        onApproved(data);
    }

    const handleCancel = () => {
        onCancel();
    }

    const handleInvite = () => {
        onInvite(data);
    }

    const handleImgUpload = (e, fieldName) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setImgPreviewPath(reader.result);
        }
        reader.readAsDataURL(file);
        // setDataField({ ...data, [fieldName]: e.target.files[0].name });
    }
    console.log('file upload :', data);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={11}>
                    {fields.map((f, i) => {

                        if (f.type == 'text_string') {
                            return <Grid key={f.fieldName} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Grid item xs={12} sm={5}>
                                    <Box style={{ width: '150px' }}>
                                        <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField id={f.fieldName}
                                        variant="outlined"
                                        autoComplete="off"
                                        size={"small"}
                                        style={{ width: '100%' }}
                                        value={data != undefined ? data[f.fieldName] : null}
                                        onChange={(e) => handleTextString(e, f.fieldName)}
                                    />
                                </Grid>
                            </Grid>;
                        }
                        else if (f.type == 'text_number') {
                            return <Grid key={f.fieldName} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Grid item xs={12} sm={5}>
                                    <Box style={{ width: '150px' }}>
                                        <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        id={f.fieldName}
                                        variant="outlined"
                                        autoComplete="off"
                                        size={"small"}
                                        style={{ width: '100%' }}
                                        type="number"
                                        value={data != undefined ? data[f.fieldName] : ''}
                                        // onChange={handleTextNumber}
                                        onChange={(e) => handleTextNumber(e, f.fieldName)}
                                    />
                                </Grid>
                            </Grid>;
                        }
                        else if (f.type == 'text_multiline') {
                            return <Grid key={f.fieldName} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Grid item xs={12} sm={5}>
                                    <Box style={{ width: '150px' }}>
                                        <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        id={f.fieldName}
                                        multiline
                                        autoComplete="off"
                                        rows={3}
                                        size={"small"}
                                        style={{ width: '100%' }}
                                        value={data != undefined ? data[f.fieldName] : ''}
                                        variant="outlined"
                                        onChange={(e) => handleTextMultiline(e, f.fieldName)}
                                    />
                                </Grid>
                            </Grid>;
                        }
                        else if (f.type == 'date') {
                            return <Grid key={f.fieldName} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Grid item xs={12} sm={5}>
                                    <Box style={{ width: '150px' }}>
                                        <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        id={f.fieldName}
                                        variant="outlined"
                                        autoComplete="off"
                                        size={"small"}
                                        value={data != undefined ? data[f.fieldName] : ''}
                                        type="date"
                                        style={{ width: '100%' }}
                                        // onChange={handleDate}
                                        onChange={(e) => handleDate(e, f.fieldName)}
                                    />
                                </Grid>
                            </Grid>;
                        }
                        else if (f.type == 'photo') {
                            return <Grid key={f.fieldName} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Grid item xs={12} sm={5}>
                                    <Box style={{ width: '150px' }}>
                                        <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <img src={imgPreview == null ? data['photo_url'] : imgPreview} style={{ width: '120px', height: '120px', border: '1px solid grey' }}></img>
                                    <input type='file' id='img-upload' onChange={(e) => handleImgUpload(e, f.fieldName)}></input>
                                </Grid>
                            </Grid>;
                        }
                        else if (f.type == 'dropdown') {
                            if (f.fieldName == 'priority') {

                                return <Grid key={f.fieldName} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <Grid item xs={12} sm={5}>
                                        <Box style={{ width: '150px' }}>
                                            <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <NativeSelect
                                            id="demo-customized-select-native"
                                            value={data != undefined ? data[f.fieldName] : ''}
                                            onChange={(e) => handleDropDownChange(e, f.fieldName)}
                                            id={f.fieldName}
                                            input={<BootstrapInput />}
                                            style={{ width: '100%' }}
                                        >
                                            <option aria-label="None" value="" >Select</option>
                                            {f.options.map((d, i) => {
                                                return <option name={d.name} value={d.id}>{d.name}</option>;
                                            })}
                                        </NativeSelect>
                                    </Grid>
                                </Grid>;
                            } else {
                                var fn = f.fieldName.split('_');
                                var fieldId = fn[0] + '_' + 'id';

                                return <Grid key={f.fieldName} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <Grid item xs={12} sm={5}>
                                        <Box style={{ width: '150px' }}>
                                            <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <NativeSelect
                                            id="demo-customized-select-native"
                                            value={data != undefined ? data[fieldId] : ''}
                                            onChange={(e) => handleDropDownChange(e, f.fieldName)}
                                            id={f.fieldName}
                                            input={<BootstrapInput />}
                                            style={{ width: '100%' }}
                                        >
                                            <option aria-label="None" value="" >Select</option>
                                            {f.options.map((d, i) => {
                                                return <option name={d.name} value={d.id}>{d.name}</option>;
                                            })}
                                        </NativeSelect>
                                    </Grid>
                                </Grid>;
                            }
                        }
                    })}

                </Grid>

                {currentTabName == 'account' ?
                    <Grid item xs={11}>
                        <Box>
                            <Button style={{ color: 'white', backgroundColor: buttonColor != undefined ? buttonColor : 'blue', float: 'right' }}
                                onClick={handleInvite}
                            > Invite</Button>
                        </Box>
                    </Grid>
                    :
                    <Grid item xs={11}>
                        <Box>
                            <Button style={{ color: 'white', backgroundColor: 'grey', float: 'right', marginLeft: '10px' }}
                                onClick={handleCancel}
                            ><CancelIcon /> Cancel</Button>
                        </Box>
                        {data.status == 'requested' ? <Box>
                            <Button style={{ color: 'white', backgroundColor: buttonColor != undefined ? buttonColor : 'blue', float: 'right', marginLeft: '10px' }}
                                onClick={() => handleApproved()}
                            >Approved</Button>
                        </Box> :
                            <Box >
                                <Button style={{ color: 'white', backgroundColor: buttonColor != undefined ? buttonColor : 'blue', float: 'right' }}
                                    onClick={handleSave}
                                ><SaveIcon /> Save</Button>
                            </Box>
                        }

                    </Grid>
                }


            </Grid>
        </div>
    );
}

FieldEditor.propTypes = {
    history: PropTypes.object,
    fields: PropTypes.array.isRequired,
    optionsData: PropTypes.array,
    isNew: PropTypes.bool.isRequired,
    onCreate: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    onApproved: PropTypes.func,
    onInvite: PropTypes.func,
    data: PropTypes.object,
    currentTabName: PropTypes.string,
    buttonColor: PropTypes.any
};

export default (FieldEditor);


import React from 'react';
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
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

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



function MkForm(props) {
    const classes = useStyles();
    const {
        fields = [],
        data = {},
        onDropdownCreateNew,
        actions = [],
    } = props;
    const [_data, setDataField] = React.useState(data != undefined ? data : {});

    const handleTextString = (e, fieldName) => {
        setDataField({ ..._data, [fieldName]: e.target.value });
    }

    const handleTextNumber = (e, fieldName) => {
        setDataField({ ..._data, [fieldName]: e.target.value });
    }

    const handleTextMultiline = (e, fieldName) => {
        setDataField({ ..._data, [fieldName]: e.target.value });
    }

    const handleDate = (e, fieldName) => {
        setDataField({ ..._data, [fieldName]: e.target.value });
    }

    const handleDropDownChange = (e, fieldName) => {
        var selectedIndex = e.target.options.selectedIndex;
        var selectedValue = e.target.options[selectedIndex].getAttribute('name');

        var fn = fieldName.split('_');
        var fieldId = fn[0] + '_' + 'id';
        setDataField({ ..._data, [fieldName]: selectedValue, [fieldId]: e.target.value });
    }

    const handleImgUpload = (e, fieldName) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setImgPreviewPath(reader.result);
        }
        reader.readAsDataURL(file);
        setDataField({ ..._data, [fieldName]: e.target.files[0].name });
    }

    const handleCanCreateNew = (data) => {
        onDropdownCreateNew(data);
    }

    const onChangeValue = (fieldName, value) => {
        setDataField({ ..._data, [fieldName]: value });
    }

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    {fields.map((f, i) => {

                        if (f.type == 'text_string') {
                            return <Grid key={f.field_name} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Grid item xs={12} sm={5}>
                                    <Box style={{ width: '150px' }}>
                                        <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField id={f.field_name}
                                        variant="outlined"
                                        autoComplete="off"
                                        size={"small"}
                                        style={{ width: '100%' }}
                                        InputProps={{
                                            readOnly: f.readOnly ? f.readOnly : false,
                                        }}
                                        value={_data != undefined ? _data[f.field_name] : ''}
                                        onChange={(e) => handleTextString(e, f.field_name)}
                                    />
                                </Grid>
                            </Grid>;
                        }
                        else if (f.type == 'text_number') {
                            return <Grid key={f.field_name} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Grid item xs={12} sm={5}>
                                    <Box style={{ width: '150px' }}>
                                        <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        id={f.field_name}
                                        variant="outlined"
                                        autoComplete="off"
                                        size={"small"}
                                        style={{ width: '100%' }}
                                        type="number"
                                        value={_data != undefined ? _data[f.field_name] : ''}
                                        onChange={(e) => handleTextNumber(e, f.field_name)}
                                    />
                                </Grid>
                            </Grid>;
                        }
                        else if (f.type == 'text_multiline') {
                            return <Grid key={f.field_name} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Grid item xs={12} sm={5}>
                                    <Box style={{ width: '150px' }}>
                                        <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        id={f.field_name}
                                        multiline
                                        autoComplete="off"
                                        rows={3}
                                        size={"small"}
                                        style={{ width: '100%' }}
                                        value={_data != undefined ? _data[f.field_name] : ''}
                                        variant="outlined"
                                        onChange={(e) => handleTextMultiline(e, f.field_name)}
                                    />
                                </Grid>
                            </Grid>;
                        }
                        else if (f.type == 'date') {
                            return <Grid key={f.field_name} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Grid item xs={12} sm={5}>
                                    <Box style={{ width: '150px' }}>
                                        <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        id={f.field_name}
                                        variant="outlined"
                                        autoComplete="off"
                                        size={"small"}
                                        value={_data != undefined ? _data[f.field_name] : ''}
                                        type="date"
                                        style={{ width: '100%' }}
                                        onChange={(e) => handleDate(e, f.field_name)}
                                    />
                                </Grid>
                            </Grid>;
                        }
                        else if (f.type == 'dropdown') {
                            if (f.options != undefined && f.option_label_field != undefined) {
                                if (f.field_name == 'priority') {

                                    return <Grid key={f.field_name} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                        <Grid item xs={12} sm={5}>
                                            <Box style={{ width: '150px' }}>
                                                <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={7}>
                                            <NativeSelect
                                                id="demo-customized-select-native"
                                                value={_data != undefined ? _data[f.field_name] : ''}
                                                onChange={(e) => handleDropDownChange(e, f.field_name)}
                                                id={f.field_name}
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
                                    return <Grid key={f.field_name} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                        <Grid item xs={12} sm={5}>
                                            <Box style={{ width: '150px' }}>
                                                <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={7}>
                                            <Autocomplete
                                                id="combo-box-demo"
                                                options={f.options}
                                                getOptionLabel={(option) => {
                                                    if (typeof option === 'string') {
                                                        return option;
                                                    }
                                                    return option[f.option_label_field];
                                                }}
                                                style={{ width: '100%' }}
                                                size='small'
                                                value={_data != undefined ? _data[f.field_name] ? _data[f.field_name] : " " : " "}
                                                filterOptions={(options, params) => {
                                                    console.log("Autocomplete", f.can_create);
                                                    if (f.can_create) {
                                                        var newFilter = ['+ Add New']
                                                        var filtered = filter(options, params);
                                                        return [...newFilter, ...filtered];
                                                    } else {
                                                        var filtered = filter(options, params);
                                                        return filtered;
                                                    }
                                                }}
                                                onChange={(event, newValue) => {
                                                    if (typeof newValue === 'string') {
                                                        console.log('f.field_name', f.field_name, " f.can_create", f.can_create);
                                                        var d = {
                                                            "canCreate": f.can_create,
                                                            "fields": f.fields,
                                                            "name": f.name,
                                                            "fieldName": f.field_name
                                                        }
                                                        handleCanCreateNew(d);
                                                    } else {
                                                        if (newValue != null && newValue.inputValue != '' && newValue.product_desc != "") {
                                                            onChangeValue(f.field_name, newValue[f.option_label_field]);
                                                        }
                                                    }
                                                }}
                                                renderInput={(params) => <TextField {...params} variant="outlined" />}

                                            />

                                        </Grid>
                                    </Grid>;
                                }
                            }
                        }
                        else if (f.type == 'photo_list') {
                            console.log('photo_list:', _data);
                            return <div>
                                <Grid
                                    key={f.field_name} container
                                    style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <Grid item xs={12} sm={5}>
                                        <Box style={{ width: '150px' }}>
                                            <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <form>
                                                <div className="form-group">
                                                    <input type="file" name="imgCollection"
                                                        onChange={(e) => onFileChange(e, f.field_name)} multiple />
                                                </div>
                                            </form>
                                        </div>
                                    </Grid>
                                </Grid>
                                {_data[f.field_name] != undefined && _data[f.field_name].length != 0 ?
                                    <Grid
                                        key={f.field_name} container
                                        style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                        <Grid item xs={12}>
                                            <div style={{ display: 'block', alignItems: 'center', marginBottom: '10px' }}>
                                                <GridList className={classes.gridList}>
                                                    {_data[f.field_name] == undefined ? <span /> : _data[f.field_name].map((tile) => (
                                                        <GridListTile key={tile} style={{ width: '100px', height: '100px' }}>
                                                            <img src={tile} alt={tile} onClick={(e) => {
                                                                setSelectedPhoto(tile);
                                                                setOpen(true);
                                                            }
                                                            } />
                                                        </GridListTile>
                                                    ))}
                                                </GridList>
                                            </div>
                                        </Grid>
                                        <Dialog maxWidth="lg" aria-labelledby="customized-dialog-title" open={open}>
                                            <DialogTitle id="customized-dialog-title" onClose={(e) => setOpen(false)} >
                                                Photos
                                            </DialogTitle>
                                            <DialogContent dividers>
                                                <Grid item xs={12}>
                                                    <Grid>
                                                        <img src={selectedPhoto} className="show-img" alt="logo" />
                                                    </Grid>
                                                    <br />
                                                    <Grid container spacing={3}>
                                                        {_data[f.field_name].length > 0 ? _data[f.field_name].map((value) => (
                                                            <Grid key={value} item>
                                                                <Box className="square" > <img src={value} className="thumnail-img" alt="logo" onClick={(e) => setSelectedPhoto(value)} /></Box>
                                                            </Grid>
                                                        )) : <span />}
                                                    </Grid>
                                                </Grid>
                                            </DialogContent>
                                        </Dialog>
                                    </Grid>
                                    : <Grid></Grid>}
                            </div>;
                        }
                        else if (f.type == 'list') {
                            console.log('list', _data[f.field_name]);
                            return <div>
                                <Grid
                                    key={f.field_name} container
                                    style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <Grid item xs={12} sm={5}>
                                        <Box style={{ width: '150px' }}>
                                            <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <div style={{ display: 'block', alignItems: 'center', marginBottom: '10px' }}>
                                            <Box>
                                                <Button onClick={handleSelectItemDialog}><AddIcon /></Button>
                                            </Box>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid
                                    key={f.field_name} container
                                    style={{ display: 'block', alignItems: 'center', marginBottom: '10px' }}>

                                    <div style={{ display: 'block', alignItems: 'center', marginBottom: '10px' }}>
                                        <TableContainer>
                                            <Table className={classes.table} size="small" aria-label="a dense table">
                                                <TableHead>
                                                    <TableRow>
                                                        {partHeaders.map((h, i) => {
                                                            return (<TableCell key={h.id} align='left'>{h.label}</TableCell>);
                                                        })}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {_data[f.field_name].length > 0 ? _data[f.field_name].map((row) => (
                                                        <TableRow key={row.name}>
                                                            {partHeaders.map((h, i) => {
                                                                return (<TableCell key={h.id} align={h.numeric ? 'right' : 'left'}>{row[h.id]}</TableCell>);
                                                            })}
                                                        </TableRow>
                                                    )) : <span />
                                                    }
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>

                                </Grid>
                            </div>;
                        }
                        else if (f.type == 'time') {
                            return <Grid key={f.field_name} container style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Grid item xs={12} sm={5}>
                                    <Box style={{ width: '150px' }}>
                                        <Typography style={{ paddingRight: '30px', color: 'grey' }}>{f.label}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={7}> <TextField
                                    id="time"
                                    variant="outlined"
                                    size="small"
                                    type="time"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                    onChange={(e) => handleTime(e, f.field_name)}
                                />
                                </Grid>
                            </Grid>;
                        }
                    })}

                </Grid>

                {/* display actions buttons */}
                {actions.length > 0 ?
                    <Grid item xs={12}>
                        {actions.map((a) => {
                            if (a.status === _data.status) {
                                return <MButton action={a} onCallback={a.callback(_data)}></MButton>;
                            }
                        })}

                    </Grid> : <Grid />}
            </Grid>
        </div>

    );
}

MkForm.propTypes = {
    history: PropTypes.object,
    fields: PropTypes.array.isRequired,
    data: PropTypes.object,
    isNew: PropTypes.bool,
    actions: PropTypes.array,
    onDropdownCreateNew: PropTypes.func
};

export default (MkForm);


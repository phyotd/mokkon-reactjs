import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { MkForm } from '..';

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
    }, button: {
        color: 'white',
        color: theme.palette.primary.main,
        width: 150,
        height: 55
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    headText: {
        fontSize: 14,
        float: "left",
        color: theme.palette.primary.main,
        fontWeight: "bold"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function getDataString(data, fieldName) {
    return data[fieldName];
}


function InfoPage(props) {
    const classes = useStyles();
    const {
        infoData,
        displayFields,
        isNew = false,
        isEditable,
        currentTabName,
        actions } = props;

    const [editable, setEditable] = React.useState(isEditable != undefined ? isEditable : true);
    const [data, setData] = React.useState({});

    const handleEdit = () => {
        setEditable(false)
    }

    const handleUpdateData = (data) => {
        console.log('handle update date:', data);
        setData(data);
    }


    return (
        <div className={classes.root}>
            {isNew ?
                <Grid container style={{ marginTop: '30px' }}>
                    <Grid item xs={12} sm={7}>
                        <MkForm
                            updateData={infoData}
                            fields={displayFields}
                            isNew={isNew}
                            onDataCallback={(d) => handleUpdateData(d)}
                        ></MkForm>
                    </Grid>
                </Grid> : <Grid container style={{ marginTop: '30px' }}>
                    <Grid item xs={12} sm={7}>
                        {!editable ?
                            <MkForm
                                fields={displayFields}
                                isNew={isNew}
                                updateData={infoData}
                                onDataCallback={(d) => handleUpdateData(d)}
                            ></MkForm>
                            :
                            displayFields.map((d, i) => {
                                return <Grid container>
                                    <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                        <Grid item xs={12} sm={5}>
                                            <Box style={{ width: '250px' }}>
                                                <Typography style={{ paddingRight: '30px', color: 'grey' }}>{d.label}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={7}>
                                            {d.type == 'photo' ? <img src={infoData['photo_url']} style={{ width: '120px', height: '120px', border: '1px solid grey' }}></img> :
                                                <Typography style={{ paddingRight: '30px' }}>{infoData != undefined ? getDataString(infoData, d.fieldName) : ''}</Typography>}
                                        </Grid>
                                    </Grid>
                                </Grid>;
                            })}
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Grid
                            container
                            direction="row"
                            alignItems="flex-end">

                            {actions.map((a, i) => {

                                if (currentTabName == 'account') {
                                    if (infoData.status == 'invited') {
                                        return <Box>
                                            <Button style={{ color: 'white', backgroundColor: 'grey', float: 'right', marginLeft: '10px' }}
                                                onClick={() => a.callback(data)}
                                            >{a.label}</Button>
                                        </Box>;
                                    }
                                    if (infoData.status == 'joined') {
                                        return <Box>
                                            <Button style={{ color: 'white', backgroundColor: 'grey', float: 'right', marginLeft: '10px' }}
                                                onClick={() => a.callback(data)}
                                            >{a.label}</Button>
                                        </Box>;
                                    }
                                    if (infoData.status == 'disabled') {
                                        return <Box>
                                            <Button style={{ color: 'white', backgroundColor: 'grey', float: 'right', marginLeft: '10px' }}
                                                onClick={() => a.callback(data)}
                                            >{a.label}</Button>
                                        </Box>;
                                    }
                                    if (infoData.status == 'requested') {
                                        if (editable) {
                                            return <Box>
                                                <Button style={{ marginLeft: '10px' }}
                                                    onClick={handleEdit}
                                                >{a.icon}{a.label}</Button>
                                            </Box>;
                                        } else {
                                            return <Box>
                                                <Button style={{ color: 'white', backgroundColor: 'grey', float: 'right', marginLeft: '10px' }}
                                                    onClick={() => a.callback(data)}
                                                >{a.label}</Button>
                                            </Box>;
                                        }

                                    }
                                } else {
                                    if (editable) {
                                        if (a.action_type == 'edit') {
                                            console.log('type: ', a.action_type, 'editable: ', editable);

                                            return <Box>
                                                <Button style={{ marginLeft: '10px' }}
                                                    onClick={handleEdit}
                                                >{a.icon}{a.label}</Button>
                                            </Box>
                                        }
                                        if (a.action_type == 'delete') {
                                            return <Box>
                                                <Button style={{ float: 'right', marginLeft: '10px' }}
                                                    onClick={() => a.callback(data)}
                                                >{a.icon}{a.label}</Button>
                                            </Box>
                                        }
                                    } else {
                                        if (a.action_type == 'save') {
                                            return <Box>
                                                <Button style={{ marginLeft: '10px' }}
                                                    onClick={() => a.callback(data)}
                                                >{a.icon}{a.label}</Button>
                                            </Box>
                                        }
                                        if (a.action_type == 'cancel') {
                                            return <Box>
                                                <Button style={{ float: 'right', marginLeft: '10px' }}
                                                    onClick={() => a.callback(data)}
                                                >{a.icon}{a.label}</Button>
                                            </Box>
                                        }
                                    }

                                }
                            })}
                        </Grid>
                    </Grid>

                </Grid>}
        </div >
    );
}

InfoPage.propTypes = {
    history: PropTypes.object,
    infoData: PropTypes.object,
    displayFields: PropTypes.array,
    isNew: PropTypes.bool,
    isEditable: PropTypes.bool,
    actions: PropTypes.any
};

export default (InfoPage);

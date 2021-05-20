import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import { Grid, IconButton } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { connect, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
// import { changePaginatePage, changeRowPerPage, getDataRecords, refreshRecord } from '../actions/app';
// import RowMenu from './RowMenu';
// import ConfirmDialog from './ConfirmDialog';

function descendingComparator(a, b, _orderBy) {
    if (b[_orderBy] < a[_orderBy]) {
        return -1;
    }
    if (b[_orderBy] > a[_orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(_order, _orderBy) {
    return _order === 'desc'
        ? (a, b) => descendingComparator(a, b, _orderBy)
        : (a, b) => -descendingComparator(a, b, _orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const _order = comparator(a[0], b[0]);
        if (_order !== 0) return _order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#0d47a1a8',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


function EnhancedTableHead(props) {
    const { classes, _order, _orderBy, onRequestSort, headCells, dispatch, query } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
        // dispatch(refreshRecord());
        // dispatch(getDataRecords(query));
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={_orderBy === headCell.id ? _order : false}
                        style={{ width: headCell.id === 'sr' ? '15px' : headCell.width ? headCell.width : '' }}
                    >
                        {headCell.id !== 'sr' ?
                            <TableSortLabel
                                active={_orderBy === headCell.id}
                                direction={_orderBy === headCell.id ? _order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                                style={{ whiteSpace: "nowrap" }}
                            >
                                {headCell.label}
                                {_orderBy === headCell.id ? (
                                    <span className={classes.visuallyHidden}>
                                        {_order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </span>
                                ) : null}
                            </TableSortLabel>
                            : <TableSortLabel
                                hideSortIcon={true}
                                align="right"
                            >
                                {headCell.label}

                            </TableSortLabel>
                        }

                    </StyledTableCell>
                ))}
                <StyledTableCell style={{ width: '150px' }} />

            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    _order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    _orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        // minWidth: 750,
        tableLayout: 'fixed'
    },
    visuallyHidden: {
        b_order: 0,
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
            b_orderBottom: "none"
        },
        "&&:after": {
            b_orderBottom: "none"
        }
    },
    bomLink: {
        cursor: "pointer",
        color: theme.primary,
        textDecoration: "underline",
    }
}));

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: '#0d47a11c',
        },
    },
}))(TableRow);

function getUpdatedDate(p) {
    var statusDate = p['updated_date'];
    var day = '';
    if (statusDate !== undefined) {
        var convertDate = new Date(statusDate.toDate());
        var dd = String(convertDate.getDate()).padStart(2, '0');
        var mm = String(convertDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = convertDate.getFullYear();

        day = mm + '/' + dd + '/' + yyyy;
    }

    return day.toString();
}

export const formatDateToLocal = (date, withTime = true) => {
    if (!date) return "";
    var d = new Date(date);
    var ampm = d.getHours() >= 12 ? 'PM' : 'AM';
    var hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    if (withTime) {
        return ("0" + (d.getMonth() + 1)).slice(-2) + "/" + ("0"
            + d.getDate()).slice(-2) + "/" + d.getFullYear()
            + " " + ("0" + (hours)).slice(-2)
            + ":" + ("0" + (d.getMinutes())).slice(-2)
            + ":" + ("0" + (d.getSeconds())).slice(-2)
            + " " + ampm;
    } else {
        return ("0" + (d.getMonth() + 1)).slice(-2) + "/" + ("0"
            + d.getDate()).slice(-2) + "/" + d.getFullYear();
    }
}

function RowMenu(props) {
    const { row, actions, onSelectedAction, showEdit = false, onRowEdit } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleSelectMenu = (e, row, action) => {
        e.stopPropagation();
        onSelectedAction(row, action.action_name);
        setAnchorEl(null);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        e.stopPropagation();
    };

    const handleEdit = (e) => {
        onRowEdit(row);
        e.stopPropagation();
    }

    return (
        <>
            <Menu
                id={`actions-${row.id}`}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {actions.map((action) => {
                    return <MenuItem key={action.display_name}
                        onClick={(e) => handleSelectMenu(e, row, action)}
                    >
                        {action.display_name}
                    </MenuItem>
                }
                )}
            </Menu>
            <Grid style={{ display: 'flex' }}>
                <IconButton
                    id={`edit-${row.id}`}
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleEdit}
                >
                    <EditIcon />
                </IconButton>

                <IconButton
                    id={`dropdown-${row.id}`}
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                >
                    <ExpandMore />
                </IconButton>
            </Grid>

        </>
    );
}

RowMenu.propTypes = {
    row: PropTypes.object.isRequired,
    actions: PropTypes.array.isRequired,
    onSelectedAction: PropTypes.func.isRequired,
    showEdit: PropTypes.bool,
    onRowEdit: PropTypes.func
}

function ConfirmDialog(props) {
    const { type, itemName, openDialog, onCancel, onContinue } = props;
    const [open, setOpen] = React.useState(openDialog);

    const handleClose = () => {
        setOpen(false);
        onCancel(false);
    };

    const handleContinue = () => {
        onContinue(true);
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete this " + type + ' "' + itemName + '"?'}</DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
            </Button>
                    <Button onClick={handleContinue} color="primary" autoFocus>
                        Delete
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

ConfirmDialog.propTypes = {
    history: PropTypes.object,
    type: PropTypes.string,
    itemName: PropTypes.string,
    openDialog: PropTypes.bool,
    onCancel: PropTypes.func,
    onContinue: PropTypes.func
};

function MkTable(props) {
    const classes = useStyles();
    const { dispatch,
        data = [],
        headers = [],
        actions,
        query,
        onActions, title,
        page = 0,
        rowsPerPage = 10,
        noMoreToLoad = false,
        order,
        orderBy,
        isLoading = false,
        onChangePaginatePage,
        onGetData,        
        onUpdateDataRow,
        onChangeRowPerPage,

    } = props;

    const [_rowsPerPage, setRowsPerPage] = React.useState(rowsPerPage);
    const [_page, setPage] = React.useState(page);
    const [_noMoreToLoad, setNoMoreToLoad] = React.useState(noMoreToLoad);
    const [_order, setOrder] = React.useState(order);
    const [_orderBy, setOrderBy] = React.useState(orderBy);
    const [_isLoading, setIsLoading] = React.useState(isLoading);
    const [_isConfirm, setIsConfirm] = React.useState(false);

    const handleSelectMenu = (row, action) => {
        if (action === 'delete') {
            setItemName(row.name === undefined ? row.product_desc : row.name);
            setIsConfirm(true);
            setRow(row);
            setAction(action);
        } else {
            onActions(row, action);
        }
    }

    const handleDelete = (v) => {
        setIsConfirm(false);
        onActions(row, action);
    }

    const handleCancel = (v) => {
        setIsConfirm(false);
    }

    const handleRowEdit = (row) => {
        onUpdateDataRow(row);
    }

    var offset = _page * _rowsPerPage;

    // useEffect(() => {
    //     setNoMoreToLoad(selector.noMoreToLoad);
    //     setPage(selector.page);
    //     setOrder(selector._order);
    //     setOrderBy(selector._orderBy);
    //     setIsLoading(selector.loading);
    //     setRowsPerPage(selector.rowsPerPage);
    // }, [selector]);

    // useEffect(() => {
    //     var rowsPerPage = localStorage.getItem('rowPerPage');
    //     if (rowsPerPage !== null) {
    //         setRowsPerPage(parseInt(rowsPerPage));
    //         // dispatch(changeRowPerPage(parseInt(rowsPerPage)));
    //     }
    // }, [dispatch]);

    const handleRequestSort = (event, property) => {
        const isAsc = _orderBy === property && _order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        if (!noMoreToLoad && (newPage + 1) * _rowsPerPage >= data.length) {
            // dispatch(getDataRecords(query));
            onGetData();
        }
        // dispatch(changePaginatePage(newPage));
        onChangePaginatePage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        localStorage.setItem("rowPerPage", parseInt(event.target.value));
        // dispatch(changeRowPerPage(parseInt(localStorage.getItem('rowPerPage'))));
        // dispatch(refreshRecord());
        // dispatch(getDataRecords(query));
        onChangeRowPerPage(parseInt(localStorage.getItem('rowPerPage')));
    };

    const getStatus = (data, header) => {
        var v = data[header.id];
        var color = 'red';
        if (v == 'Pending') {
            color = 'red';
        } else if (v == 'Started') {
            color = 'orange';
        } else {
            color = 'green';
        }
        return (<TableCell key={header.id} align={header.numeric ? 'right' : 'left'} ><Typography style={{ color: 'red', fontWeight: '500' }}>{data[header.id]}</Typography></TableCell>);
    };

    // const isSelected = (name) => selected.indexOf(name) !== -1;

    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item>
                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            size='small'
                            aria-label="enhanced table"
                        >
                            <EnhancedTableHead
                                classes={classes}
                                headCells={headers}
                                _order={_order}
                                _orderBy={_orderBy}
                                onRequestSort={handleRequestSort}
                                rowCount={data.length !== undefined ? data.length : 0}
                                dispatch={dispatch}
                                query={query}
                            />

                            <TableBody>
                                {isLoading ? <StyledTableRow >
                                    <TableCell colSpan={headers.length} align="center"> <CircularProgress /></TableCell>
                                </StyledTableRow> :
                                    (data.length !== 0 ? stableSort(data, getComparator(_order, _orderBy))
                                        .slice(_page * _rowsPerPage, _page * _rowsPerPage + _rowsPerPage)
                                        .map((row, index) => {
                                            return (
                                                <StyledTableRow
                                                    hover
                                                    role="checkbox"
                                                    tabIndex={-1}
                                                    key={row.id}
                                                    id={row.id}
                                                >

                                                    {headers.map((h, i) => {
                                                        if (h.id === 'sr') {
                                                            return (<TableCell key={h.id} align="right" style={{ width: '15px' }}>{++offset}</TableCell>);
                                                        }
                                                        if (h.id === 'status') {
                                                            getStatus(row, h);
                                                            return (<TableCell key={h.id} align={h.numeric ? 'right' : 'left'}>{row[h.id]}</TableCell>);
                                                        }
                                                        if (h.id === 'updated_date') {
                                                            return (<TableCell key={h.id} align={h.numeric ? 'right' : 'left'} style={{ width: h.width }}>{getUpdatedDate(row)}</TableCell>);
                                                        } else {
                                                            return (<TableCell key={h.id} align={h.numeric ? 'right' : 'left'} style={{ width: h.width }}
                                                            >{row[h.id]}</TableCell>);
                                                        }
                                                    })}
                                                    {actions ?
                                                        <TableCell style={{ width: '150px' }}>
                                                            <RowMenu
                                                                actions={actions}
                                                                row={row}
                                                                showEdit={true}
                                                                onRowEdit={(data) => handleRowEdit(data)}
                                                                onSelectedAction={(data, actionName) => handleSelectMenu(data, actionName)}
                                                            />
                                                        </TableCell>
                                                        : <TableCell style={{ width: '150px' }}>
                                                            <IconButton onClick={(event) => handleRowEdit(row)}><EditIcon /></IconButton>
                                                        </TableCell>}
                                                </StyledTableRow>

                                            );
                                        }) : <StyledTableRow style={{ width: '100%' }}></StyledTableRow>)}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TablePagination
                        rowsPerPageOptions={[10, 30, 50]}
                        labelDisplayedRows={function ({ from, to, count }) { }}
                        component="div"
                        count={data.length}
                        rowsPerPage={_rowsPerPage}
                        page={_page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Grid></Grid>
            {_isConfirm ? <ConfirmDialog
                type={title}
                itemName={itemName}
                openDialog={_isConfirm}
                onCancel={(v) => handleCancel(v)}
                onContinue={(v) => handleDelete(v)}></ConfirmDialog> : <div />}
        </div>
    );
}

MkTable.propTypes = {
    history: PropTypes.object,
    headers: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    query: PropTypes.object,
    onProductBOMClick: PropTypes.func,
    onActions: PropTypes.func,
    actions: PropTypes.array,
    title: PropTypes.string,
    order: PropTypes.any,
    orderBy: PropTypes.any,
    rowsPerPage: PropTypes.any,
    noMoreToLoad: PropTypes.any,
    order: PropTypes.any,
    orderBy: PropTypes.any,
    isLoading: PropTypes.any,
    onChangePaginatePage: PropTypes.any,
    onGetData: PropTypes.any,
    onChangeRowPerPage: PropTypes.any
};

export default (MkTable);

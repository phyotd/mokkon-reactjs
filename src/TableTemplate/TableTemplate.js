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
import { Grid } from '@material-ui/core';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
    const { classes,
        order,
        orderBy,
        onRequestSort,
        onRefreshData,
        headCells } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
        onRefreshData();
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.id != 'id' ?
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <span className={classes.visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </span>
                                ) : null}
                            </TableSortLabel>
                            : <TableSortLabel
                                hideSortIcon={true}
                            >
                                {headCell.label}

                            </TableSortLabel>
                        }

                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onRefreshData: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
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

function TableTemplate(props) {
    const classes = useStyles();
    const {
        data = [],
        headers = [],
        onUpdateData,
        onReloadData,
        onChangePage,
        onChangeRowsPerPage,
        rowsPerPage = 10,
        page = 0,
        order = 'asc',
        orderBy
    } = props;

    const [selected, setSelected] = React.useState([]);
    const [dense, setDense] = React.useState(false);
    const [rowDataPerPage, setRowsPerPage] = React.useState(rowsPerPage != undefined ? rowsPerPage : 10);
    const [paginatePage, setPage] = React.useState(page != undefined ? page : 0);
    const [paginateOrder, setOrder] = React.useState(order != undefined ? order : 'asc');
    const [paginateOrderBy, setOrderBy] = React.useState(orderBy != undefined ? orderBy : 'name');

    var offset = paginatePage * rowDataPerPage;

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = data.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, rowdata) => {
        onUpdateData(true, rowdata);
    };

    const handleChangePage = (event, newPage) => {
        onChangePage(newPage);

    };

    const handleReloadData = () => {
        onReloadData();
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        onChangeRowsPerPage(parseInt(event.target.value));
        onReloadData();
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item style={{ marginRight: '10%' }}>

                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                            aria-label="enhanced table"
                        >
                            <EnhancedTableHead
                                classes={classes}
                                numSelected={selected.length}
                                headCells={headers}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                onRefreshData={handleReloadData}
                                rowCount={data.length}
                            />
                            <TableBody>
                                {data.length != 0 ? stableSort(data, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(row.name);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={index}
                                                selected={isItemSelected}
                                            >

                                                {headers.map((h, i) => {
                                                    if (h.id == 'id') {
                                                        return (<TableCell key={h.id} align="right">{++offset}</TableCell>);
                                                    } else {
                                                        return (<TableCell key={h.id} align="right">{row[h.id]}</TableCell>);
                                                    }
                                                })}

                                            </TableRow>
                                        );
                                    }) : <div></div>}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 20, 30]}
                        labelDisplayedRows={function ({ from, to, count }) { }}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Grid></Grid>
        </div>
    );
}

TableTemplate.propTypes = {
    history: PropTypes.object,
    headers: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    onUpdateData: PropTypes.func,
    onReloadData: PropTypes.func,
    onChangePage: PropTypes.func,
    onChangeRowsPerPage: PropTypes.func,
    query: PropTypes.object,
    page: PropTypes.any,
    rowsPerPage: PropTypes.any,
    order: PropTypes.any,
    orderBy: PropTypes.any
};

export default (TableTemplate);

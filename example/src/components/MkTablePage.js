import React from 'react'
import { MkTable } from '@mokkon/reactjs'
import '@mokkon/reactjs/dist/index.css';
import { Grid } from '@material-ui/core';
import theme from '../theme';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

const MkTablePage = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const headCells = [
    { id: 'sr', numeric: true, disablePadding: false, label: 'No.' },
    { id: 'name', numeric: false, disablePadding: false, label: 'Name', width: '200px' },
  ];

  var actions = [{ "action_name": "delete", "display_name": "Delete", }];

  const handleChangePaginatePage = (v) => {
    setPage(v);
    console.log('handleChangePaginatePage :', page);
  }

  const handleRowPerPage = (v) => {
    setRowsPerPage(v);
    console.log('handleRowPerPage :', v);
  }

  return (
    <div className="root">
      {/*table template */}
      <Grid container>
        <Grid item xs={8}>
          <MkTable
            theme={theme}
            headers={headCells}
            data={rows}
            page={page}
            rowsPerPage={rowsPerPage}
            order={'asc'}
            orderBy={'name'}
            actions={actions}
            noMoreToLoad={true}
            onUpdateDataRow={(d) => { console.log('onUpdateDataRow: ', d) }}
            onChangePaginatePage={(newPage) => { handleChangePaginatePage(newPage) }}
            onGetData={() => { }}
            onChangeRowPerPage={(rowPerPage) => { handleRowPerPage(rowPerPage) }}
          ></MkTable>
        </Grid>

      </Grid>
    </div>);
}

export default (MkTablePage);

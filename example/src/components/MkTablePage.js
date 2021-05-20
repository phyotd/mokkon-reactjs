import React from 'react'
import { MkTable } from '@mokkon/reactjs'
import '@mokkon/reactjs/dist/index.css';
// import { connect, useSelector } from 'react-redux';

const MkTablePage = (props) => {
  // const [page, setPage] = useSelector(0);
  // const [rowPerPage, setRowPerPage] = useSelector(10);

  const data = {
    delete_time: 0,
    name: "Vendor 13",
    address: "address",
    id: 'qwerty',
    update_time: 1610341578878,
    updated_by: "Nine Nine",
    updated_by_id: "kShMtHkcwTNjwm-lfzSBvAzdSo1J8dIpAz6_Ct85HPg",
    // status: 'joined'
  }

  const _data = {
    delete_time: 0,
    id: 'asdfg',
    name: "Vendor",
    address: "address",
    update_time: 1610341578878,
    updated_by: "Nine Nine",
    updated_by_id: "kShMtHkcwTNjwm-lfzSBvAzdSo1J8dIpAz6_Ct85HPg",
    // status: 'joined'
  }

  const headCells = [
    { id: 'sr', numeric: true, disablePadding: false, label: 'No.', width: '15px' },
    { id: 'name', numeric: false, disablePadding: false, label: 'Name', width: '15px' },
  ];

  const handleUpdate = (data) => {
    console.log('update data :', data);
  }

  const handleDelete = (e, data) => {
    console.log('delete data :', data);
  }

  const handleSave = (e, data) => {
    console.log('save data :', data);
  }

  const handleCancel = (e, data) => {
    console.log('cancel data :', data);
  }

  const handleOnActions = (data) => {
    console.log('handleOnActions :', data);
  }

  const handleChangePaginatePage = (v) => {
    // setPage(v);
    console.log('handleOnActions :', data);
  }

  const handleRowPerPage = (v) => {
    // setRowPerPage(v);
    console.log('handleOnActions :', data);
  }

  var tableData = [data, _data, data, _data, data, _data, data, _data, data, _data, data, _data];

  return <div>
    <div className="root">
      {/*table template */}
      <div className="listContainer">
        <MkTable
          headers={headCells}
          data={tableData}
          page={0}
          rowsPerPage={10}
          order={'asc'}
          orderBy={'name'}
          // onUpdateData={(value, data) => console.log('table update data')}
          // onReloadData={() => console.log('table reload data')}
          // onChangeRowsPerPage={(v) => console.log('table change row per page')}
          // onChangePage={(page) => console.log('table change page')}
          onUpdateDataRow={() => { }}
          onChangePaginatePage={(newPage) => { handleChangePaginatePage(newPage) }}
          onGetData={() => { }}
          onChangeRowPerPage={(rowPerPage) => { handleRowPerPage(rowPerPage) }}
        ></MkTable>
      </div>
    </div>  </div>
}

export default (MkTablePage);

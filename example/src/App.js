import React from 'react'

import { List, MkForm, TableTemplate, InfoPage } from '@mokkon/reactjs'
import '@mokkon/reactjs/dist/index.css'
import { Grid, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import ResponsiveDrawer from './ResponsiveDrawer';

const App = () => {
  const pediatricians = [
    'Michael Lopez',
    'Sally Tran',
    'Brian Lu',
    'Troy Sakulbulwanthana',
    'Lisa Wellington',
  ]

  const psychiatrists = [
    'Miguel Rodriduez',
    'Cassady Campbell',
    'Mike Torrence',
  ]

  const fields = [
    { type: 'text_string', label: 'Name', field_name: 'name' },
    { type: 'text_multiline', label: 'Address', field_name: 'address' },
    { type: 'text_number', label: 'Latitude', field_name: 'latitude' },
    { type: 'text_number', label: 'Longitude', field_name: 'longitude' },
    { type: 'text_number', label: 'Max Variance', field_name: 'max_variance' },
    { type: 'text_number', label: 'Min Variance', field_name: 'min_variance' },
    {
      type: 'dropdown', label: 'Customer Name', field_name: 'customer_name', option_label_field: "name", options: [
        { name: 'Name1' }, { name: 'Name2' }, { name: 'Name3' }, { name: 'Name4' }
      ]
    },
    // { type: 'checkbox', label: 'Customer Name', field_name: 'customer_name', checkboxList: [{'label': },{}] },
  ];

  const data = {
    delete_time: 0,
    name: "Vendor 13",
    address: "address",
    update_time: 1610341578878,
    updated_by: "Nine Nine",
    updated_by_id: "kShMtHkcwTNjwm-lfzSBvAzdSo1J8dIpAz6_Ct85HPg",
    // status: 'joined'
  }

  const headCells = [
    { id: 'id', numeric: true, disablePadding: false, label: 'No.' },
    { id: 'name', numeric: true, disablePadding: false, label: 'Name' },
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
  var actions = [
    { "label": "edit", "action_type": "edit", "icon": <EditIcon />, "callback": (e, d) => { handleSave(e, d) } },
    { "label": "delete", "action_type": "delete", "callback": (e, d) => { handleDelete(e, d) }, "icon": <DeleteIcon /> },
    { "label": "save", "action_type": "save", "callback": (e, d) => { handleSave(e, d) }, "icon": <SaveIcon /> },
    { "label": "cancel", "action_type": "cancel", "callback": (e, d) => { handleCancel(e, d) }, "icon": <CancelIcon /> },
    { "label": "delete invitation", "action_type": "delete_invitation", "callback": (e, d) => { handleCancel() }, "icon": "", status: "invited" },
    { "label": "approve member", "action_type": "approve_member", "callback": (e, d) => { handleCancel(e, d) }, "icon": "", status: "joined" },
    { "label": "disable member", "action_type": "disable_member", "callback": (e, d) => { handleCancel(e, d) }, "icon": "", status: "joined" },
    { "label": "enable member", "action_type": "enable_member", "callback": (e, d) => { handleCancel(e, d) }, "icon": "", status: "disabled" },
    { "label": "invite member", "action_type": "invite_member", "callback": (e, d) => { handleCancel(e, d) }, "icon": "", status: "requested" },

  ];
  var tableData = [data];

  return <div>
    <div className="root">
      {/* <div className="listContainer">
        <List groupName="Pediatricians" members={pediatricians} />
      </div>
      <div className="listContainer">
        <List groupName="Psychiatrists" members={psychiatrists} />
      </div> */}

      {/*field list */}
      <ResponsiveDrawer></ResponsiveDrawer>
      {/* <div className="listContainer">
        <Typography variant='h3'>Fields</Typography>
        <Grid container>
          <Grid item xs={12}>
            <MkForm
              fields={fields}
              updateData={data}
              buttonColor={'#f05f40'}
              currentTabName={'account'}
              isNew={true}
              actions={actions}
            ></MkForm>
          </Grid>
        </Grid>
      </div> */}

      {/*info page */}
      {/* <div className="listContainer">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <InfoPage
              displayFields={fields}
              updateData={data}
              buttonColor={'#f05f40'}
              actions={actions}
            // onUpdate={() => console.log('on update')}
            // onCancel={() => console.log('on cancel')}
            // onApproved={() => console.log('on approved')}
            // onCreate={() => console.log('on create')}
            // onInvite={() => console.log('on invite')}
            ></InfoPage>
          </Grid>
        </Grid>
      </div> */}

      {/*table template */}
      {/* <div className="listContainer">
        <TableTemplate
          headers={headCells}
          data={tableData}
          page={0}
          rowsPerPage={10}
          order={'asc'}
          orderBy={'name'}
          onUpdateData={(value, data) => console.log('table update data')}
          onReloadData={() => console.log('table reload data')}
          onChangeRowsPerPage={(v) => console.log('table change row per page')}
          onChangePage={(page) => console.log('table change page')}
        ></TableTemplate>
      </div> */}
    </div>  </div>
}

export default App

import React from 'react'

import { List, FieldList, TableTemplate, InfoPage } from '@mokkon/reactjs'
import '@mokkon/reactjs/dist/index.css'
import { Grid } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

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
    { type: 'text_string', label: 'Name', fieldName: 'name' },
    { type: 'text_multiline', label: 'Address', fieldName: 'address' },
    { type: 'text_number', label: 'Latitude', fieldName: 'latitude' },
    { type: 'text_number', label: 'Longitude', fieldName: 'longitude' },
    { type: 'text_number', label: 'Max Variance', fieldName: 'max_variance' },
    { type: 'text_number', label: 'Min Variance', fieldName: 'min_variance' },
    { type: 'dropdown', label: 'Customer Name', fieldName: 'customer_name', options: [] },
    // { type: 'checkbox', label: 'Customer Name', fieldName: 'customer_name', checkboxList: [{'label': },{}] },
  ];

  const data = {
    delete_time: 0,
    name: "Vendor 13",
    update_time: 1610341578878,
    updated_by: "Nine Nine",
    updated_by_id: "kShMtHkcwTNjwm-lfzSBvAzdSo1J8dIpAz6_Ct85HPg",
    status: 'requested'
  }

  const headCells = [
    { id: 'id', numeric: true, disablePadding: false, label: 'No.' },
    { id: 'name', numeric: true, disablePadding: false, label: 'Name' },
  ];

  const handleUpdate = (data) => {
    console.log('update data :', data);
  }

  const handleDelete = (data) => {
    console.log('delete data :', data);
  }

  const handleSave = (data) => {
    console.log('save data :', data);
  }

  const handleCancel = (data) => {
    console.log('cancel data :', data);
  }
  var actions = [
    { "label": "edit", "action_type": "edit", "icon": <EditIcon /> },
    { "label": "delete", "action_type": "delete", "callback": handleDelete, "icon": <DeleteIcon /> },
    { "label": "save", "action_type": "save", "callback": handleSave, "icon": <SaveIcon /> },
    { "label": "cancel", "action_type": "cancel", "callback": handleCancel, "icon": <CancelIcon /> },
    // { "label": "delete invitation", "action_type": "delete_invitation", "callback": handleDeleteInvitation, "icon": "" },
    // { "label": "approve member", "action_type": "approve_member", "callback": handleApprovedMember, "icon": "" },
    // { "label": "disable member", "action_type": "disable_member", "callback": handleDisableMember, "icon": "" },
    // { "label": "enable member", "action_type": "enable_member", "callback": handleEnableMember, "icon": "" },
    // { "label": "invite member", "action_type": "invite_member", "callback": handleMemberInvite, "icon": "" },
    // { "label": "", "action_type": "back_btn", "callback": handleBack, "icon": "" },

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
      {/* <div className="listContainer">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <FieldList
              fields={fields}
              updateData={data}
              buttonColor={'#f05f40'}
              // onUpdate={() => console.log('on update')}
              // onCancel={() => console.log('on cancel')}
              // onApproved={() => console.log('on approved')}
              // onCreate={() => console.log('on create')}
              // onInvite={() => console.log('on invite')}
            ></FieldList>
          </Grid>
        </Grid>
      </div> */}

      {/*info page */}
      <div className="listContainer">
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
      </div>

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

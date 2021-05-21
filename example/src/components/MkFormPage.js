import React from 'react'

import { MkForm } from '@mokkon/reactjs'
import '@mokkon/reactjs/dist/index.css'
import { Button, Dialog, DialogContent, DialogTitle, Grid } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

const MkFormPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fields = [
    { type: 'text_string', label: 'Name', field_name: 'name' },
    { type: 'text_multiline', label: 'Address', field_name: 'address' },
    { type: 'text_number', label: 'Latitude', field_name: 'latitude' },
    { type: 'text_number', label: 'Longitude', field_name: 'longitude' },
    { type: 'text_number', label: 'Max Variance', field_name: 'max_variance' },
    { type: 'text_number', label: 'Min Variance', field_name: 'min_variance' },
    {
      type: 'dropdown', label: 'Customer Name', field_name: 'customer_name', option_label_field: "name", can_create: true, options: [
        { name: 'Name1' }, { name: 'Name2' }, { name: 'Name3' }, { name: 'Name4' }
      ]
    },
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

  const handleDelete = (e, data) => {
    console.log('delete data :', data);
    setOpen(false);
  }

  const handleSave = (e, data) => {
    console.log('save data :', data);
    setOpen(false);
  }

  const handleCancel = (e, data) => {
    console.log('cancel data :', data);
    setOpen(false);
  }

  var actions = [
    { "label": "edit", "action_type": "edit", "icon": <EditIcon />, "callback": (e, d) => { handleSave(e, d) } },
    { "label": "delete", "action_type": "delete", "callback": (e, d) => { handleDelete(e, d) }, "icon": <DeleteIcon /> },
    { "label": "save", "action_type": "save", "callback": (e, d) => { handleSave(e, d) }, "icon": <SaveIcon /> },
    { "label": "cancel", "action_type": "cancel", "callback": (e, d) => { handleCancel(e, d) }, "icon": <CancelIcon /> },
    { "label": "delete invitation", "action_type": "delete_invitation", "callback": (e, d) => { handleCancel() }, "icon": "", status: "invited" },
    { "label": "MkFormrove member", "action_type": "MkFormrove_member", "callback": (e, d) => { handleCancel(e, d) }, "icon": "", status: "joined" },
    { "label": "disable member", "action_type": "disable_member", "callback": (e, d) => { handleCancel(e, d) }, "icon": "", status: "joined" },
    { "label": "enable member", "action_type": "enable_member", "callback": (e, d) => { handleCancel(e, d) }, "icon": "", status: "disabled" },
    { "label": "invite member", "action_type": "invite_member", "callback": (e, d) => { handleCancel(e, d) }, "icon": "", status: "requested" },

  ];

  return (
    <div className="root">
      <Grid container>
        <Grid item xs={12}>
          <MkForm
            fields={fields}
            data={data}
            buttonColor={'#f05f40'}
            actions={actions}
            onDropdownCreateNew={(data) => { console.log(data) }}
          ></MkForm>
        </Grid>
      </Grid>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center" >
        <Grid item xs={12}>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open alert dialog with MkForm
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Mokkon MkForm"}</DialogTitle>
            <DialogContent>
              <Grid container>
                <Grid item xs={12}>
                  <MkForm
                    fields={fields}
                    data={data}
                    buttonColor={'#f05f40'}
                    actions={actions}
                    onDropdownCreateNew={(data) => { console.log(data) }}
                  ></MkForm>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>

    </div>
  );
}

export default MkFormPage

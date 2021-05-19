# mokkon-reactjs

Mokkon's reactjs components

## MkForm 

Props

| Name        | Type           | Default  | Description
| ------------- |-------------| -----:| --------: |
| fields      | Array of field object |  | Form fields 
| data      | object      |   | Form data |
| actions | Array of action object      |     |


Field object

| Name        | Type           | Default  | Description
| ------------- |-------------| -----:| --------: |
| field_name      | string |  | Field name 
| label      | string      |  | Field label |
| type      | string      |  | Field type |
| options      | Array of selection object      |  | Data objects for dropdown or autocomplete |
| can_create      | boolean      |  | To handle adding new object from dropdown or autocomplete |
| readonly      | boolean      |  | To handle for not editable form |
| option_label_field      | string      |  | Field name to get label of option in dropdown |

* [ {} ] => [ {"type":"string","label":"string","field_name":"string","options":[],"can_create":boolean,"readonly:boolean,"option_label_field":"string",} ]


Action object

| Name        | Type           | Default  | Description
| ------------- |-------------| -----| -------- |
| label      | string      |  | Action label |
| icon      | icon      |  | Action icon |
| callback      | function      |  | Action ( edit, delete, etc..) |
| status      | string      |  | Form data status |

* [ {} ] => [ { "label": "string", "icon": icon, "callback": () => {} },]

Data

*  {} => data {"field_name":"value","field_name":"value"}

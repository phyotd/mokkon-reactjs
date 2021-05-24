# mokkon-reactjs

Mokkon's reactjs components

## MkForm 

### Props

| Name        | Type           | Default  | Description
| ------------- |-------------| -----:| --------: |
| fields      | Array of field object |  | Form fields 
| data      | object      |   | Form data |
| actions | Array of action object      |     |


**Field object**

| Name        | Type           | Default  | Description
| ------------- |-------------| -----| -------- |
| field_name      | string |  | Field name 
| label      | string      |  | Field label |
| type      | string      |  | Field type <ul><li>dropdown</li><li>text_string</li><li>Propstext_number</li><li>text_multiline</li><li>list</li><li>photo_list</li><li>date</li><li>time</li></ul>|
| options      | Array of selection object      |  | Data objects for dropdown or autocomplete |
| can_create      | boolean      |  | To handle adding new object from dropdown or autocomplete |
| readonly      | boolean      |  | To handle for not editable form |
| option_label_field      | string      |  | Field name to get label of option in dropdown |
| style      | object      | { buttonTextcolor: 'white' , primaryColor:'#0d47a11c' } | style object<br/><br/>Button Text's color: ***buttonTextcolor*** <br/>Button's background color: ***primaryColor*** <br/><br/> Example: <br/>{ buttonTextcolor: 'white' , primaryColor:'lightBlue' } |

 
 **Example of field object** 
```javascript
    [ 
        {
        "type":"string",
        "label":"string",
        "field_name":"string",
        "options":[],
        "can_create":boolean,
        "readonly":boolean,
        "option_label_field":"string",
        } 
    ]
```

**Action object**

| Name        | Type           | Default  | Description
| ------------- |-------------| -----| -------- |
| label      | string      |  | Action label |
| icon      | icon      |  | Action icon |
| callback      | function      |  | Action ( edit, delete, etc..) |
| status      | string      |  | Form data status |

 **Example of action object** 
```javascript
    { 
    "label": "string",
    "icon": icon,
    "callback": () => {}
     }
 ```

**Data**

Example of data object 
```javascript
    { 
   "field_name":"value",
   "field_name":"value",
     }
 ```


## MkTable

**Props**


| Name        | Type           | Default  | Description
| ------------- |-------------| -----| -------- |
| headers      | Array of header object |  | Table headers
| data      | object      |   | Form data |
| onActions | Array of action callback      |     | Return function with data or event
| actions | Array of action object      |     |
| title | string      |     |Item title (item, category,etc..)
| order | string      | asc    | Order (asc, desc)
| orderBy | string      |   name  | Order by 
| rowsPerPage |number      |     | Number of rows in page
| noMoreToLoad | boolean     |     |To handle end of data
| isLoading | boolean      |     | To Handle progressing
| onChangePaginatePage | function      |     | To Change page number
| onGetData | function      |     | To Get data list
| onChangeRowPerPage | function      |     | To change number of rows in page
| dense | boolean      |   true  | To handle table size
| style      | object      | { headerBackgroundColor: '#0d47a1a8', headerTextcolor: 'white' , primaryColor:'#0d47a11c' } | style object<br/><br/>Table Header's background color: ***headerBackgroundColor*** <br/>Table Text's color: ***headerTextcolor*** <br/>Table even row's background color: ***primaryColor*** <br/><br/> Example: <br/>{ headerBackgroundColor: 'green', headerTextcolor: 'white' , primaryColor:'lightBlue' } |


 **Example of action object **
```javascript
    { 
    "label": "string",
    "icon": icon element,
    "callback": () => {}
     }
```

**Header object**

| Name        | Type           | Default  | Description
| ------------- |-------------| -----:| --------: |
| id      | string |  | Field name of data object
| numeric      | boolean      |   | To handle numeric or not |
| disablePadding | boolean      |  |Table cell padding   
| label      | string      |   | Label of Header |
| width | Array of action object      | | Tablecell width   

 **Example of header object **
```javascript
    [
        {
        'id': 'sr', 
        'numeric': true,
        'disablePadding': false,
        'label': 'No.'
        },
        { 
            'id': 'name',
            'numeric': false,
            'disablePadding': false,
            'label': 'Name',
            'width': '200px'
        },
  ]
```
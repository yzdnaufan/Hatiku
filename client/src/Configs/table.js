export const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, allowEditOnDblClick: false, mode: 'Batch' };

export const editparams = { params: { popupHeight: '300px' } };

export const sortingOptions = { columns: [{ field: 'name', direction: 'Ascending' }, 
      { field: 'age', direction: 'Descending' },
      { field: 'height', direction: 'Ascending' }, 

] };

export const commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
      { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
      { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
      { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
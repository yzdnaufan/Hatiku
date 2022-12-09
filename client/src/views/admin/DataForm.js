import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Edit, CommandColumn } from '@syncfusion/ej2-react-grids';

import {Data } from '../../data/data';
import { Header } from '../../components';

const DataForm = () => {
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, allowEditOnDblClick: false };

  const editparams = { params: { popupHeight: '300px' } };
  const commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
        { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
        { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
        { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Data" title="Users" />
      <GridComponent
        dataSource={Data}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editSettings}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {/* {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)} */}
          <ColumnDirective headerText='Manage Data' width='150' commands={commands}></ColumnDirective>
          <ColumnDirective field='name' textAlign='center' editType='dropdownedit' edit={editparams} headerText='Nama' width='100%'/>
        </ColumnsDirective>
        <Inject services={[Page, CommandColumn, Edit]}/>

      </GridComponent>
    </div>
  );
};
export default DataForm;

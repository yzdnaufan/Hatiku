import React, {useState} from 'react'

import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Edit, CommandColumn } from '@syncfusion/ej2-react-grids';

import { Header } from '../../../components'
import { Data } from '../../../data/data';
import {commands, editSettings, editparams} from '../../../Configs/table'

const DatasetTable = () => {

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Table" title="Dataset" />
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
          <ColumnDirective headerText='Manage Data' width='150' commands={commands}></ColumnDirective>
          {.map((item, index) => <ColumnDirective key={index} {...item} />)}
          
        </ColumnsDirective>
        <Inject services={[Page, CommandColumn, Edit]}/>

      </GridComponent>
    </div>
  )
}

export default DatasetTable
import React, {useState} from 'react'

import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Sort, Page, Edit, CommandColumn } from '@syncfusion/ej2-react-grids';

import { Header } from '../../../components'
import { Data, Grid } from '../../../data'
import {commands, editSettings, sortingOptions} from '../../../Configs/table'

const DatasetTable = () => {

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Table" title="Dataset" />
      <GridComponent
        dataSource={Data}
        width='1000'
        allowPaging
        allowSorting={true}
        sortSettings={sortingOptions}
        pageSettings={{ pageCount: 5 }}
        editSettings={editSettings}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <ColumnDirective headerText='Manage Data' width='150' commands={commands}></ColumnDirective>
          {Grid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          
        </ColumnsDirective>
        <Inject services={[Page, CommandColumn, Edit, Sort]}/>

      </GridComponent>
    </div>
  )
}

export default DatasetTable
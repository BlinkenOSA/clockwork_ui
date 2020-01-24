import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import date_type from "../../../../services/controlled_list/DateType";
import DateTypeForm from "../DateTypeForm/DateTypeForm";

const DateTypeList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={date_type}
        tableName={'dateTypes'}
        formOpen={'drawer'}
        actions={{edit: ''}}
        formRender={(props) => (DateTypeForm(props))}
      />
    </React.Fragment>
  )
};

export default DateTypeList;
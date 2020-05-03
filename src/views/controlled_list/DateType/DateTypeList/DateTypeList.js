import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import date_type from "../../../../services/controlled_list/DateType";
import DateTypeForm from "../DateTypeForm/DateTypeForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const DateTypeList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={date_type}
        tableName={'dateTypes'}
        formRender={(props) => (DateTypeForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default DateTypeList;

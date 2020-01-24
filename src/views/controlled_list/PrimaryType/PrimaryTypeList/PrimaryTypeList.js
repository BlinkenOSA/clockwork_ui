import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import primary_type from "../../../../services/controlled_list/PrimaryType";
import PrimaryTypeForm from "../PrimaryTypeForm/PrimaryTypeForm";

const PrimaryTypeList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={primary_type}
        tableName={'primaryType'}
        formOpen={'drawer'}
        actions={{edit: ''}}
        formRender={(props) => (PrimaryTypeForm(props))}
      />
    </React.Fragment>
  )
};

export default PrimaryTypeList;
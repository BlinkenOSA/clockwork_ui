import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import person from "../../../../services/authority_list/Person";
import PersonForm from "../PersonForm/PersonForm";
import filters from "./config/filters";

const AccessRightsList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={person}
        tableName={'person'}
        formOpen={'drawer'}
        formRender={(props) => (PersonForm(props))}
        actions={{edit: ''}}
      />
    </React.Fragment>
  )
};

export default AccessRightsList;
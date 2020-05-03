import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import person from "../../../../services/authority_list/Person";
import PersonForm from "../PersonForm/PersonForm";
import filters from "./config/filters";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const AccessRightsList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={person}
        tableName={'person'}
        formRender={(props) => (PersonForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default AccessRightsList;

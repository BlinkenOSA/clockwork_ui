import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import person_role from "../../../../services/controlled_list/PersonRole";
import PersonRoleForm from "../PersonRoleForm/PersonRoleForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const PersonRoleList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={person_role}
        tableName={'personRole'}
        formRender={(props) => (PersonRoleForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default PersonRoleList;

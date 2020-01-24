import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import person_role from "../../../../services/controlled_list/PersonRole";
import PersonRoleForm from "../PersonRoleForm/PersonRoleForm";

const PersonRoleList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={person_role}
        tableName={'personRole'}
        formOpen={'drawer'}
        actions={{edit: ''}}
        formRender={(props) => (PersonRoleForm(props))}
      />
    </React.Fragment>
  )
};

export default PersonRoleList;
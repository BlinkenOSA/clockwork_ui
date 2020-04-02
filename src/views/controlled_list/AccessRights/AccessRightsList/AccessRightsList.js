import React from 'react';
import accessRights from '../../../../services/controlled_list/AccessRights';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import AccessRightsForm from "../AccessRightsForm/AccessRightsForm";

const AccessRightsList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={accessRights}
        tableName={'accessRights'}
        formOpen={'drawer'}
        formRender={(props) => (AccessRightsForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default AccessRightsList;
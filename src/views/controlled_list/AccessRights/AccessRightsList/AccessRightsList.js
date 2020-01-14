import React from 'react';
import accessRights from '../../../../services/controlled_list/AccessRights';
import ListTable from "../../../../components/ListTable/ListTable";
import {ACCESS_RIGHTS_CREATE, ACCESS_RIGHTS_EDIT} from "../../../../config/config-urls";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';

const AccessRightsList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        apiCall={accessRights.list}
        tableName={'accessRights'}
        formOpen={'drawer'}
        actions={{
            create: ACCESS_RIGHTS_CREATE,
            edit: ACCESS_RIGHTS_EDIT
        }}
      />
    </React.Fragment>
  )
};

export default AccessRightsList;
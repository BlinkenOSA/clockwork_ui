import React from 'react';
import coporation from '../../../../services/authority_list/Corporation';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import CorporationForm from "../CorporationForm/CorporationForm";

const AccessRightsList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={coporation}
        tableName={'corporation'}
        formOpen={'drawer'}
        formRender={(props) => (CorporationForm(props))}
        actions={{edit: ''}}
      />
    </React.Fragment>
  )
};

export default AccessRightsList;
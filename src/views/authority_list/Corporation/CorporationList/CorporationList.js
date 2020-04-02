import React from 'react';
import corporation from '../../../../services/authority_list/Corporation';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import filters from "./config/filters";
import CorporationForm from "../CorporationForm/CorporationForm";

const CorporationList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={corporation}
        tableName={'corporation'}
        formOpen={'drawer'}
        formRender={(props) => (CorporationForm(props))}
        actions={{
          edit: {}
        }}
      />
    </React.Fragment>
  )
};

export default CorporationList;
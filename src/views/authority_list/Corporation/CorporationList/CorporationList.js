import React from 'react';
import corporation from '../../../../services/authority_list/Corporation';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import filters from "./config/filters";
import CorporationForm from "../CorporationForm/CorporationForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const CorporationList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={corporation}
        tableName={'corporation'}
        formRender={(props) => (CorporationForm(props))}
        actions={{
          edit: {}
        }}
      />
    </React.Fragment>
  )
};

export default CorporationList;

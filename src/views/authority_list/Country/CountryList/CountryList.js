import React from 'react';
import country from '../../../../services/authority_list/Country';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import filters from "./config/filters";
import CountryForm from "../CountryForm/CountryForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const CountryList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={country}
        tableName={'country'}
        formRender={(props) => (CountryForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default CountryList;

import React from 'react';
import country from '../../../../services/authority_list/Country';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import filters from "./config/filters";
import CountryForm from "../CountryForm/CountryForm";

const CountryList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={country}
        tableName={'country'}
        formOpen={'drawer'}
        formRender={(props) => (CountryForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default CountryList;
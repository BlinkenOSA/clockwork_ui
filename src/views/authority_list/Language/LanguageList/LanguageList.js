import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import language from "../../../../services/authority_list/Language";
import filters from "./config/filters";
import LanguageForm from "../LanguageForm/LanguageForm";

const AccessRightsList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={language}
        tableName={'language'}
        formOpen={'drawer'}
        formRender={(props) => (LanguageForm(props))}
        actions={{edit: ''}}
      />
    </React.Fragment>
  )
};

export default AccessRightsList;
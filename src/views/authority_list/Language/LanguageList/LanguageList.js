import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import language from "../../../../services/authority_list/Language";
import filters from "./config/filters";
import LanguageForm from "../LanguageForm/LanguageForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const AccessRightsList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={language}
        tableName={'language'}
        formRender={(props) => (LanguageForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default AccessRightsList;

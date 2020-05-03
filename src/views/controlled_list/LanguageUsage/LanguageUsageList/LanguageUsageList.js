import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import language_usage from "../../../../services/controlled_list/LanguageUsage";
import LanguageUsageForm from "../LanguageUsageForm/LanguageUsageForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const LanguageUsageList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={language_usage}
        tableName={'languageUsage'}
        formRender={(props) => (LanguageUsageForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default LanguageUsageList;

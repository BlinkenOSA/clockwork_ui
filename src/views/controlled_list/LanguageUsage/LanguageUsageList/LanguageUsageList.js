import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import language_usage from "../../../../services/controlled_list/LanguageUsage";
import LanguageUsageForm from "../LanguageUsageForm/LanguageUsageForm";

const LanguageUsageList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={language_usage}
        tableName={'languageUsage'}
        formOpen={'drawer'}
        formRender={(props) => (LanguageUsageForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default LanguageUsageList;
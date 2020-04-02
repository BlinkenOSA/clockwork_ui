import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import keyword from "../../../../services/controlled_list/Keyword";
import KeywordForm from "../KeywordForm/KeywordForm";

const KeywordList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={keyword}
        tableName={'keyword'}
        formOpen={'drawer'}
        formRender={(props) => (KeywordForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default KeywordList;
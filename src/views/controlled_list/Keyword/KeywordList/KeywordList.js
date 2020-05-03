import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import keyword from "../../../../services/controlled_list/Keyword";
import KeywordForm from "../KeywordForm/KeywordForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const KeywordList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={keyword}
        tableName={'keyword'}
        formRender={(props) => (KeywordForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default KeywordList;

import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import filters from './config/filters';
import subject from "../../../../services/authority_list/Subject";
import SubjectForm from "../SubjectForm/SubjectForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const SubjectList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={subject}
        tableName={'subject'}
        formRender={(props) => (SubjectForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default SubjectList;

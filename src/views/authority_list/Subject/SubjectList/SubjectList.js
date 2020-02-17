import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import filters from './config/filters';
import subject from "../../../../services/authority_list/Subject";
import SubjectForm from "../SubjectForm/SubjectForm";

const SubjectList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={subject}
        tableName={'subject'}
        formOpen={'drawer'}
        formRender={(props) => (SubjectForm(props))}
        actions={{edit: ''}}
      />
    </React.Fragment>
  )
};

export default SubjectList;
import React from 'react';
import building from '../../../../services/controlled_list/Building';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import BuildingForm from "../BuildingForm/BuildingForm";

const BuildingList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={building}
        tableName={'building'}
        formOpen={'drawer'}
        formRender={(props) => (BuildingForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default BuildingList;
import React from 'react';
import building from '../../../../services/controlled_list/Building';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import BuildingForm from "../BuildingForm/BuildingForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const BuildingList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={building}
        tableName={'building'}
        formRender={(props) => (BuildingForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default BuildingList;

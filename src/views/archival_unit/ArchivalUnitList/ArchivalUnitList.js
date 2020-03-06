import React from 'react';
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import filters from './config/filters';
import archival_unit from "../../../services/archival_unit/ArchivalUnit";

import ListTable from "../../../components/ListTable/ListTable";
import FondsForm from "../ArchivalUnitForm/FondsForm/FondsForm";
import SubfondsForm from "../ArchivalUnitForm/SubfondsForm/SubfondsForm";
import SeriesForm from "../ArchivalUnitForm/SeriesForm/SeriesForm";

const ArchivalUnitList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={archival_unit}
        tableName={'archivalUnit'}
        tableType={'tree'}
        formOpen={'drawer'}
        formRender={(props) => {
          if (props.action === 'create') {
            switch(props.formData.level) {
              case 'F':
                return FondsForm(props);
              case 'SF':
                return SubfondsForm(props);
              case 'S':
                return SeriesForm(props);
              default:
                return FondsForm(props);
            }
          } else {
            switch(props.selectedRecord.level) {
              case 'F':
                return FondsForm(props);
              case 'SF':
                return SubfondsForm(props);
              case 'S':
                return SeriesForm(props);
              default:
                return FondsForm(props);
            }
          }
        }}
        actions={{
          create: {
            text: 'New Fonds'
          },
          edit: {}
        }}
      />
    </React.Fragment>
  )
};

export default ArchivalUnitList;
import React, {useState} from 'react';
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import filters from './config/filters';
import archival_unit from "../../../services/archival_unit/ArchivalUnit";

import FondsForm from "../ArchivalUnitForm/FondsForm/FondsForm";
import SubfondsForm from "../ArchivalUnitForm/SubfondsForm/SubfondsForm";
import SeriesForm from "../ArchivalUnitForm/SeriesForm/SeriesForm";
import ListTableWithDrawer from "../../../components/ListTable/ListTableWithDrawer";
import {Button, Tooltip} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const ArchivalUnitList = () => {
  const [selectedRecord, setSelectedRecord] = useState({});
  const [action, setAction] = useState('create');

  const renderCustomAddButton = (data) => {
    let tooltipText;
    let selectedData = {...data};

    switch (data.level) {
      case 'F':
        tooltipText = 'Add Subfonds';
        selectedData.level = 'SF';
        break;
      case 'SF':
        tooltipText = 'Add Series';
        selectedData.level = 'S';
        break;
      default:
        return undefined;
    }

    return (
      <Tooltip title={tooltipText}>
        <Button size="small" icon={<PlusOutlined/>} onClick={() => {
          setSelectedRecord(selectedData);
          setAction('create');
        }}/>
      </Tooltip>
    )
  };

  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={archival_unit}
        actionProps={action}
        selectedRecordProps={selectedRecord}
        renderCustomAddButton={renderCustomAddButton}
        tableName={'archivalUnit'}
        formRender={(props) => {
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

import React, {useState, useEffect} from 'react';
import {Drawer, Row} from "antd";
import ListTable from "./ListTable";

const ListTableWithDrawer = ({actionProps, selectedRecordProps={}, formRender, ...props}) => {
  const [drawerShown, setDrawerShown] = useState(false);
  const [action, setAction] = useState('create');
  const [selectedRecord, setSelectedRecord] = useState({});
  const [tableReRender, setTableReRender] = useState(false);

  useEffect(() => {
    if(Object.keys(selectedRecordProps).length !== 0) {
      setSelectedRecord(selectedRecordProps);
      setAction(actionProps);
      setDrawerShown(true);
    }
  },[actionProps, selectedRecordProps]);

  const onClose = (isSubmit=false) => {
    setTableReRender(isSubmit);
    setDrawerShown(false);
  };

  const openForm = (action, data) => {
    setAction(action);
    setSelectedRecord(data);
    setDrawerShown(true);
    setTableReRender(false);
  };

  return (
    <React.Fragment>
      <ListTable
        drawer={true}
        reRender={tableReRender}
        onOpenForm={openForm}
        {...props}
      />
      <Row>
        <Drawer
          title={action.charAt(0).toUpperCase() + action.slice(1)}
          width={'50%'}
          onClose={(e) => onClose()}
          visible={drawerShown}
          destroyOnClose={true}
        >
          {formRender({
            action: action,
            recordIdentifier: selectedRecord.id,
            selectedRecord: selectedRecord,
            onClose: (e) => onClose(true),
            type: 'drawer'
          })}
        </Drawer>
      </Row>
    </React.Fragment>
  )
};

export default ListTableWithDrawer;

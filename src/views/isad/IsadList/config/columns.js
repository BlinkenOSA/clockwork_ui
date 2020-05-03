import React from 'react';
import style from "../../../../utils/renders/statusRender.module.css";
import statusRender from "../../../../utils/renders/statusRender";

const archivalUnitRender = (text, record) => {
  return(
    <React.Fragment>
      <strong style={{marginLeft: '10px'}}>{record.reference_code}</strong>
      <span style={{marginLeft: '20px'}}>{record.title}</span>
    </React.Fragment>
  )
};

const columns = [
  {
    title: 'Reference Code',
    dataIndex: 'title',
    key: 'reference_code',
    render: archivalUnitRender,
    sorter: true,
    ellipsis: true
  }, {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    render: statusRender,
    className: style.statusColumn,
    sorter: true
  }
];

export default columns

import React from 'react';

const archivalUnitRender = ((text, record) => {
  return(
    <React.Fragment>
      <strong style={{marginLeft: '10px'}}>{record.reference_code}</strong>
      <span style={{marginLeft: '20px'}}>{record.title}</span>
    </React.Fragment>
  )
});

const columns = [
  {
    title: 'Reference Code',
    dataIndex: 'reference_code',
    key: 'reference_code',
    render: archivalUnitRender,
    sorter: true,
  }
];

export default columns
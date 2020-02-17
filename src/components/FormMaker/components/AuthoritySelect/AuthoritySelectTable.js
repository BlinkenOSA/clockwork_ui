import React from 'react';
import {Button, Table, Tooltip} from "antd";
import style from "./AuthoritySelect.module.css";

const AuthoritySelectTable = ({tableColumnTitle, tableColumnField, dataSource, ...props}) => {
  const renderSelectButton = (data) => {
    return(
      <Tooltip title={'Select entry'}>
        <Button size="small" icon={'select'} onClick={() => props.onSelect(data[tableColumnField])}/>
      </Tooltip>
    )
  };

  const renderTitle = (data) => {
    return(
      <a href={data} target={'_blank'}>{data}</a>
    )
  };

  const columns = [
    {
      title: tableColumnTitle,
      dataIndex: tableColumnField,
      key: tableColumnField,
      width: 400,
      sorter: false,
      render: renderTitle
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: false,
    }, {
      title: 'Actions',
      width: 150,
      className: style.ActionColumn,
      render: renderSelectButton
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowKey={tableColumnField}
      size={'middle'}
      bordered={true}
    />
  )
};

export default AuthoritySelectTable;
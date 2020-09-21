import React from "react";
import { FolderOpenOutlined, FileOutlined } from "@ant-design/icons";

const archivalReferenceCodeRender = (text, record) => {
  if (record.level === 'F') {
    return (
      <span>
        <FolderOpenOutlined style={{marginLeft: '10px', marginRight: '15px'}}/> {text}
      </span>
    )
  } else {
    return (
      <span><FileOutlined style={{marginLeft: '10px', marginRight: '15px'}}/> {text}</span>
    )
  }
};

const dateRender = (text, record) => {
  if (record.date_to) {
    return `${record.date_from} - ${record.date_to}`
  } else {
    return record.date_from
  }
};

const columns = [
  {
    title: '',
    dataIndex: 'archival_reference_code',
    key: 'archival_reference_code',
    sorter: false,
    render: archivalReferenceCodeRender,
    width: 250
  }, {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    sorter: false,
  }, {
    title: 'Date',
    dataIndex: 'date_from',
    key: 'date_from',
    sorter: false,
    render: dateRender,
    width: 200
  }
];

export default columns;

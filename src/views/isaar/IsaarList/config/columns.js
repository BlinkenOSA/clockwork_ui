import React from "react";
import typeRender from "../../../../utils/renders/typeRender";
import statusRender from "../../../../utils/renders/statusRender";
import style from "../../../../utils/renders/statusRender.module.css";
import isadRender from "../../../../utils/renders/isadRender";

const columns = [
  {
    title: 'Authorized form(s) of name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
  }, {
    title: 'Appears in',
    dataIndex: 'isad',
    key: 'isad',
    width: 200,
    render: isadRender
  }, {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 200,
    sorter: true,
    render: typeRender
  }, {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sorter: true,
    render: statusRender,
    className: style.statusColumn,
    width: 100
  }
];

export default columns
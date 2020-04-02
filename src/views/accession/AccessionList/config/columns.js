import React from "react";
import style from "../AccessionList.module.css";

const renderReferenceCode = (text, record, index) => {
  if (record.archival_unit) {
    return(<span>{record.archival_unit.reference_code}</span>)
  } else {
    return(<span className={style.LegacyReferenceCode}>HU OSA {record.archival_unit_legacy_number}</span>)
  }
};

const columns = [
  {
    title: 'Seq. no.',
    dataIndex: 'seq',
    key: 'seq',
    width: 100,
    sorter: true,
  }, {
    title: 'Transfer date',
    dataIndex: 'transfer_date',
    key: 'transfer_date',
    width: 160,
    sorter: true,
  }, {
    title: 'Ref. code',
    dataIndex: 'archival_unit.reference_code',
    sortKeys: ['archival_unit__fonds', 'archival_unit_legacy_number'],
    key: 'reference_code',
    width: 120,
    sorter: true,
    render: renderReferenceCode
  }, {
    title: 'Archival Unit',
    dataIndex: 'title',
    key: 'title'
  }
];

export default columns

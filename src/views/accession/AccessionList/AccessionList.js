import React from 'react';
import accession from '../../../services/Accession';
import ListTable from "../../../components/ListTable/ListTable";
import style from "./AccessionList.module.css";

const renderReferenceCode = (text, record, index) => {
  if (record.archival_unit) {
    return(<span>{record.archival_unit.reference_code}</span>)
  } else {
    return(<span className={style.LegacyReferenceCode}>HU OSA {record.archival_unit_legacy_number}</span>)
  }
};

const columns = [
  {
    title: 'Seq. No.',
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
    title: 'Ref. Code',
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
  },
];

const filters = [
  // Row 1
  [
    {
      type: 'search',
      span: 10,
      placeholder: 'Search...'
    }, {
      type: 'select',
      span: 7,
      filterParam: 'transfer_year',
      data: Array(new Date().getFullYear()+1 - 1995).fill().map((_, idx) => 1995 + idx),
      placeholder: 'Filter by Transfer Year'
    }, {
      type: 'number',
      span: 7,
      filterParam: 'fonds',
      placeholder: 'Filter by Fonds'
    }
  ]
];


const AccessionList = () => {
  return(
    <ListTable
      columnConfig={columns}
      filterConfig={filters}
      apiCall={accession.list}
      tableName={'accessionList'}
    />
  )
};

export default AccessionList;
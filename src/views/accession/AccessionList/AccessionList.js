import React from 'react';
import accession from '../../../services/Accession';
import ListTable from "../../../components/ListTable/ListTable";

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
    key: 'reference_code',
    width: 120,
    sorter: true
  }, {
    title: 'Archival Unit',
    dataIndex: 'title',
    key: 'title'
  },
];

const AccessionList = () => {
  return(
    <ListTable
      columns={columns}
      apiCall={accession.list}
      tableName={'accessionList'}
    />
  )
};

export default AccessionList;
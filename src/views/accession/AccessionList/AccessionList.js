import React, { Component } from 'react';
import {Card, Pagination, Table} from "antd";
import accession from '../../../services/Accession';

const columns = [
  {
    title: 'Seq. No.',
    dataIndex: 'seq',
    key: 'seq',
  }, {
    title: 'Transfer date',
    dataIndex: 'transfer_date',
    key: 'transfer_date'
  }, {
    title: 'Reference Code',
    dataIndex: 'archival_unit.reference_code',
    key: 'archival_unit.reference_code'
  }, {
    title: 'Archival Unit',
    dataIndex: 'title',
    key: 'title'
  },
];

class AccessionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pagination: {
        showQuickJumper: true,
        showSizeChanger: true,
      }
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = (params) => {
    accession.list(params).then((response) => {
      const pagination = { ...this.state.pagination };
      pagination.total = response.data.count;
      this.setState({
        data: response.data.results,
        pagination: pagination
      })
    })
  }

  handleTableChange = (pagination, filters, sorter) => {
    const {current, pageSize} = pagination;
    const offset = current * pageSize;
    const limit = pageSize;
    this.fetchData({limit: limit, offset: offset})
    console.log(filters);
    console.log(sorter);
  }

  render() {
    const {data, pagination} = this.state;

    return(
      <Card size="small" style={{marginBottom: 20}}>
        <Table
          bordered={true}
          dataSource={data}
          columns={columns}
          size={'middle'}
          pagination={pagination}
          onChange={this.handleTableChange}
        />
      </Card>
    )
  }
}

export default AccessionList;
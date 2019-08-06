import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Icon, Table} from "antd";
import setTablePagination from './actions/setTablePagination';
import setTableTotal from './actions/setTableTotal';
import {connect} from "react-redux";
import setTableSorter from "./actions/setTableSorter";

const ListTable = ({columns, apiCall, tableName, ...props}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const pagination = {
      position: 'top',
      showQuickJumper: true,
      showSizeChanger: true,
      total: 0
    };
    props.setTablePagination(pagination, tableName);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = params => {
    apiCall(params).then((response) => {
      props.setTableTotal(response.data.count, tableName);
      setData(response.data.results);
    })
  };

  const handleTableChange = (pagination, filters, sorter) => {
    let params = {};

    // Pagination
    const {current, pageSize} = pagination;
    if (current) {
      props.setTablePagination(pagination, tableName);
      params['limit'] = pageSize;
      params['offset'] = (current - 1) * pageSize;
    }

    // Sorting
    const {columnKey, order} = sorter;
    if (columnKey) {
      props.setTableSorter(sorter, tableName);
      params['ordering'] = order === 'ascend' ? `${columnKey}` : `-${columnKey}`;
    }

    fetchData(params)
  };

  const getFooter = () => {
    return(
      <Button type={'primary'}>
        <Icon type={'plus'}/>
        Create
      </Button>
    )
  };

  return(
    <Card size="small" style={{marginBottom: 20}}>
      <Table
        bordered={true}
        rowKey={record => record.id}
        dataSource={data}
        columns={columns}
        size={'middle'}
        pagination={props.tableProps ? props.tableProps['pagination'] : {}}
        onChange={handleTableChange}
        footer={() => getFooter()}
      />
    </Card>
  )
};

const mapDispatchToProps = (dispatch) => ({
  setTablePagination: (pagination, tableName) => {
    dispatch(setTablePagination(pagination, tableName))
  },
  setTableSorter: (sorter, tableName) => {
    dispatch(setTableSorter(sorter, tableName))
  },
  setTableTotal: (total, tableName) => {
    dispatch(setTableTotal(total, tableName))
  }
});

const mapStateToProps = (state, ownProps) => ({
  tableProps: state.tableSettings[ownProps.tableName]
});

ListTable.propTypes = {
  columns: PropTypes.array.isRequired,
  apiCall: PropTypes.func.isRequired,
  tableName: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTable);
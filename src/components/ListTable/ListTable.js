import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Col, Icon, Row, Table} from "antd";
import setTablePagination from './actions/setTablePagination';
import setTableTotal from './actions/setTableTotal';
import {connect} from "react-redux";
import setTableSorter from "./actions/setTableSorter";
import useWindowSize from '@rehooks/window-size';
import ListTableFilters from "./ListTableFilters";
import useCollapse from 'react-collapsed';

const ListTable = ({columnConfig, apiCall, tableName, searchable, ...props}) => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({});
  const [columns, setColumnConfig] = useState([]);
  const [filterIsOpen, setFilterOpen] = useState(true);
  const {getCollapseProps, getToggleProps} = useCollapse({defaultOpen: true});

  // componentDidMount
  useEffect(() => {
    if (props.tableProps) {
      let paginationParams, sorterParams;

      // Load pagination from redux
      const pagination = props.tableProps['pagination'];
      paginationParams = loadPagination(pagination);

      // Load sorting from redux
      const sorter = props.tableProps['sorter'];
      sorterParams = loadSorter(sorter);
      loadColumns(sorter);

      // Load filters from redux
      const filterParams = props.tableProps['filter'];
      setParams(Object.assign({}, filterParams, paginationParams, sorterParams))
    } else {
      props.setTableSorter({}, tableName);
      props.setTablePagination(initPagination(), tableName);
      setColumnConfig(columnConfig);
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.entries(params).length !== 0) {
      fetchData(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const initPagination = () => {
    return {
      showQuickJumper: true,
      showSizeChanger: true,
      total: 0,
      pageSizeOptions: ['10', '20', '30', '50', '100'],
      showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
    }
  };

  const loadPagination = (pagination) => {
    return {
      limit: pagination.pageSize,
      offset: (pagination.current - 1) * pagination.pageSize
    }
  };

  const loadSorter = (sorter) => {
    const {columnKey, order, column} = sorter;
    if (columnKey) {
      if (column.hasOwnProperty('sortKeys')) {
        return {ordering: order === 'ascend' ? `${column.sortKeys.join(',')}` : `-${column.sortKeys.join(',')}`}
      } else {
        return {ordering: order === 'ascend' ? `${columnKey}` : `-${columnKey}`}
      }
    }
  };

  const loadColumns = (sorter) => {
    if (Object.entries(sorter).length > 0) {
      if (sorter.field.length > 0) {
        const newColumnConfig = columnConfig.map((conf) => {
          if (conf.key === sorter.columnKey) {
            conf['sortOrder'] = sorter.order
          } else {
            conf['sortOrder'] = false
          }
          return conf
        });
        setColumnConfig(newColumnConfig);
      }
    } else {
      const newColumnConfig = columnConfig.map((conf) => {
        conf['sortOrder'] = false;
        return conf;
      });
      setColumnConfig(newColumnConfig);
    }
  };

  const fetchData = params => {
    apiCall(params).then((response) => {
      props.setTableTotal(response.data.count, tableName);
      setData(response.data.results);
    })
  };

  const handleTableChange = (pagination, filters, sorter) => {
    let paginationParams, sorterParams = {};

    // Pagination
    const {current} = pagination;
    if (current) {
      paginationParams = loadPagination(pagination);
      props.setTablePagination(pagination, tableName);
    }

    // Sorting
    loadColumns(sorter);
    if (Object.entries(sorter).length > 0) {
      const {columnKey} = sorter;
      if (columnKey) {
        sorterParams = loadSorter(sorter);
        props.setTableSorter(sorter, tableName);
      }
    } else {
      props.setTableSorter({}, tableName);
    }

    setParams(Object.assign({}, params, paginationParams, sorterParams))
  };

  const handleFilterChange = (filterValues) => {
    if (Object.entries(filterValues).length > 0) {
      setParams(Object.assign({}, params, filterValues))
    }
  };

  const getFooter = () => {
    return(
      <Row>
        <Col span={8}>
          <Button type={'primary'}>
            <Icon type={'plus'}/>
            Create
          </Button>
        </Col>
        <Col span={8} offset={8}>
          <Button
            {...getToggleProps({
              onClick: () => setFilterOpen(oldOpen => !oldOpen),
            })}
            type={'default'}
            style={{float: 'right'}}>
            {filterIsOpen ?
              <React.Fragment><Icon type={'caret-up'}/> Hide Filters</React.Fragment> :
              <React.Fragment><Icon type={'caret-down'}/> Show Filters</React.Fragment>
            }
          </Button>
        </Col>
      </Row>
    )
  };

  const windowSize = useWindowSize();

  return(
    <Card size="small" style={{marginBottom: 20}}>
      {props.filterConfig ?
        <section {...getCollapseProps()}>
          <ListTableFilters
            tableName={tableName}
            filterConfig={props.filterConfig}
            onFilterChange={handleFilterChange}
          />
        </section> : null}
      <Table
        bordered={true}
        rowKey={record => record.id}
        dataSource={data}
        columns={columns}
        size={'middle'}
        pagination={props.tableProps ? props.tableProps['pagination'] : {}}
        onChange={handleTableChange}
        footer={() => getFooter()}
        scroll={{ y: windowSize.innerHeight - 340 }}
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
  columnConfig: PropTypes.array.isRequired,
  filterConfig: PropTypes.array,
  apiCall: PropTypes.func.isRequired,
  tableName: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTable);
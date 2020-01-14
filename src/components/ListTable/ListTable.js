import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Col, Row, Table, Tooltip} from "antd";
import setTablePagination from './actions/setTablePagination';
import setTableTotal from './actions/setTableTotal';
import {connect} from "react-redux";
import setTableSorter from "./actions/setTableSorter";
import useWindowSize from '@rehooks/window-size';
import ListTableFilters from "./ListTableFilters";
import useCollapse from 'react-collapsed';
import style from './ListTable.module.css';
import { Link } from 'react-router-dom'

const ListTable = ({columnConfig, filterConfig, apiCall, tableName, searchable, actions, formOpen='simple', ...props}) => {
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
      setColumnConfig(loadActionColumns(columnConfig));
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

  const loadActionColumns = (columnConfig) => {
    // Create action column
    if (actions) {
      columnConfig.push(
        {
          title: 'Actions',
          width: 150,
          className: style.ActionColumn,
          render: renderActionButtons
        }
      );
    }
    return columnConfig
  };

  const renderActionButtons = (data) => {
    const renderButton = (prop, tooltipText, icon) => {
      const getLink = () => {
        return actions[prop].replace(':id', data.id);
      };

      return (
        actions.hasOwnProperty(prop) ?
          <Tooltip title={tooltipText}>
            <Link to={getLink()}><Button size="small" icon={icon} /></Link>
          </Tooltip> :
          null
      )
    };

    if (actions) {
      return(
        <Button.Group>
          {renderButton('view', 'View', 'eye')}
          {renderButton('edit', 'Edit', 'edit')}
        </Button.Group>
      );
    }
  };

  const renderDrawerActionButtons = (data) => {

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
          <Link to={actions.create}>
            <Button type={'primary'}>
              Create
            </Button>
          </Link>
        </Col>
        {
          filterConfig &&
            <Col span={8} offset={8}>
              <Button
                {...getToggleProps({
                  onClick: () => setFilterOpen(oldOpen => !oldOpen),
                })}
                type={'default'}
                style={{float: 'right'}}
              >
                { filterIsOpen ? 'Hide Filters' : 'Show Filters' }
              </Button>
            </Col>
        }
      </Row>
    )
  };

  const windowSize = useWindowSize();

  return(
    <Card size="small" style={{marginBottom: 20}} className={style.TableCard}>
      {filterConfig ?
        <section {...getCollapseProps()}>
          <ListTableFilters
            tableName={tableName}
            filterConfig={filterConfig}
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
  tableProps: state.tableSettings[ownProps.tableName],
});

ListTable.propTypes = {
  columnConfig: PropTypes.array.isRequired,
  filterConfig: PropTypes.array,
  apiCall: PropTypes.func.isRequired,
  tableName: PropTypes.string.isRequired,
  actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTable);
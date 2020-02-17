import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Col, Drawer, Modal, notification, Row, Table, Tooltip} from "antd";
import setTablePagination from './actions/setTablePagination';
import setTableTotal from './actions/setTableTotal';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import setTableSorter from "./actions/setTableSorter";
import useWindowSize from '@rehooks/window-size';
import ListTableFilters from "./ListTableFilters";
import useCollapse from 'react-collapsed';
import style from './ListTable.module.css';
import { Link } from 'react-router-dom'
import axios from "axios";

const ListTable = ({columnConfig, filterConfig, serviceClass, tableName, searchable, actions, formOpen='simple', ...props}) => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({});
  const [columns, setColumnConfig] = useState([]);
  const [filterIsOpen, setFilterOpen] = useState(true);

  const {getCollapseProps, getToggleProps} = useCollapse({defaultOpen: true});

  // Drawer form states
  const [drawerShown, setDrawerShown] = useState(false);
  const [action, setAction] = useState('create');
  const [selectedRecord, setSelectedRecord] = useState({});

  // Redux Hooks
  const tableProps = useSelector(state => state.tableSettings[tableName], shallowEqual);
  const dispatch = useDispatch();

  // componentDidMount
  useEffect(() => {
    const source = axios.CancelToken.source();

    if (tableProps) {
      fetchData(loadParamsFromRedux(tableProps), source.token);
    } else {
      dispatch(setTableSorter({}, tableName));
      dispatch(setTablePagination(initPagination(), tableName));
      setColumnConfig(loadActionColumns(columnConfig));
      fetchData({}, source.token);
    }

    return () => {
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadParamsFromRedux = (tableProps) => {
    let paginationParams, sorterParams;

    // Load pagination from redux
    paginationParams = loadPagination(tableProps['pagination']);

    // Load sorting from redux
    sorterParams = loadSorter(tableProps['sorter']);
    loadColumns(tableProps['sorter']);

    // Load filters from redux
    const filterParams = tableProps['filter'];
    return Object.assign({}, filterParams, paginationParams, sorterParams);
  };

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
      showTotal: (total, range) => {return `${range[0]}-${range[1]} of ${total} items`}
    }
  };

  const loadPagination = (pagination) => {
    const {pageSize, current} = pagination;
    return {
      limit: pageSize,
      offset: (current - 1) * pageSize
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
        setColumnConfig(loadActionColumns(newColumnConfig));
      }
    } else {
      const newColumnConfig = columnConfig.map((conf) => {
        conf['sortOrder'] = false;
        return conf;
      });
      setColumnConfig(loadActionColumns(newColumnConfig));
    }
  };

  const loadActionColumns = (columnConfig) => {
    const c = [...columnConfig];
    // Create action column
    if (actions) {
      c.push(
        {
          title: 'Actions',
          width: 150,
          className: style.ActionColumn,
          render: renderActionButtons
        }
      );
    }
    return c
  };

  const onClose = () => {
    fetchData(params);
    setDrawerShown(false);
  };

  const openForm = (action, value) => {
    setAction(action);
    setSelectedRecord(value);
    setDrawerShown(true);
  };

  const deleteAlert = () => {
    notification.warning({
      duration: 3,
      message: 'Removed!',
      description: `Record was removed!`,
    });
  };

  const showDeleteConfirm = (id) => {
    const { confirm } = Modal;

    confirm({
      title: 'Are you sure you would like to delete this record?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        serviceClass.delete(id).then(() => {
          onClose();
          deleteAlert();
        })
      },
    });
  };

  const renderActionButtons = (data) => {
    const renderButton = (prop, tooltipText, icon) => {
      const getLink = () => {
        return actions[prop].replace(':id', data.id);
      };

      if (formOpen === 'simple') {
        return (
          actions.hasOwnProperty(prop) ?
            <Tooltip title={tooltipText}>
              <Link to={getLink()}><Button size="small" icon={icon} /></Link>
            </Tooltip> :
            null
        )
      } else {
         return (
           actions.hasOwnProperty(prop) ?
             <Tooltip title={tooltipText}>
               <Button size="small" icon={icon} onClick={() => openForm(prop, data.id)}/>
             </Tooltip> :
             null
         )
      }
    };

    const renderDeleteButton = () => {
      if (data.is_removable) {
        return(
          <Tooltip title={'Delete'}>
            <Button size="small" icon={'delete'} onClick={() => showDeleteConfirm(data.id)}/>
          </Tooltip>
        )
      }
    };

    if (actions) {
      return(
        <Button.Group>
          {renderButton('view', 'View', 'eye')}
          {renderButton('edit', 'Edit', 'edit')}
          {renderDeleteButton()}
        </Button.Group>
      );
    }
  };

  const fetchData = (params, cancelToken) => {
    serviceClass.list(params, cancelToken).then((response) => {
      dispatch(setTableTotal(response.data.count, tableName));
      setData(response.data.results);
    })
  };

  const handleTableChange = (pagination, filters, sorter) => {
    let paginationParams, sorterParams = {};

    // Pagination
    const {current} = pagination;
    if (current) {
      paginationParams = loadPagination(pagination);
      dispatch(setTablePagination(pagination, tableName));
    }

    // Sorting
    loadColumns(sorter);
    if (Object.entries(sorter).length > 0) {
      const {columnKey} = sorter;
      if (columnKey) {
        sorterParams = loadSorter(sorter);
        dispatch(setTableSorter(sorter, tableName));
      }
    } else {
      dispatch(setTableSorter({}, tableName));
    }

    setParams(Object.assign({}, params, paginationParams, sorterParams))
  };

  const handleFilterChange = (filterValues) => {
    if (Object.entries(filterValues).length > 0) {
      setParams(Object.assign({}, params, filterValues))
    }
  };

  const getCreateButton = () => {
    if (formOpen === 'simple') {
      return (
        <Link to={actions.create}>
          <Button type={'primary'}>
            Create
          </Button>
        </Link>
      )
    } else {
      return (
        <Button type={'primary'} onClick={() => openForm('create', 0)}>
          Create
        </Button>
      )
    }
  };

  const getFooter = () => {
    return(
      <Row>
        <Col span={8}>
          {getCreateButton()}
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

  // const windowSize = useWindowSize();

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
        pagination={tableProps ? tableProps['pagination'] : {}}
        onChange={handleTableChange}
        footer={() => getFooter()}
        // scroll={{ y: windowSize.innerHeight - 340 }}
      />
      { formOpen === 'drawer' &&
        <Row>
          <Drawer
            title={action.charAt(0).toUpperCase() + action.slice(1)}
            width={'50%'}
            onClose={(e) => onClose()}
            visible={drawerShown}
          >
            {props.formRender({
              action: action,
              recordIdentifier: selectedRecord,
              onClose: (e) => onClose(),
              type: 'select'
            })}
          </Drawer>
        </Row>
      }
    </Card>
  )
};

ListTable.propTypes = {
  columnConfig: PropTypes.array.isRequired,
  filterConfig: PropTypes.array,
  serviceClass: PropTypes.object.isRequired,
  tableName: PropTypes.string.isRequired,
  formOpen: PropTypes.string,
  actions: PropTypes.object
};

export default ListTable;
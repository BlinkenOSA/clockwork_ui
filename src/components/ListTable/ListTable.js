import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Col, Modal, notification, Row, Table, Tooltip} from "antd";
import setTablePagination from './actions/setTablePagination';
import setTableTotal from './actions/setTableTotal';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import setTableSorter from "./actions/setTableSorter";
import ListTableFilters from "./ListTableFilters";
import useCollapse from 'react-collapsed';
import {Link} from 'react-router-dom'
import setTableExpandedRow from "./actions/setTableExpandedRow";
import { EyeOutlined, EditOutlined, DeleteOutlined, LoadingOutlined } from "@ant-design/icons";
import API from "../../services/api";

import style from './ListTable.module.css';

const ListTable = ({columnConfig, filterConfig, serviceClass, listIdentifier, listIdentifierParam,
                    tableName, searchable, actions, tableType='simple', reRender=false, drawer=false,
                    onOpenForm, renderCustomAddButton, renderCustomViewButton, renderCustomEditButton, expandable,
                    ...props}) => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState(undefined);
  const [columns, setColumnConfig] = useState([]);
  const [filterIsOpen, setFilterOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const {getCollapseProps, getToggleProps} = useCollapse({defaultOpen: true});

  // Redux Hooks
  const tableProps = useSelector(state => state.tableSettings[tableName], shallowEqual);
  const dispatch = useDispatch();

  // componentDidMount
  useEffect(() => {
    if (tableProps) {
      setParams(loadParamsFromRedux(tableProps));
    } else {
      dispatch(setTableSorter({}, tableName));
      dispatch(setTablePagination(initPagination(), tableName));
      dispatch(setTableExpandedRow([], tableName));
      setParams({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reload columnconfig, when data changes
  useEffect(() => {
    setColumnConfig(loadActionColumns(columnConfig));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    reRender && fetchData(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[reRender]);

  useEffect(() => {
    const source = API.CancelToken.source();
    fetchData(params, source.token);
    return () => {
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

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
    if (columnKey && column) {
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

  const deleteAlert = () => {
    notification.warning({
      duration: 3,
      message: 'Removed!',
      description: `Record was removed!`,
    });
  };

  const handleDelete = () => {
    if(data.length === 1) {
      const pagination = tableProps['pagination'];
      pagination['current'] = pagination['current'] - 1;
      dispatch(setTablePagination(pagination, tableName));

      const paginationParams = loadPagination(pagination);
      setParams(Object.assign({}, params, paginationParams));
    } else {
      fetchData(params);
    }
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
          handleDelete();
          deleteAlert();
        })
      }
    });
  };

  const renderActionButtons = (record) => {
    const renderButton = (prop, tooltipText, icon) => {
      const getLink = () => {
        return actions[prop]['link'].replace(':id', record.id);
      };

      if (!drawer) {
        return (
          actions.hasOwnProperty(prop) ?
            <Tooltip title={tooltipText}>
              <Link to={getLink()} className={'ant-btn ant-btn-sm ant-btn-icon-only'}>
                {icon}
              </Link>
            </Tooltip> :
            null
        )
      } else {
         return (
           actions.hasOwnProperty(prop) ?
             <Tooltip title={tooltipText}>
               <Button size="small" icon={icon} onClick={() => onOpenForm(prop, record)}/>
             </Tooltip> :
             null
         )
      }
    };

    const renderDeleteButton = () => {
      if (record.is_removable) {
        return(
          <Tooltip title={'Delete'}>
            <Button size="small" icon={<DeleteOutlined/>} onClick={() => showDeleteConfirm(record.id)}/>
          </Tooltip>
        )
      }
    };

    if (actions) {
      return(
        <Button.Group>
          {
            renderCustomAddButton && renderCustomAddButton(record)
          }
          {
            renderCustomViewButton ? renderCustomViewButton(record) :
            renderButton('view', actions.view && actions.view.text ? actions.view.text : 'View', <EyeOutlined/>)
          }
          {
            renderCustomEditButton ? renderCustomEditButton(record) :
            renderButton('edit', actions.edit && actions.edit.text ? actions.edit.text : 'Edit', <EditOutlined/>)
          }
          {renderDeleteButton()}
        </Button.Group>
      );
    }
  };

  const fetchData = (params, cancelToken) => {
    setLoading(true);
    if (listIdentifier) {
      if (params) {
        params[listIdentifierParam] = listIdentifier
      } else {
        params = {[listIdentifierParam]: listIdentifier}
      }
    }
    serviceClass.list(params, cancelToken).then((response) => {
      dispatch(setTableTotal(response.data.count, tableName));
      setData(response.data.results);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
    });
  };

  const handleExpand = (expanded, record) => {
    if (expanded) {
      const expandedRowKeys = [...tableProps['expandedRowKeys']];
      expandedRowKeys.push(record.id);
      dispatch(setTableExpandedRow(expandedRowKeys, tableName));
    } else {
      const expandedRowKeys = [...tableProps['expandedRowKeys']];
      const filtered = expandedRowKeys.filter((value) => {
        return value !== record.id;
      });
      dispatch(setTableExpandedRow(filtered, tableName));
    }
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
      const pagination = initPagination();
      pagination['current'] = 1;
      dispatch(setTablePagination(pagination, tableName));
      setParams(Object.assign({}, filterValues))
    }
  };

  const getCreateButton = () => {
    if (!drawer) {
      return (
        <Link to={actions.create.link}>
          <Button type={'primary'}>
            {actions.create && actions.create.text ? actions.create.text : 'Create'}
          </Button>
        </Link>
      )
    } else {
      return (
        <Button type={'primary'} onClick={() => onOpenForm('create', {})}>
          {actions.create && actions.create.text ? actions.create.text : 'Create'}
        </Button>
      )
    }
  };

  const getFooter = () => {
    return(
      <Row>
        <Col span={8}>
          {actions.create && getCreateButton()}
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
        size={'small'}
        expandedRowKeys={tableProps ? tableProps['expandedRowKeys'] : []}
        pagination={tableProps ? tableProps['pagination'] : {}}
        loading={{
            spinning: loading,
            indicator: <LoadingOutlined/>,
        }}
        onChange={handleTableChange}
        onExpand={handleExpand}
        footer={() => getFooter()}
        expandable={expandable}
      />
    </Card>
  )
};

ListTable.propTypes = {
  columnConfig: PropTypes.array.isRequired,
  filterConfig: PropTypes.array,
  serviceClass: PropTypes.object.isRequired,
  tableName: PropTypes.string.isRequired,
  tableType: PropTypes.string,
  drawer: PropTypes.bool,
  actions: PropTypes.object
};

export default ListTable;

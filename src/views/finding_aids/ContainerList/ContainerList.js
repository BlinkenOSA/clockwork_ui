import React, {useState, useEffect} from 'react';

import {Link, withRouter} from "react-router-dom";
import ContainerListBreadcrumb from "./ContainerListBreadcrumb";
import FindingAidsEntityList from "../FindingAidsEntityList/FindingAidsEntityList";
import { LoadingOutlined, EditOutlined, CloudDownloadOutlined, CloudUploadOutlined,
  DeleteOutlined, BarcodeOutlined} from "@ant-design/icons";
import {Button, Card, Col, Drawer, Modal, notification, Row, Table, Tooltip} from "antd";
import API from "../../../services/api";
import container from "../../../services/container/Container";
import style from "../../../components/ListTable/ListTable.module.css";
import useCollapse from "react-collapsed";
import ContainerCreateForm from "../ContainerForm/ContainerCreateForm";
import {FINDING_AIDS} from "../../../config/config-urls";
import archival_unit from "../../../services/archival_unit/ArchivalUnit";
import ContainerEditForm from "../ContainerForm/ContainerEditForm";
import BarcodeCreateForm from "../BarcodeForm/BarcodeCreateForm";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import setTablePagination from "../../../components/ListTable/actions/setTablePagination";
import setTableExpandedRow from "../../../components/ListTable/actions/setTableExpandedRow";
import setTableTotal from "../../../components/ListTable/actions/setTableTotal";
import setTableID from "../../../components/ListTable/actions/setTableID";

const paginationInit = {
  showQuickJumper: true,
  showSizeChanger: true,
  pageSizeOptions: ['10', '20', '30', '50', '100'],
  total: 0,
  showTotal: (total, range) => {return `${range[0]}-${range[1]} of ${total} items`}
};

const ContainerList = (props) => {
  const archivalUnitID = props.match.params.archival_unit_id;

  const [loading, setLoading] = useState(false);
  const [createFormIsOpen, setCreateFormIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [params, setParams] = useState({archival_unit: archivalUnitID});
  const [selectedRecord, setSelectedRecord] = useState({});
  const [formType, setFormType] = useState('container');
  const [drawerShown, setDrawerShown] = useState(false);

  const [archivalUnit, setArchivalUnit] = useState({});

  const {getCollapseProps, getToggleProps} = useCollapse({isExpanded: createFormIsOpen});

  // Redux Hooks
  const tableProps = useSelector(state => state.tableSettings['container'], shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    archival_unit.read(archivalUnitID).then((response) => {
      setArchivalUnit(response.data);
    });

    if (tableProps && tableProps['id'] === archivalUnitID) {
      setParams(Object.assign({}, params, loadPaginationParams(tableProps['pagination'])))
    } else {
      dispatch(setTableID(archivalUnitID, 'container'));
      dispatch(setTablePagination(paginationInit, 'container'));
      dispatch(setTableExpandedRow([], 'container'));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const deleteContainer = (id) => {
    const { confirm } = Modal;

    const handleDelete = () => {
      if(data.length === 1) {
        const {pagination} = tableProps;
        pagination['current'] = pagination['current'] - 1;
        dispatch(setTablePagination(pagination, 'container'));
        setParams(Object.assign({}, params, loadPaginationParams(pagination)))
      } else {
        fetchData();
      }
    };

    const deleteAlert = () => {
      notification.warning({
        duration: 3,
        message: 'Removed!',
        description: `Container was removed!`,
      });
    };

    confirm({
      title: 'Are you sure you would like to delete this record?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        container.delete(id).then(() => {
          handleDelete();
          deleteAlert();
        })
      }
    });
  };

  const renderActionButtons = (record) => {
    const renderDeleteButton = () => {
      if (record.is_removable) {
        return(
          <Tooltip title={'Delete'}>
            <Button size="small" icon={<DeleteOutlined/>} onClick={() => deleteContainer(record.id)}/>
          </Tooltip>
        )
      }
    };

    return (
      <Button.Group>
        <Tooltip title='Edit'>
          <Button size="small" icon={<EditOutlined/>} onClick={() => {
            setSelectedRecord(record);
            setFormType('container');
            setDrawerShown(true);
          }}/>
        </Tooltip>
        { renderDeleteButton() }
      </Button.Group>
    )
  };

  const renderBarcodeButton = (value, record) => {
    return record['barcode'] ? <span>{record['barcode']}</span> :
      (
        <Tooltip title='Barcode'>
          <Button size="small" icon={<BarcodeOutlined/>} onClick={() => {
            setSelectedRecord(record);
            setFormType('barcode');
            setDrawerShown(true);
          }}/>
        </Tooltip>
      )
  };

  const publishContainer = (id, action) => {
    const { confirm } = Modal;

    const publishAlert = () => {
      notification.success({
        duration: 3,
        message: `${action === 'publish' ? 'Published!' : 'Unpublished!'}`,
        description: `Entries in container were ${action}ed!`,
      });
    };

    confirm({
      title: `Are you sure you would like to ${action} this record?`,
      okText: 'Yes',
      okType: 'primary',
      cancelText: 'No',
      onOk() {
        setLoading(true);
        switch (action) {
          case 'publish':
            container.publish(id).then(() => {
              publishAlert();
              fetchData();
            });
            break;
          case 'unpublish':
            container.unpublish(id).then(() => {
              publishAlert();
              fetchData();
            });
            break;
          default:
            break;
        }
      }
    });
  };

  const renderPublishButton = (record) => {
    const renderContainerPublishButton = () => {
      const disabled = record.total_number === 0;
      if (record.total_number !== 0 && record.total_number === record.total_published_number) {
        return (
          <Tooltip title={'Unpublish'}>
            <Button size="small" disabled={disabled} onClick={() => publishContainer(record.id, 'unpublish')}>
              <CloudDownloadOutlined/>
            </Button>
          </Tooltip>
        );
      } else {
        return (
          <Tooltip title={'Publish'}>
            <Button size="small" disabled={disabled} onClick={() => publishContainer(record.id, 'publish')}>
              <CloudUploadOutlined/>
            </Button>
          </Tooltip>
        );
      }
    };

    return (
      <Button.Group>
        {renderContainerPublishButton()}
        {record.total_number !== 0 &&
        <Button
          size="small"
          className={record.total_number === record.total_published_number ? style.ButtonAllPublished : style.ButtonNotPublished}
          disabled>
          { record.total_number } / { record.total_published_number }
        </Button>
        }
      </Button.Group>
    )
  };

  const columns = [
    {
      title: 'Container No.',
      dataIndex: 'reference_code',
      key: 'reference_code',
      width: 200
    }, {
      title: 'Carrier Type',
      dataIndex: 'carrier_type',
      key: 'carrier_type',
    }, {
      title: 'Barcode',
      dataIndex: 'barcode',
      key: 'barcode',
      className: style.ActionColumn,
      render: renderBarcodeButton
    }, {
      title: 'Actions',
      width: 150,
      className: style.ActionColumn,
      render: renderActionButtons
    }, {
      title: 'Publish',
      width: 150,
      className: style.ActionColumn,
      render: renderPublishButton
    }
  ];

  const fetchData = () => {
    const source = API.CancelToken.source();
    setLoading(true);
    container.list(params, source.token).then((response) => {
      dispatch(setTableTotal(response.data.count, 'container'));
      setData(response.data.results);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
    });
  };

  const expandedRowRender = (record, index) => {
    return (
      <span>
        <FindingAidsEntityList
          expandedRowKeys={tableProps ? tableProps['expandedRowKeys'] : []}
          containerNo={record.container_no}
          containerID={record.id}
        />
      </span>
    )
  };

  const onExpand = (expand, record) => {
    if (expand) {
      dispatch(setTableExpandedRow([record.id], 'container'));
    } else {
      dispatch(setTableExpandedRow([], 'container'));
    }
  };

  const loadPaginationParams = (pagination) => {
    const {pageSize, current} = pagination;
    return {
      limit: pageSize,
      offset: (current - 1) * pageSize
    }
  };

  const handleTableChange = (pagination) => {
    dispatch(setTablePagination(pagination, 'container'));
    setParams(Object.assign({}, params, loadPaginationParams(pagination)))
  };

  const getFooter = () => {
    return(
      <Row>
        <Col span={8}>
          <Button
            {...getToggleProps({
              onClick: () => setCreateFormIsOpen(oldOpen => !oldOpen),
            })}
            type={'default'}
          >
            { createFormIsOpen ? 'Hide Create Form' : 'Show Create Form' }
          </Button>
          <Link to={FINDING_AIDS}>
            <Button type={'default'} style={{marginLeft: '10px'}}>Back</Button>
          </Link>
        </Col>
      </Row>
    )
  };

  const afterSubmit = () => {
    const {pagination} = tableProps;
    const pageSize = pagination.hasOwnProperty('pageSize') ? pagination['pageSize'] : 10;
    pagination['current'] = Math.floor(pagination['total']/pageSize) + 1;
    handleTableChange(pagination);
  };

  const onDrawerClose = () => {
    setDrawerShown(false);
  };

  const afterEditSubmit = () => {
    fetchData();
    setDrawerShown(false);
  };

  return(
    <React.Fragment>
      <ContainerListBreadcrumb
        title={archivalUnit.title_full}
      />
      <section {...getCollapseProps()}>
        <ContainerCreateForm
          formOpen={createFormIsOpen}
          afterSubmit={afterSubmit}
          archivalUnitTitle={archivalUnit.title_full}
          archivalUnitID={archivalUnitID}
          onClose={() => {
            setCreateFormIsOpen(false)
          }}
        />
      </section>
      <Card size="small" style={{marginBottom: 20}}>
        <Table
          bordered={true}
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size={'small'}
          pagination={tableProps && (tableProps['id'] === archivalUnitID) ? tableProps['pagination'] : paginationInit}
          onChange={handleTableChange}
          expandable={{
            expandedRowRender: expandedRowRender,
            expandedRowKeys: tableProps && (tableProps['id'] === archivalUnitID) ? tableProps['expandedRowKeys'] : [],
            onExpand: onExpand,
          }}
          loading={{
            spinning: loading,
            indicator: <LoadingOutlined/>,
          }}
          footer={() => getFooter()}
        />
      </Card>
      <Drawer
        title={formType === 'barcode' ? 'Create barcode' : 'Edit container'}
        width={'30%'}
        onClose={(e) => onDrawerClose()}
        visible={drawerShown}
        destroyOnClose={true}
      >
        {
          formType === 'barcode' ?
            <BarcodeCreateForm
              afterSubmit={afterEditSubmit}
              recordIdentifier={selectedRecord.id}
              selectedRecord={selectedRecord}
            />
            :
            <ContainerEditForm
              onClose={afterEditSubmit}
              recordIdentifier={selectedRecord.id}
              selectedRecord={selectedRecord}
            />
        }
      </Drawer>
    </React.Fragment>
  )
};

export default withRouter(ContainerList);

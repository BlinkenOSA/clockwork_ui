import React, {useState, useEffect} from 'react';
import {Button, Col, Modal, notification, Row, Table, Tooltip} from "antd";
import API from "../../../services/api";
import { LoadingOutlined, EditOutlined, CloudDownloadOutlined, CloudUploadOutlined,
  DeleteOutlined, FolderOpenOutlined, FileOutlined, CopyOutlined, GlobalOutlined,
  WarningOutlined
} from "@ant-design/icons";
import style from './FindingAidsEntityList.module.css'
import finding_aids from "../../../services/finding_aids/FindingAids";
import {useDidMountEffect} from "../../../utils/hooks/useDidMountEffect";
import {Link} from "react-router-dom";
import {FINDING_AIDS_EDIT} from '../../../config/config-urls';

const paginationInit = {
  showQuickJumper: true,
  showSizeChanger: true,
  pageSizeOptions: ['10', '20', '30', '50', '100'],
  total: 0,
  showTotal: (total, range) => {return `${range[0]}-${range[1]} of ${total} items`}
};

const FindingAidsEntityList = ({containerID, containerReferenceCode, expandedRowKeys, reRender, onAction, ...props}) => {
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState(paginationInit);
  const [data, setData] = useState([]);
  const [params, setParams] = useState({});

  useEffect(() => {
    if(expandedRowKeys.length > 0) {
      if (expandedRowKeys[0] === containerID) {
        setParams({ container: containerID })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandedRowKeys]);

  useDidMountEffect(() => {
    if (reRender) {
      fetchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reRender]);

  useDidMountEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const renderActionButtons = (record) => {
    const renderDeleteButton = () => {
      if (record.is_removable) {
        return(
          <Tooltip title={'Delete'}>
            <Button size="small" icon={<DeleteOutlined/>} onClick={() => handleDelete(record.id)} />
          </Tooltip>
        )
      }
    };

    return (
      <React.Fragment>
        <Tooltip title={'Clone'}>
          <Button size="small" icon={<CopyOutlined/>} style={{marginRight: '5px'}} onClick={() => handleClone(record.id)}/>
        </Tooltip>
        <Button.Group>
          <Tooltip title='Editke'>
            <Link to={FINDING_AIDS_EDIT.replace(':id', record.id)}>
              <Button size="small" icon={<EditOutlined/>} />
            </Link>
          </Tooltip>
          { renderDeleteButton() }
        </Button.Group>
        {
          record.published ?
          <Tooltip title={'Catalog Link'}>
            <a href={`https://catalog.osaarchivum.org/catalog/${record.catalog_id}`} target={'_new'}>
              <Button size="small" icon={<GlobalOutlined/>} style={{marginLeft: '5px'}} />
            </a>
          </Tooltip> : <Button size="small" icon={<GlobalOutlined/>} style={{marginLeft: '5px'}} disabled={true}/>
        }
      </React.Fragment>
    )
  };

  const loadPaginationParams = (pagination) => {
    const {pageSize, current} = pagination;
    return {
      limit: pageSize,
      offset: (current - 1) * pageSize
    }
  };

  const handleTableChange = (pagination, filters, sorter) => {
    setParams(Object.assign({}, params, loadPaginationParams(pagination)))
  };

  const archivalReferenceCodeRender = (text, record) => {
    if (record.level === 'F') {
      return (
        <span>
        <FolderOpenOutlined style={{marginLeft: '10px', marginRight: '15px'}}/> {text}
      </span>
      )
    } else {
      return (
        <span><FileOutlined style={{marginLeft: '10px', marginRight: '15px'}}/> {text}</span>
      )
    }
  };

  const dateRender = (text, record) => {
    if (record.date_to) {
      return `${record.date_from} - ${record.date_to}`
    } else {
      return record.date_from
    }
  };

  const renderPublishButton = (record) => {
    const renderContainerPublishButton = () => {
      if (record.published) {
        return (
          <Tooltip title={'Unpublish'}>
            <Button size="small" className={style.ButtonUnpublish} onClick={() => {handleAction(record.id, 'unpublish')}}>
              <CloudDownloadOutlined/>
            </Button>
          </Tooltip>
        );
      } else {
        return (
          <Tooltip title={'Publish'}>
            <Button size="small" className={style.ButtonPublish} onClick={() => {handleAction(record.id, 'publish')}}>
              <CloudUploadOutlined/>
            </Button>
          </Tooltip>
        );
      }
    };

    const renderConfidentialButton = () => {
      if (record.confidential) {
        return (
          <Tooltip title={'Unset confidential'}>
            <Button size="small" type={'warning'}
                    className={style.ButtonConfidential}
                    onClick={() => {handleAction(record.id, 'set_non_confidential')}}>
              <WarningOutlined />
            </Button>
          </Tooltip>
        );
      } else {
        return (
          <Tooltip title={'Set confidential'}>
            <Button size="small"
                    type={'warning'}
                    onClick={() => {handleAction(record.id, 'set_confidential')}}>
              <WarningOutlined />
            </Button>
          </Tooltip>
        );
      }
    };

    return (
      <Button.Group>
        { renderContainerPublishButton() }
        { renderConfidentialButton() }
      </Button.Group>
    )
  };

  const columns = [
    {
      title: '',
      dataIndex: 'archival_reference_code',
      key: 'archival_reference_code',
      sorter: false,
      render: archivalReferenceCodeRender,
      width: 250
    }, {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: false,
    }, {
      title: 'Date',
      dataIndex: 'date_from',
      key: 'date_from',
      sorter: false,
      render: dateRender,
      width: 200
    }, {
      title: 'Actions',
      width: 150,
      className: style.ActionColumn,
      render: renderActionButtons
    }, {
      title: 'Publish',
      width: 140,
      className: style.ActionColumn,
      render: renderPublishButton
    }
  ];

  const handleAction = (id, action) => {
    switch (action) {
      case 'publish':
        finding_aids.publish(id).then((response) => {
          fetchData();
        });
        onAction();
        break;
      case 'unpublish':
        finding_aids.unpublish(id).then((response) => {
          fetchData();
        });
        onAction();
        break;
      case 'set_confidential':
        finding_aids.setConfidential(id).then((response) => {
          fetchData();
        });
        break;
      case 'set_non_confidential':
        finding_aids.setNonConfidential(id).then((response) => {
          fetchData();
        });
        break;
      default:
        break;
    }
  };

  const handleDelete = (id) => {
    const { confirm } = Modal;

    const handleDelete = () => {
      fetchData();
      onAction();
    };

    const deleteAlert = () => {
      notification.warning({
        duration: 3,
        message: 'Removed!',
        description: `Finding Aids Record was removed!`,
      });
    };

    confirm({
      title: 'Are you sure you would like to delete this record?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        finding_aids.delete(id).then(() => {
          handleDelete();
          deleteAlert();
        })
      }
    });
  };

  const handleClone = (identifier) => {
    const source = API.CancelToken.source();
    setLoading(true);
    finding_aids.clone(identifier, source.token).then((response) => {
      fetchData();
    });
    onAction();
  };

  const fetchData = () => {
    const source = API.CancelToken.source();
    setLoading(true);
    finding_aids.list(params, source.token).then((response) => {
      pagination['total'] = response.data.count;
      setPagination(pagination);
      setData(response.data.results);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
    });
  };

  const getFooter = () => {
    return(
      <Row>
        <Col span={24} style={{textAlign: 'right'}}>
        </Col>
      </Row>
    )
  };

  return (
    <Table
      title={() => (<span className={style.TableTitle}>Folders / Items in {containerReferenceCode}</span>)}
      className={style.Table}
      bordered={true}
      rowKey={record => record.id}
      dataSource={data}
      columns={columns}
      size={'small'}
      pagination={pagination}
      onChange={handleTableChange}
      loading={{
        spinning: loading,
        indicator: <LoadingOutlined/>,
      }}
      footer={() => getFooter()}
    />
  )
};

export default FindingAidsEntityList;

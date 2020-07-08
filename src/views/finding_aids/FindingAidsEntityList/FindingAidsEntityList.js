import React, {useState, useEffect} from 'react';
import {Button, Table, Tooltip} from "antd";
import API from "../../../services/api";
import { LoadingOutlined, EditOutlined, CloudDownloadOutlined, CloudUploadOutlined,
  DeleteOutlined, FolderOpenOutlined, FileOutlined} from "@ant-design/icons";
import style from './FindingAidsEntityList.module.css'
import finding_aids from "../../../services/finding_aids/FindingAids";

const paginationInit = {
  showQuickJumper: true,
  showSizeChanger: true,
  pageSizeOptions: ['10', '20', '30', '50', '100'],
  total: 0,
  showTotal: (total, range) => {return `${range[0]}-${range[1]} of ${total} items`}
};

const FindingAidsEntityList = ({containerID, containerNo, expandedRowKeys, ...props}) => {
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState(paginationInit);
  const [data, setData] = useState([]);
  const [params, setParams] = useState({container: containerID});

  useEffect(() => {
    if(expandedRowKeys.length > 0) {
      if (expandedRowKeys[0] === containerID) {
        fetchData();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandedRowKeys]);

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const renderActionButtons = (record) => {
    const renderDeleteButton = () => {
      if (record.is_removable) {
        return(
          <Tooltip title={'Delete'}>
            <Button size="small" icon={<DeleteOutlined/>} />
          </Tooltip>
        )
      }
    };

    return (
      <Button.Group>
        <Tooltip title='Edit'>
          <Button size="small" icon={<EditOutlined/>} />
        </Tooltip>
        { renderDeleteButton() }
      </Button.Group>
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

  const columns = [
    {
      title: '',
      dataIndex: 'archival_reference_code',
      key: 'archival_reference_code',
      sorter: false,
      render: archivalReferenceCodeRender,
      width: 250
    }, {
      title: 'Title.',
      dataIndex: 'title',
      key: 'title',
      sorter: false,
      ellipsis: true
    }, {
      title: 'Date',
      dataIndex: 'date_from',
      key: 'date_from',
      sorter: false,
      width: 100
    }, {
      title: 'Actions',
      width: 150,
      className: style.ActionColumn,
      render: renderActionButtons
    },
  ];

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

  return (
    <Table
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
      footer={() => ''}
    />
  )
};

export default FindingAidsEntityList;

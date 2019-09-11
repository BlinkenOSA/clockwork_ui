import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Col, Icon, Input, Select, Row} from "antd";
import style from './ListTableFilters.module.css';
import {connect} from "react-redux";
import setTableFilter from "./actions/setTableFilter";


const ListTableFilters = ({filterConfig, ...props}) => {
  const [filterState, setFilterState] = useState({});

  const updateField = (field, value) => {
    setFilterState({
      ...filterState,
      [field]: value
    });
  };

  // componentDidMount
  useEffect(() => {
    if (props.tableProps) {
      const filter = props.tableProps['filter'];
      setFilterState(filter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    props.setTableFilter(filterState, props.tableName);
    props.onFilterChange(filterState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState]);

  const renderField = (fieldConfig, key, props) => {
    switch (fieldConfig.type) {
      // SearchFilter
      case 'search':
        return(
          <Col span={fieldConfig.span} key={key}>
            <Input
              name={'search'}
              placeholder={fieldConfig.placeholder}
              addonAfter={<Icon type="search" />}
              allowClear={true}
              value={filterState.search}
              onChange={(e) => { updateField(e.target.name, e.target.value) }}
            />
          </Col>
        );
      // NumberFilter
      case 'number':
        return(
          <Col span={fieldConfig.span} key={key}>
            <Input
              name={fieldConfig.filterParam}
              placeholder={fieldConfig.placeholder}
              allowClear={true}
              value={filterState[fieldConfig.filterParam]}
              onChange={(e) => { updateField(e.target.name, e.target.value) }}
            />
          </Col>
        );
      case 'select':
        const { Option } = Select;
        return(
          <Col span={fieldConfig.span} key={key}>
            <Select
              name={fieldConfig.filterParam}
              placeholder={fieldConfig.placeholder}
              allowClear={true}
              style={{ width: '100%' }}
              value={filterState[fieldConfig.filterParam]}
              onChange={(value) => { updateField(fieldConfig.filterParam, value) }}
            >
              {fieldConfig.data.map(d => (
                <Option key={d}>{d}</Option>
              ))}
            </Select>
          </Col>
        );
      default:
        break;
    }
  };

  return(
    <div className={style.Filter}>
      {
        filterConfig.map((row, idx) => {
          return (
            <Row key={idx} gutter={10} type="flex">
              {row.map((fieldConfig, key) => {
                return renderField(fieldConfig, key, props)
              })}
            </Row>
          )
        })
      }
    </div>
  )
};

ListTableFilters.propTypes = {
  tableName: PropTypes.string.isRequired,
  filterConfig: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.object
    )
  ).isRequired,
  onFilterChange: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  tableProps: state.tableSettings[ownProps.tableName]
});

const mapDispatchToProps = (dispatch) => ({
  setTableFilter: (filter, tableName) => {
    dispatch(setTableFilter(filter, tableName))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTableFilters);
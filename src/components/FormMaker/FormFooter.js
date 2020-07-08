import React, {useState} from "react";
import {Button, Card, Col, Row} from "antd";
import useCollapse from "react-collapsed";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import style from './FormFooter.module.css';

const FormFooter = ({action, type='simple', backPath, onSubmitClick, values, loading, info, ...props}) => {
  const [infoIsOpen, setInfoOpen] = useState(false);
  const {getCollapseProps, getToggleProps} = useCollapse({defaultOpen: false});

  const renderFooter = () => {
    return (
      <React.Fragment>
        <Card size={'small'} className={style.Footer}>
          <Row gutter={10} type="flex">
            <Col span={4}>
              { action !== 'view' && <Button type={'primary'} htmlType={'submit'} loading={loading}>Submit</Button>}
            </Col>
            <Col span={8} offset={12} className={style.RightButtons}>
              <Link to={backPath}>
                <Button>Close</Button>
              </Link>
              { action !== 'create' && info &&
                <Button
                  className={style.InfoButton}
                  {...getToggleProps({
                    onClick: () => setInfoOpen(oldOpen => !oldOpen)
                  })}
                  type={'default'}
                >
                  {infoIsOpen ? 'Hide Info' : 'Show Info'}
                </Button>
              }
            </Col>
          </Row>
        </Card>
        { info &&
          <section {...getCollapseProps()}>
            <Card size={'small'} className={style.FooterInfo}>
              <Row gutter={10} type="flex">
                <Col>
                  <p>
                    <strong>Record created: </strong>
                    {values.date_created ? values.date_created : ''}
                    {values.user_created ? ` by '${values.user_created}'` : ''}
                  </p>
                  <p>
                    <strong>Record updated: </strong>
                    {values.date_updated ? values.date_updated : ''}
                    {values.user_updated ? ` by '${values.user_updated}'` : ''}
                  </p>
                </Col>
              </Row>
            </Card>
          </section>
        }
        <div className={style.FooterMargin}/>
      </React.Fragment>
    )
  };

  const renderSubmitOnlyFooter = () => {
    return (
      <React.Fragment>
        <Card size={'small'} className={style.Footer}>
          <Row gutter={10} type="flex">
            <Col span={4}>
              <Button type={'primary'} htmlType={'submit'} loading={loading}>Submit</Button>
            </Col>
          </Row>
        </Card>
        <div className={style.FooterMargin}/>
      </React.Fragment>
    )
  };

  const renderDrawerFooter = () => {
    return (
      <React.Fragment>
        <div className={style.DrawerFooter}>
          <Row gutter={10} type="flex">
            <Col span={4}>
              { action !== 'view' && <Button type={'primary'} htmlType={'button'} onClick={onSubmitClick} loading={loading}>Submit</Button>}
            </Col>
          </Row>
        </div>
        { info &&
          <div className={style.DrawerFooterInfo}>
            <Row gutter={10} type="flex">
              <Col>
                <p>
                  <strong>Record created: </strong>
                  {values.date_created ? values.date_created : ''}
                  {values.user_created ? ` by '${values.user_created}'` : ''}
                </p>
                <p>
                  <strong>Record updated: </strong>
                  {values.date_updated ? values.date_updated : ''}
                  {values.user_updated ? ` by '${values.user_updated}'` : ''}
                </p>
              </Col>
            </Row>
          </div>
        }
      </React.Fragment>
    )
  };

  switch (type) {
    case 'simple':
      return (renderFooter());
    case 'drawer':
      return (renderDrawerFooter());
    case 'select':
      return (renderDrawerFooter());
    case 'submitOnly':
      return (renderSubmitOnlyFooter());
    default:
      break;
  }
};

FormFooter.defaultValues = {
  action: 'create',
  type: 'simple'
};

FormFooter.propTypes = {
  action: PropTypes.string,
  onSubmitClick: PropTypes.func,
  type: PropTypes.string,
  backPath: PropTypes.string,
  values: PropTypes.object
};

export default FormFooter;

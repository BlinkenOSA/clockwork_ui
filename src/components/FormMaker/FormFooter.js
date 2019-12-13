import React, {useState} from "react";
import {Button, Card, Col, Row} from "antd";
import style from './FormFooter.module.css';
import useCollapse from "react-collapsed";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const FormFooter = ({action, backPath, values, ...props}) => {
  const [infoIsOpen, setInfoOpen] = useState(false);
  const {getCollapseProps, getToggleProps} = useCollapse({defaultOpen: false});

  return(
    <React.Fragment>
      <Card size={'small'} className={style.Footer}>
        <Row gutter={10} type="flex">
          <Col span={4}>
            { action !== 'view' && <Button type={'primary'} htmlType={'submit'}>Submit</Button>}
          </Col>
          <Col span={8} offset={12} className={style.RightButtons}>
            <Link to={backPath}>
              <Button className={style.CloseButton}>Close</Button>
            </Link>
            <Button
              {...getToggleProps({
                onClick: () => setInfoOpen(oldOpen => !oldOpen)
              })}
              type={'default'}
            >
              { infoIsOpen ? 'Hide Info' : 'Show Info' }
            </Button>
          </Col>
        </Row>
      </Card>
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
      <div className={style.FooterMargin}/>
    </React.Fragment>
  )
};

FormFooter.defaultValues = {
  action: 'create',
};

FormFooter.propTypes = {
  action: PropTypes.string,
  backPath: PropTypes.string,
  values: PropTypes.object
};

export default FormFooter;
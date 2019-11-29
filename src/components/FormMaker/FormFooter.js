import React, {useState} from "react";
import {Button, Card, Col, Row} from "antd";
import style from './FormFooter.module.css';
import useCollapse from "react-collapsed";

const FormFooter = () => {
  const [infoIsOpen, setInfoOpen] = useState(true);
  const {getCollapseProps, getToggleProps} = useCollapse({defaultOpen: true});

  return(
    <React.Fragment>
      <Card size={'small'} className={style.Footer}>
        <Row gutter={10} type="flex">
          <Col span={4}>
            <Button type={'primary'} htmlType={'submit'}>Submit</Button>
          </Col>
          <Col span={8} offset={12} className={style.RightButtons}>
            <Button className={style.CloseButton}>Close</Button>
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
              <p>asdfg</p>
            </Col>
          </Row>
        </Card>
      </section>
      <div className={style.FooterMargin}/>
    </React.Fragment>
  )
};

export default FormFooter;
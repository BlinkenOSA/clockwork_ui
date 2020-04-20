import React from "react";
import {Card, Col, Row} from "antd";
import BreadcrumbMenu from "../../BreadcrumbMenu/BreadcrumbMenu";
import UserAvatar from "../UserAvatar/UserAvatar";
import {shallowEqual, useSelector} from "react-redux";
import { Typography } from 'antd';
import UserDetailsForm from "./forms/UserDetailsForm";
import UserPasswordChangeForm from "./forms/UserPasswordChangeForm";

const { Title, Text } = Typography;

const UserProfileForm = () => {
  const user = useSelector(state => state.user, shallowEqual);

  return (
    <React.Fragment>
      <BreadcrumbMenu/>
      <Row gutter={10}>
        <Col span={10}>
          <Card size="small">
            <div style={{textAlign: 'center'}}>
              <UserAvatar
                size={80}
              />
            <Title level={4}>{user.lastName}, {user.firstName}</Title>
            <Text>{user.username}</Text>
            </div>
          </Card>
        </Col>
        <Col span={14}>
          <UserDetailsForm />
          <UserPasswordChangeForm />
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default UserProfileForm;

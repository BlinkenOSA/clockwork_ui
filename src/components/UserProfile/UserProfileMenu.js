import React from "react";
import {Avatar, Dropdown, Menu} from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import style from "./UserProfileMenu.module.css";
import {clearAuthTokens} from "axios-jwt";
import { useHistory } from "react-router-dom";


const UserProfileMenu = (props) => {
  let history = useHistory();

  const getUser = (user) => {
    if (user.length > 5) {
      const names = user.split('.');
      return `${names[0][0]}${names[1][0]}`
    } else {
      return user
    }
  };

  const getColor = () => {
    return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
  };

  const menuClick = ({ key }) => {
    if (key === 'logout') {
      clearAuthTokens();
      history.push("/home");
    }
  };

  const menu = (
    <Menu onClick={menuClick}>
      <Menu.Item key="profile">
        <UserOutlined />
          Profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined/>
          Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      trigger={['click']}
    >
      <div className={style.Profile}>
        <Avatar
          style={{backgroundColor: getColor()}}
          size="default"
          color={getColor()}
        >
          { getUser('Ams.Test') }
        </Avatar>
        <span className={style.ProfileText}>AMS Test User</span>
      </div>
    </Dropdown>
  )
};

export default UserProfileMenu;

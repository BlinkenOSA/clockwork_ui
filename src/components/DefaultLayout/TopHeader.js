import React from 'react';
import {Layout} from 'antd';
import style from './TopHeader.module.css';
import UserProfileMenu from "../UserProfile/UserProfileMenu";

const { Header } = Layout;

const TopHeader = () => {
  return(
    <Header className={style.Header}>
      <UserProfileMenu/>
    </Header>
  )
};

export default TopHeader;

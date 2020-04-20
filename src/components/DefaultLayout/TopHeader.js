import React from 'react';
import {Layout} from 'antd';
import UserProfileMenu from "./header/UserProfileMenu/UserProfileMenu";

import style from './TopHeader.module.css';

const { Header } = Layout;

const TopHeader = () => {
  return(
    <Header className={style.Header}>
      <UserProfileMenu/>
    </Header>
  )
};

export default TopHeader;

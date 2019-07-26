import React from 'react';
import { Layout } from 'antd';
import style from './TopHeader.module.css';

const { Header } = Layout;

const TopHeader = () => {
  return(
    <Header className={style.Header}/>
  )
};

export default TopHeader;
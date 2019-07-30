import React from 'react';
import {Avatar, Layout} from 'antd';
import style from './TopHeader.module.css';

const { Header } = Layout;

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

const TopHeader = () => {
  return(
    <Header className={style.Header} align={'right'}>
      <div className={style.Profile}>
        <Avatar
          style={{backgroundColor: getColor()}}
          size="default"
          color={getColor()}
        >
          { getUser('zsuzsa.zadori') }
        </Avatar>
        <span className={style.ProfileText}>Zádori, Zsuzsa (zsuzsa.zadori)</span>
      </div>
    </Header>
  )
};

export default TopHeader;
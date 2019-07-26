import React from "react";
import {Icon, Menu} from "antd";
import style from './SideMenu.module.css';
import configMenu from '../../config/config-menu';

const { SubMenu } = Menu;

const SideMenu = () => {
  return(
    <React.Fragment>
      <div className={style.Logo} />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {
          configMenu.map((menu, idx) => {
            return(
              <Menu.Item key={idx}>
                <Icon type={menu.icon} />
                <span>{menu.name}</span>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </React.Fragment>
  )
};

export default SideMenu;

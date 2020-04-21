import React, {useEffect, useState} from "react";
import {Menu} from "antd";
import configMenu from '../../config/config-menu';
import {Link, withRouter} from "react-router-dom";

import style from './SideMenu.module.css';

const { SubMenu } = Menu;

const SideMenu = ({collapsed, location, ...props}) => {
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const rootSubmenuKeys = configMenu.filter(m => m.hasOwnProperty('submenu')).map(e => e.name);

  useEffect(() => {
    openSelectedMenu()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openSelectedMenu = () => {
    let menuState;
    configMenu.forEach(m => {
      menuState = [];
      getSelectedKeys(m, menuState)
    })
  };

  const getSelectedKeys = (menu, menuState) => {
    const mn = Array.isArray(menu) ? menu : [menu];
    let mState = [...menuState];

    mn.forEach(m => {
      if (!m.hasOwnProperty('link')) {
        if (mState.length > 1) { mState.pop() }
        mState.push(m.name);
      }

      if (m.hasOwnProperty('submenu')) {
        getSelectedKeys(m.submenu, mState)
      } else {
        if (m.link === location.pathname) {
          setOpenKeys(mState);
          setSelectedKeys([m.name]);
        }
      }
    });
  };

  const getSubmenus = (menu, idx) => {
    return(
      <SubMenu
        key={menu.name}
        title={
          <span>
            {menu.icon}
            <span>{menu.name}</span>
          </span>
        }
      >
        {menu.submenu.map((submenu, idx) => {
          if (submenu.hasOwnProperty('submenu')) {
            return(
              getSubmenus(submenu, idx)
            )
          } else {
            return(
              <Menu.Item key={submenu.name}>
                {submenu.icon}
                <span>{submenu.name}</span>
                {submenu.link ? <Link to={submenu.link} /> : null}
              </Menu.Item>
            )
          }})
        }
      </SubMenu>
    )
  };

  const onOpenChange = (newOpenKeys) => {
    const latestOpenKey = newOpenKeys.find(key => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(newOpenKeys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [''])
    }
  };

  return(
    <React.Fragment>
      <div className={style.Logo}>
        {collapsed ? <React.Fragment><b>C</b>WK</React.Fragment> : <React.Fragment><b>Clock</b>Work AMS</React.Fragment>}
      </div>
      <Menu
        theme="dark"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={selectedKeys}
        onSelect={({key}) => setSelectedKeys([key])}
        mode="inline"
      >
        {
          configMenu.map((menu, idx) => {
            if (menu.hasOwnProperty('submenu')) {
              return (getSubmenus(menu, idx));
            } else {
              return(
                <Menu.Item key={menu.name}>
                  {menu.icon}
                  <span>{menu.name}</span>
                  {menu.link ? <Link to={menu.link} /> : null}
                </Menu.Item>
              )
            }
          })
        }
      </Menu>
    </React.Fragment>
  )
};

export default withRouter(SideMenu);

import React, {useEffect, useState} from "react";
import {Icon, Menu} from "antd";
import style from './SideMenu.module.css';
import configMenu from '../../config/config-menu';
import {Link, withRouter} from "react-router-dom";

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

    mn.forEach(m => {
      if (!m.hasOwnProperty('link')) {
        if (menuState.length > 1) { menuState.pop() }
        menuState.push(m.name);
      }

      if (m.hasOwnProperty('submenu')) {
        getSelectedKeys(m.submenu, menuState)
      } else {
        if (m.link === location.pathname) {
          setOpenKeys(menuState);
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
            {menu.icon ? <Icon type={menu.icon} /> : null}
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
                {submenu.icon ? <Icon type={submenu.icon} /> : null}
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
                  <Icon type={menu.icon} />
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

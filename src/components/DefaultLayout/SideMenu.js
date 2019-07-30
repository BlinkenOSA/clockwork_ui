import React, {useState} from "react";
import {Icon, Menu} from "antd";
import style from './SideMenu.module.css';
import configMenu from '../../config/config-menu';

const { SubMenu } = Menu;

const SideMenu = ({collapsed, ...props}) => {
  const [openKeys, setOpenKeys] = useState([]);

  const rootSubmenuKeys = configMenu.filter(m => m.hasOwnProperty('submenu')).map(e => e.name);

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
                </Menu.Item>
              )
            }
          })
        }
      </Menu>
    </React.Fragment>
  )
};

export default SideMenu;

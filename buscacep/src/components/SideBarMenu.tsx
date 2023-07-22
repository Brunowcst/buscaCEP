import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { MenuOutlined, HomeOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import styles from './SideBarMenu.module.css';
import './SideBar.css'

function SideBarMenu() {
  const [collapsed, setCollapsed] = useState(true);
  const { Sider } = Layout;
  const { Item } = Menu;

  interface SideBarMenuProps {
    visible: boolean;
  }

  const menuItems = [
    { key: 'home', label: 'Home', route: '/', icon: <HomeOutlined /> },
    { key: 'contacts', label: 'Contacts', route: '/contacts', icon: <UserOutlined /> },
    { key: 'about', label: 'Sobre', route: '/about', icon: <InfoCircleOutlined /> },
  ];

  const toggleMenu = (visible: boolean) => {
    setCollapsed(!visible);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onMouseEnter={() => toggleMenu(true)}
      onMouseLeave={() => toggleMenu(false)}
      style={{ background: '#ff8052' }}
    >
      <Menu className={styles.menu} theme="dark" mode="vertical" defaultSelectedKeys={['home']}>
        {menuItems.map((item) => (
          <Item key={item.key}>
            <NavLink to={item.route}>
              {collapsed ? item.icon : null}
              <span>{item.icon} {item.label}</span>
            </NavLink>
          </Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default SideBarMenu;

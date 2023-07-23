import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import styles from './SideBarMenu.module.css';
import './SideBar.css'

interface SideBarMenuProps {
  visible: boolean;
}

function SideBarMenu({ visible }: SideBarMenuProps) {
  const [collapsed, setCollapsed] = useState(true);
  const { Sider } = Layout;
  const { Item } = Menu;

  const menuItems = [
    { key: 'home', label: 'Home', route: '/buscaCEP', icon: <HomeOutlined /> },
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
      style={{ background: '#05161a' }}
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

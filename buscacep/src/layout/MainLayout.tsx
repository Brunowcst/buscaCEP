import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css'
import SideBarMenu from '../components/SideBarMenu';

function MainLayout() {
  const {Header, Sider, Content, Footer} = Layout;

  return (
    <Layout>
      <Header className={styles.header}>
      <div>Imagem</div>
      <p>Busca CEP</p>
      </Header>
      <Layout>
        <SideBarMenu/>
        <Content className={styles.content}><Outlet/></Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default MainLayout;
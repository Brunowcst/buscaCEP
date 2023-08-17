import { Layout, Drawer, Button } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css'
import SideBarMenu from '../../components/SideBar/SideBarMenu';
import { useState } from 'react';
import { GithubOutlined, MenuOutlined } from '@ant-design/icons';
import { SideBarMenuDrawer } from '../../components/SideBar/SideBarMenu';

function MainLayout() {
  const [sidebarVisible] = useState(true);
  const {Header, Content, Footer} = Layout;
  const [open, setOpen] = useState(false)


  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
          <a href="https://github.com/Brunowcst" target='_blank' rel='noreferrer external'><img src="https://avatars.githubusercontent.com/u/92828890?s=400&u=9d1a4e44c7a9a72d6cad59f76822c7960f0c32d5&v=4" alt="Imagem git" /></a>
        <Button
          className={styles.menuButton}
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
        />
      </Header>
      <Layout>
        <SideBarMenu visible={sidebarVisible} />
        <Drawer 
        placement='left'
        width={200}
        bodyStyle={{backgroundColor: '#05161a'}} 
        open={open}
        onClose={() => 
          setOpen(false)
        }
        closable={false}>
          <SideBarMenuDrawer/>
        </Drawer>

        <Layout className={styles.contentLayout}>
          <Content className={styles.content}>
            <Outlet/>
          </Content>
        </Layout>

      </Layout>
      <Footer className={styles.footer}>
        <div>
          <a href="https://github.com/Brunowcst" target='_blank' rel='noreferrer external'>
            <GithubOutlined />
            Brunowcst
          </a>
        </div>
      </Footer>
    </Layout>
  );
}

export default MainLayout;
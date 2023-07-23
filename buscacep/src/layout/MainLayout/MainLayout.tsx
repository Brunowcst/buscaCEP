import { Layout, Drawer, Button } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css'
import SideBarMenu from '../../components/SideBar/SideBarMenu';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { SideBarMenuDrawer } from '../../components/SideBar/SideBarMenu';

function MainLayout() {
  const [sidebarVisible] = useState(true);
  const {Header, Content, Footer} = Layout;
  const [open, setOpen] = useState(false)


  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div>Imagem</div>
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
      <Footer className={styles.footer}>Footer</Footer>
    </Layout>
  );
}

export default MainLayout;
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css'
import SideBarMenu from '../../components/SideBar/SideBarMenu';

function MainLayout() {
  const sidebarVisible = true;
  const {Header, Content, Footer} = Layout;

  return (
    <Layout>
      <Header className={styles.header}>
        <div>Imagem</div>
        <p>Busca CEP</p>
      </Header>
      <Layout>
        <SideBarMenu visible={sidebarVisible}/>

        <Content className={styles.content}>
          <Outlet/>
        </Content>

      </Layout>
      <Footer className={styles.footer}>Footer</Footer>
    </Layout>
  );
}

export default MainLayout;
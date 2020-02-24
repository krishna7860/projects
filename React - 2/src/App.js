import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ContentContainer from './layout/Content/Content';
const { Header, Content, Footer, Sider } = Layout;
function App() {
  return (
    <div className='App'>
      <Layout>
        <Header>
          <Navbar></Navbar>
        </Header>
        <Layout>
          <Sider>
            <Sidebar></Sidebar>
          </Sider>
          <Content>
            <ContentContainer></ContentContainer>
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

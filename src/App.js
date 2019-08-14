import React from 'react';
import 'antd/dist/antd.css'
import './App.css'
import { Layout } from 'antd';
import DeputadosList from "./DeputadosList";

const { Header, Content, Footer } = Layout;


function App() {


  return (
      <div>
          <Layout>
              <Header style={{ position: 'fixed', zIndex: 1, width: '100%', color:'white', fontWeight:'bold', fontSize: '23px' }}>
                  <div className="logo" />
                  Deputados Brasil
              </Header>
              <Content style={{ padding: '0 50px', marginTop: 64 }}>
                  <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <DeputadosList/>
                  </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Deputados Brasil</Footer>
          </Layout>,
      </div>
  );
}

export default App;

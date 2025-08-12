
// import Login from "./components/Login";
// import LoginForm from "./components/LoginForm";
import React from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, BookOutlined, CalendarOutlined,ContactsOutlined } from '@ant-design/icons';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Sessions from './pages/Sessions';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
 
const App = () => {
  return (
    // <div style={{ padding: '50px' }}>
    //   <LoginForm />
    // </div>
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="light">
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BookOutlined />}>
              <Link to="/courses">Courses</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CalendarOutlined />}>
              <Link to="/sessions">Sessions</Link>
            </Menu.Item>
             <Menu.Item key="4" icon={<ContactsOutlined />}>
              <Link to="/contact">Contact</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0, fontSize: '20px', fontWeight: 'bold', paddingLeft: '16px' }}>
            Edu Dashboard
          </Header>
          <Content style={{ margin: '16px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/sessions" element={<Sessions />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
    
  );
};

export default App;

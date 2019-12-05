import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
//引入路由所需组件
import { Switch, Route, Redirect } from "dva/router"
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Admin from './Admin'
import Menus from './Menus'
import Login from './User/login'
import Register from './User/register'
import { Layout } from 'antd'
const { Header, Content } = Layout

function IndexPage() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavBar />
      </Header>
      <Content className={styles.content}>
        {/*一级路由*/}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/menus" component={Menus} />
          <Route path="/admin" component={Admin} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/*重定向*/}
          <Redirect to="/home"/>
        </Switch>
      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

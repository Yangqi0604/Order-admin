import React from 'react';
import { Router, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import Home from './pages/Home'
import Menus from './pages/Menus'
import Admin from './pages/Admin'
import About from './pages/About'
import Login from './pages/User/login'
import Register from './pages/User/register'
import SubRoutes from './utils/SubRoutes'
const Routeconfig = [
  {
    path: '/',
    component: IndexPage,
    routes: [
      {
        path: '/home',
        component: Home,
        redirect: true
      },
      {
        path: '/menus',
        component: Menus,
      },
      {
        path: '/admin',
        component: Admin,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      }

    ]
  }
]

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/"  component={IndexPage} /> */}
        {
          Routeconfig.map((route, i) => (
            // console.log(route)
            //调用封装组件
            <SubRoutes key={i} {...route} />
          ))
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;

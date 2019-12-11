import React from 'react';
import { Router, Switch } from 'dva/router';
// import IndexPage from './pages/IndexPage';
// import Home from './pages/Home'
// import Menus from './pages/Menus'
// import Admin from './pages/Admin'
// import About from './pages/About'
// import Login from './pages/User/login'
// import Register from './pages/User/register'
import SubRoutes from './utils/SubRoutes'
const Routeconfig = [
  {
    path: '/',
    // component:IndexPage,
    component: () => import('./pages/IndexPage'),
    model: [],
    routes: [
      {
        path: '/home',
        component: () => import('./pages/Home'),
        model: [import('./models/home')],
        redirect: true
      },
      {
        path: '/menus',
        component: () => import('./pages/Menus'),
        model: [],
      },
      {
        path: '/admin',
        component: () => import('./pages/Admin'),
        model: [],
      },
      {
        path: '/about',
        component: () => import('./pages/About'),
        model: [],
      },
      {
        path: '/login',
        component: () => import('./pages/User/login'),
        model: [],
      },
      {
        path: '/register',
        component: () => import('./pages/User/register'),
        model: [],
      }

    ]
  }
]

function RouterConfig({ history, app }) {
  // console.log('router.js')
  // console.log(app)
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/"  component={IndexPage} /> */}
        {
          Routeconfig.map((route, i) => (
            // console.log(route)
            //调用封装组件
            <SubRoutes key={i} {...route} app={app} />
          ))
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;

import React from 'react';
import { Router, Switch } from 'dva/router';
<<<<<<< HEAD
import IndexPage from './pages/IndexPage';
import SubRoutes from './utils/SubRoutes'

import Home from "./pages/Home"
import Menus from "./pages/Menus"
import Admin from "./pages/Admin"
import About from "./pages/About"
import Login from "./pages/User/login"
import Register from "././pages/User/register"


const RouteConfig = [
  {
    path: '/',
    component: IndexPage,
    routes: [
      {
        path: '/',
        component: Home,
        redirect:true
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
];

=======
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
>>>>>>> 411fdaa7a0fb54fd822b8203bca44fc7ed53806d

    ]
  }
]

function RouterConfig({ history, app }) {
  // console.log('router.js')
  // console.log(app)
  return (
    <Router history={history}>
      <Switch>
<<<<<<< HEAD
        {/*<Route path="/"  component={IndexPage} />*/}
        {
          RouteConfig.map((route, i) => (
            //写圆括号，调用封装组件
            <SubRoutes key={i} {...route} />
          )) 
=======
        {/* <Route path="/"  component={IndexPage} /> */}
        {
          Routeconfig.map((route, i) => (
            // console.log(route)
            //调用封装组件
            <SubRoutes key={i} {...route} app={app} />
          ))
>>>>>>> 411fdaa7a0fb54fd822b8203bca44fc7ed53806d
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;

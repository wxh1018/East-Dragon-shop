import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/login',
        exact: true,
        component: require('../login.js').default,
      },
      {
        path: '/models/getproduct',
        exact: true,
        component: require('../models/getproduct.js').default,
      },
      {
        path: '/models/home',
        exact: true,
        component: require('../models/home.js').default,
      },
      {
        path: '/about',
        exact: false,
        component: require('../about/_layout.js').default,
        routes: [
          {
            path: '/about',
            exact: true,
            component: require('../about/index.js').default,
          },
          {
            path: '/about/list',
            exact: true,
            component: require('../about/list.js').default,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/wxh/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
          },
        ],
      },
      {
        path: '/',
        exact: false,
        component: require('../index/_layout.js').default,
        routes: [
          {
            path: '/index/home',
            exact: true,
            component: require('../index/home.js').default,
          },
          {
            path: '/',
            exact: true,
            component: require('../index/index.js').default,
          },
          {
            path: '/index/transaction',
            exact: true,
            component: require('../index/transaction/index.js').default,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/wxh/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/wxh/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/wxh/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}

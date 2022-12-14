/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { IMenuPosition, IRoute } from '@common-stack/client-react';
import { lazy } from '@loadable/component'

import { getFilteredMenus, getFilteredRoutes } from '../utils';
import { CONNECTED_REACT_ROUTER_ROUTES_TYPES } from './constants';



const Dashboard = lazy(() => import('../common/components/Dashboard'));
const Counter = lazy(() => import('./components/Counter'));
const Hello = lazy(() => import('./components/Hello'));

export const counterPageStore: IRoute[] = [
    {
        exact: false,
        icon: 'export',
        component: Dashboard,
        position: IMenuPosition.MIDDLE,
        name: 'Connected React Router',
        key: CONNECTED_REACT_ROUTER_ROUTES_TYPES.HOME,
        path: CONNECTED_REACT_ROUTER_ROUTES_TYPES.HOME,
    },
    {
        exact: true,
        icon: 'export',
        name: 'Hello',
        component: Hello,
        position: IMenuPosition.MIDDLE,
        key: CONNECTED_REACT_ROUTER_ROUTES_TYPES.HELLO,
        path: CONNECTED_REACT_ROUTER_ROUTES_TYPES.HELLO,
    },
    {
        exact: true,
        icon: 'export',
        name: 'Counter',
        component: Counter,
        position: IMenuPosition.MIDDLE,
        key: CONNECTED_REACT_ROUTER_ROUTES_TYPES.COUNTER,
        path: CONNECTED_REACT_ROUTER_ROUTES_TYPES.COUNTER,
    },
];

const selectedRoutesAndMenus = [
    CONNECTED_REACT_ROUTER_ROUTES_TYPES.HOME,
    CONNECTED_REACT_ROUTER_ROUTES_TYPES.HELLO,
    CONNECTED_REACT_ROUTER_ROUTES_TYPES.COUNTER,
];

// get routes
const filteredRoutes = getFilteredRoutes(counterPageStore, selectedRoutesAndMenus);

// get menus
const filteredMenus = getFilteredMenus(counterPageStore, selectedRoutesAndMenus);

export { filteredRoutes, filteredMenus };

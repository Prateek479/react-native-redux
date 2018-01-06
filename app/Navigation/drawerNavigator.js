/**
 * @flow
 */

import React from 'react';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';
import SimpleTabs from './tabNavigation';
import Home from 'Container/Home';
import Profile from 'Container/Profile';

const Drawer = DrawerNavigator(
  {
    Home: {
      path: '/',
      screen: Home,
    },
    Tabs:{
      path: '/tabs',
      screen: SimpleTabs
    },
    Profile: {
      path: '/profile',
      screen: Profile,
    },
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export default Drawer; 
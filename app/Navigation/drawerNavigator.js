/**
 * @flow
 */

import React, { Component } from 'react';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';
import SimpleTabs from './tabNavigation';
import Home from 'Container/Home';
import BasicComponent from 'Container/BasicComponent';
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
    Component:{
      path:'/component',
      screen:BasicComponent,
    }
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
import { StackNavigator } from 'react-navigation';
import Drawer from './drawerNavigator';
import Login from 'Container/Login';

export const AppNavigator = StackNavigator({
  Drawer: {
    screen: Drawer,
    navigationOptions: { header: null },
  },  
  Login:{
    screen: Login,
    navigationOptions: { header: null },
  }
});

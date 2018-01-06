import { StackNavigator } from 'react-navigation';
import Drawer from './drawerNavigator';
import Profile from 'Container/Profile';

export const AppNavigator = StackNavigator({
  Drawer: {
    screen: Drawer,
    navigationOptions: { header: null },
  },  
  Profile:{
    screen: Profile,
    navigationOptions: { header: null },
  }
});

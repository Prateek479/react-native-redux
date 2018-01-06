import React from 'react';
import { TabNavigator} from 'react-navigation';

import Tab1 from '../Container/Tab1';
import Tab2 from '../Container/Tab2';


const SimpleTabs = TabNavigator({
    TabA: {
        screen: Tab1,
    },
    TabB: {
        screen: Tab2,
    },
    }, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    initialRouteName: 'TabA',
    tabBarOptions: {
        activeTintColor: 'black',
    },
});
  

export default SimpleTabs;
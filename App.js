import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LoginScreen from './src/Screens/LoginScreen'; 
import ResolveScreen from './src/Screens/ResolveScreen';
import SignInScreen from './src/Screens/SignInScreen';
import {Provider} from './src/context/BlogContext';
import AccountScreen from './src/Screens/AccountScreen';
import {FontAwesome} from '@expo/vector-icons';
import BillingScreen from './src/Screens/BillingScreen';

const BlogFlow=createStackNavigator({
  Sign:SignInScreen,
  Billing:BillingScreen
})

BlogFlow.navigationOptions={
  title:"ListFlow",
  tabBarIcon:<FontAwesome name="th-list" size={20}/>
}

const navigator= createSwitchNavigator({
  Resolve:ResolveScreen,
  Login:LoginScreen,
   Account:createBottomTabNavigator({
    BlogFlow,
    Account:AccountScreen,
  }),
  
})


const App=createAppContainer(navigator);

export default()=>{
  return (
    <Provider>
    <App />
    </Provider>
  )
};

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
   StyleSheet,
   Image
} from 'react-native';
import {
   createBottomTabNavigator,
} from 'react-navigation';

import { Essence } from '../componet/Essence';
import { News } from '../componet/News';
import { Friend } from '../componet/Friend';
import { Me } from '../componet/Me';


const tabOptions = (normalIcon, selectedIcon, title)=> {
   const tabBarIcon = ({focused})=> {
      return (
          <Image
              source={{uri: !focused ? normalIcon : selectedIcon}}
              style={styles.item}
          />
      );
   };

   const tabBarLabel = title;

   return {tabBarIcon, tabBarLabel};
};

export default Tab = createBottomTabNavigator(
    {
       Essence: {
          screen: Essence,
          navigationOptions: ()=>tabOptions('tabbar_essence', 'tabbar_essence_click', '精华')
       },

       News: {
          screen: News,
          navigationOptions: ()=>tabOptions('tabbar_new', 'tabbar_new_click', '最新')
       },

       Friend: {
          screen: Friend,
          navigationOptions: ()=>tabOptions('tabbar_friend', 'tabbar_friend_click', '社区')
       },

       Me: {
          screen: Me,
          navigationOptions: ()=>tabOptions('tabbar_me', 'tabbar_me_click', '我')
       }
    },

    {
       swipeEnabled: false,
       animationEnabled: false,
       lazy: true,
       tabBarOptions: {
          activeTintColor: '#ff2e57',
          inactiveTintColor: '#666',
       },
    }
);



const styles = StyleSheet.create({
   item: {
      width: 27,
      height: 27,
   },
});
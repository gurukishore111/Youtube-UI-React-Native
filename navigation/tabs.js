import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import HomeScreen from './../screen/HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 
import  TrendingScreen  from './../screen/TrendingScreen';
import  SubscriptionScreen  from './../screen/Subscriptions';
import  LibraryScreen  from './../screen/LibraryScreen';

const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="red"
    inactiveColor="gray"
    barStyle={{ backgroundColor: 'white' }}
    >
     <Tab.Screen
       name="Home"
       component={HomeScreen}
       options={{
         tabBarIcon: ({ color, size }) => (
           <MaterialCommunityIcons name="home" color={color} size={24} />
         ),           
       }}
     />
     <Tab.Screen
       name="Trending"
       component={TrendingScreen}
       options={() => ({
         tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="explore" size={24} color={color} />
         ),
       })}
      />
          <Tab.Screen
        name="Subscription"
        component={SubscriptionScreen}
        options={() => ({
        tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="subscriptions" size={24} color={color} />
        ),
     })}
          />
           <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={() => ({
        tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-library" size={24} color={color} />
        ),
     })}
   />
   </Tab.Navigator>
  );
}

export default MyTabs;
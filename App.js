import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; 
// import {Home, Restaurent, OrderDelivery} from './Screen'
import Tabs from './navigation/tabs';
import Restaurent from './Screen/Restaurent';
import OrderDelivery from './Screen/OrderDelivery';

const Stack = createStackNavigator();

  
 const App = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={"Home"}
       >
         <Stack.Screen name="Home" component={Tabs} />
         <Stack.Screen name="Restaurent" component={Restaurent} />
         <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 export default App;
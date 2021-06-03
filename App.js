import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
// import {Home, Restaurent, OrderDelivery} from './Screen'
import Tabs from './navigation/tabs';
import OrderDelivery from './Screen/OrderDelivery';
import Restaurant from './Screen/Restaurant';

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
         <Stack.Screen name="Restaurant" component={Restaurant} />
         <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
       </Stack.Navigator>
     </NavigationContainer> 
   );
 };
 
 export default App;
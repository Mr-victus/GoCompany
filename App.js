/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {View, Button,StatusBar, LogBox} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './src/components/DrawerContent';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Root from './src/screens/Root';
import SignIn from './src/screens/SignInScreen';
import SignUp from './src/screens/SignUpScreen';
import Home from './src/screens/Home';
import GoSend from './src/screens/GoSend/index';
import GoRide from './src/screens/GoRide/index';
import GoPay from './src/screens/GoPay/index';
import GoGrocery from './src/screens/GoGrocery/index';
import GoPharma from './src/screens/GoPharma/index';
import GoFood from './src/screens/GoFood/index';
import GoFruits from './src/screens/GoFruits/index';
import GoVegitable from './src/screens/GoVegitable/index';
import GoService from './src/screens/GoService/index';
import GoMart from './src/screens/GoMart/index';
import SearchPlace from './src/screens/GoRide/SearchPlace';

import FoodMenu from './src/screens/GoFood/screens/menu';
import FoodCart from './src/screens/GoFood/screens/Cart';
import FoodAddress from './src/screens/GoFood/screens/Address';
import ResturantList from './src/screens/GoFood/screens/ShopList';

import FruitsMenu from './src/screens/GoFruits/screens/menu';
import FruitsCart from './src/screens/GoFruits/screens/Cart';
import FruitsAddress from './src/screens/GoFruits/screens/Address';
import FruitsShopList from './src/screens/GoFruits/screens/ShopList';

import VegitableMenu from './src/screens/GoVegitable/screens/menu';
import VegitableCart from './src/screens/GoVegitable/screens/Cart';
import VegitableAddress from './src/screens/GoVegitable/screens/Address';
import VegitableShopList from './src/screens/GoVegitable/screens/ShopList';

import GroceryMenu from './src/screens/GoGrocery/screens/menu';
import GroceryCart from './src/screens/GoGrocery/screens/Cart';
import GroceryAddress from './src/screens/GoGrocery/screens/Address';
import GroceryShopList from './src/screens/GoGrocery/screens/ShopList';
import GroceryShopsList from './src/screens/GoGrocery/screens/ShopsList';

const Drawer = createDrawerNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 7,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7952B3',
    accent: '#3F3D56',
  },
};

const App = ({navigation}) => {
  LogBox.ignoreLogs(['Warning']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Root"  drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Root" component={Root.bind(navigation)} />
          <Drawer.Screen name="SignInScreen" component={SignIn.bind(navigation)} />
          <Drawer.Screen name="SignUpScreen" component={SignUp.bind(navigation)} />
          <Drawer.Screen name="Home" component={Home.bind(navigation)} />
          <Drawer.Screen name="GoSend" component={GoSend.bind(navigation)} />
          <Drawer.Screen name="GoRide" component={GoRide.bind(navigation)} />
          <Drawer.Screen name="SearchPlace" component={SearchPlace.bind(navigation)} />
          <Drawer.Screen name="GoService" component={GoService.bind(navigation)} />
          <Drawer.Screen name="GoPharma" component={GoPharma.bind(navigation)} />
          <Drawer.Screen name="GoMart" component={GoMart.bind(navigation)} />
          <Drawer.Screen name="GoFood" component={GoFood.bind(navigation)} />
          <Drawer.Screen name="GoFruits" component={GoFruits.bind(navigation)} />
          <Drawer.Screen name="GoVegitable" component={GoVegitable.bind(navigation)} />
          <Drawer.Screen name="GoPay" component={GoPay.bind(navigation)} />
          <Drawer.Screen name="GoGrocery" component={GoGrocery.bind(navigation)} />

          <Drawer.Screen name="FoodMenu" component={FoodMenu.bind(navigation)} />
          <Drawer.Screen name="FoodCart" component={FoodCart.bind(navigation)} />
          <Drawer.Screen name="FoodAddress" component={FoodAddress.bind(navigation)} />
          <Drawer.Screen name="ResturantList" component={ResturantList.bind(navigation)} />

          <Drawer.Screen name="FruitsMenu" component={FruitsMenu.bind(navigation)} />
          <Drawer.Screen name="FruitsCart" component={FruitsCart.bind(navigation)} />
          <Drawer.Screen name="FruitsAddress" component={FruitsAddress.bind(navigation)} />
          <Drawer.Screen name="FruitsShopList" component={FruitsShopList.bind(navigation)} />

          <Drawer.Screen name="VegitableMenu" component={VegitableMenu.bind(navigation)} />
          <Drawer.Screen name="VegitableCart" component={VegitableCart.bind(navigation)} />
          <Drawer.Screen name="VegitableAddress" component={VegitableAddress.bind(navigation)} />
          <Drawer.Screen name="VegitableShopList" component={VegitableShopList.bind(navigation)} />

          <Drawer.Screen name="GroceryMenu" component={GroceryMenu.bind(navigation)} />
          <Drawer.Screen name="GroceryCart" component={GroceryCart.bind(navigation)} />
          <Drawer.Screen name="GroceryAddress" component={GroceryAddress.bind(navigation)} />
          <Drawer.Screen name="GroceryShopList" component={GroceryShopsList.bind(navigation)} />
      </Drawer.Navigator>
    </NavigationContainer>
  </PaperProvider>
  );
};

export default App;

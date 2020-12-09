import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './src/pages/Home';
import Search from './src/pages/Search';
import VideoPlayer from './src/pages/VideoPlayer';
import Explore from './src/pages/Explore';
import Suscribe from './src/pages/Suscribe';
//useSelector ü reduce deki değeri kullanmak için.
import {Provider,useSelector} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import {reducer} from './src/reducers/reducer';
import {themeReducer} from './src/reducers/themeReducer';

const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:"white"
  }
}

const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabIcon:"red"
  }
}

//birden fazla reducer kullanmak için 
//üste combineReducers eklemeyi unutma
const rootReducer=combineReducers({
  cardData:reducer, //[] dizi geliyor..
  myDarkMode:themeReducer //false geliyor değer.
})

const store = createStore(rootReducer);
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () =>{
  const {colors}=useTheme()
  return(
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Explore') {
          iconName = 'explore';
        } else if(route.name === 'Suscribe'){
          iconName='subscriptions';
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabIcon,//'red',
      inactiveTintColor: 'gray',
    }}
    >
      <Tabs.Screen name="Home" component={Home}/>
      <Tabs.Screen name="Explore" component={Explore}/>
      <Tabs.Screen name="Suscribe" component={Suscribe}/>
    </Tabs.Navigator>
  )
}

export default App = ()=>{
  return(
    <Provider store={store}>
        <Navigation/>
    </Provider>
  )
}

export function Navigation() {

  let currentTheme = useSelector(state=>{
    return state.myDarkMode
  })

  return (
    
      <NavigationContainer theme={currentTheme?customDarkTheme:customDefaultTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rooHome" component={RootHome}/>
          <Stack.Screen name="search" component={Search}/>
          <Stack.Screen name="videoplayer" component={VideoPlayer}/>
        </Stack.Navigator>
      </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

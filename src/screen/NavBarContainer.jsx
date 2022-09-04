// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// // import FilmPopu from './src/screen/FilmPopu';
// // import DetailFilm from './src/screen/DetailFilm';
// import { NavigationContainer, StackActions } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// //import { Icon } from 'react-native-vector-icons/Icon';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FilmPopu from './FilmPopu';
// import FavFilm from './FavFilm';
// import DetailFilm from './DetailFilm';


// const Tab = createBottomTabNavigator()




// export default function NavBarContainer(){

//     <NavigationContainer>


// <Tab.Navigator
//         initialRouteName= 'FilmPopu'
//         screenOptions={({route}) => ({
//           tabBarIcon: ({focused, color, size}) => {
//             let iconName;
            
//             if (route.name === 'FilmPopu') {
//                iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'FavFilm'){
//               iconName = focused ? 'favorite' : 'favorite-outline';
//             }

//             return <Ionicons name={iconName} size={size} color={color} />

//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//         //   tabBarOptions={{
//         //   activeTintColor: 'tomato',
//         //   inactiveTintColor: 'grey',
//         //   labelStyle: { paddingBottom: 10, fontSize: 10 },
//         //   style: { padding: 10, height: 70}
//         //   }} 
//           >

//         <Tab.Screen name='FilmPopu' component={FilmPopu} />
//         <Tab.Screen name='FavFilm' component={FavFilm} />

//         </Tab.Navigator>

//     </NavigationContainer>



// }

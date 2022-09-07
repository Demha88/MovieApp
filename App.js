import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DetailFilm from './src/screen/DetailFilm';
import FilmPopu from './src/screen/FilmPopu';
import BoxFilm from './src/screen/BoxFilm';
import FavFilm from './src/screen/FavFilm';

const Stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator();

// function StackFilmPopu(){
//   return(
//     <Stack.Navigator
//     initialRouteName="FilmPopu"
//     screenOptions={{
//       tabBarActiveTintColor: "white",
//       tabBarLabelStyle: { fontSize: 12 },
//       tabBarStyle: { backgroundColor: "black" },
//     }}
//      >
//       <Stack.Screen 
//           name='FilmPopu' component={FilmPopu} 
//           options = {{
//             title: "Films populaires",
//             headerStyle: {
//               backgroundColor: "steelblue"
//             }
//           }} 
//           />
//        <Stack.Screen name= 'DetailFilm' component={DetailFilm} options = {{
//       title: "Détails du film",
//       headerStyle: {
//         backgroundColor: "steelblue"
//       }
//     }} />
//     </Stack.Navigator>
//   )
// }

// function StackFavFilm(){
//     return(
//       <Stack.Navigator
//       initialRouteName="FavFilm" 
//       screenOptions={{
//         tabBarActiveTintColor: "white",
//         tabBarLabelStyle: { fontSize: 12 },
//         tabBarStyle: { backgroundColor: "black" },
//       }}
//       >
//         <Stack.Screen 
//             name='FavFilm' 
//             component={FavFilm} 
//             options = {{
//               title: "Favoris",
//               headerStyle: {
//                 backgroundColor: "steelblue"
//               }
//             }} 
//             />
//          <Stack.Screen name= 'DetailFilm' component={DetailFilm} options = {{
//         title: "Détails du film",
//         headerStyle: {
//           backgroundColor: "steelblue"
//         }
//       }} />
//       </Stack.Navigator>
//     )
//   }


// function StackHomeScreen(){
//   return(
//     <StackHome.Navigator>
//       <StackHome.Screen 
//           name='FilmPopu' component={FilmPopu} options = {{
//             title: "Films populaires",
//             headerStyle: {
//               backgroundColor: "steelblue"
//             }
//           }} />
//        <StackHome.Screen name= 'DetailFilm' component={DetailFilm} options = {{
//       title: "Détails du film",
//       headerStyle: {
//         backgroundColor: "steelblue"
//       }
//     }} />
//     </StackHome.Navigator>
//   )
// }

// const StackFav = createNativeStackNavigator()

// function StackFavScreen(){
//       return(
// <StackFav.Navigator>
//           <StackFav.Screen 
//               name='FavFilm' component={FavFilm} options = {{
//                 title: "Films favoris",
//                 headerStyle: {
//                   backgroundColor: "steelblue"
//                 }
//               }} />

//            <StackFav.Screen name= 'DetailFilm' component={DetailFilm} options = {{
//           title: "Détails du film",
//           headerStyle: {
//             backgroundColor: "steelblue"
//           }
//         }} />
//         </StackFav.Navigator>
//       );
// }

// const Tab = createMaterialTopTabNavigator()

export default function App() {
  return (

    
    // <NavigationContainer>
    //     <Tab.Navigator
    //   initialRouteName="Feed"
    //   options={{
    //             title: "The Movie DB",
    //             headerStyle: {
    //             backgroundColor:"steelblue"
    //             }
    //           }}
    //   screenOptions={{
    //     tabBarActiveTintColor: "white",
    //     tabBarLabelStyle: { fontSize: 12 },
    //     tabBarStyle: { backgroundColor: "black" },
    //   }}
    //           >
    //   <Tab.Screen
    //     name="StackFilmPopu"
    //     component={StackFilmPopu}
    //     options={{ tabBarLabel: "Films populaires" }}
    //   />
    //   <Tab.Screen
    //     name="StackFavFilm"
    //     component={StackFavFilm}
    //     options={{ tabBarLabel: "Favoris" }}
    //   />
    // </Tab.Navigator>
    // </NavigationContainer>
    
    
    
    
    //<BoxFilm />


    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name='BoxFilm' component={BoxFilm} options={{
            title: "The Movie DB",
            headerStyle: {
            backgroundColor:"steelblue"
            }
          }}></Stack.Screen>
          <Stack.Screen name='DetailFilm' component={DetailFilm} options={{
            title: "Détails du film",
            headerStyle: {
              backgroundColor: "steelblue"
            }
          }}></Stack.Screen>
          {/* <Stack.Screen name='FavFilm' component={FavFilm} options={{
            title: "Fav film",
            headerStyle: {
              backgroundColor: "steelblue"
            }
          }}></Stack.Screen>
          <Stack.Screen name='FilmPopu' component={FilmPopu} options={{
            title: "Popu film",
            headerStyle: {
              backgroundColor: "steelblue"
            }
          }}></Stack.Screen> */}

       </Stack.Navigator> 
     </NavigationContainer>  


    //<FilmPopu></FilmPopu>
    // <NavigationContainer>
    //    <Stack.Navigator>
    //       <Stack.Screen name='FlmPopu' component={FilmPopu} options={{
    //         title: "Films populaires",
    //         headerStyle: {
    //           backgroundColor:"steelblue"
    //         }
    //       }}></Stack.Screen>
    //       <Stack.Screen name='DetailFilm' component={DetailFilm} options={{
    //         title: "Détails du film",
    //         headerStyle: {
    //           backgroundColor: "steelblue"
    //         }
    //       }}></Stack.Screen>
    //        <Stack.Screen name='FavFilm' component={FavFilm} options={{
    //         title: "Films favoris",
    //         headerStyle: {
    //           backgroundColor: "steelblue"
    //         }
    //       }}></Stack.Screen>
    //    </Stack.Navigator> 
    //  </NavigationContainer>  

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom:20
    
  },
});

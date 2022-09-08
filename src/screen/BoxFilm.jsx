 import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FilmPopu from "./FilmPopu";
import FavFilm from "./FavFilm";
import DetailFilm from "./DetailFilm";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator()


// function StackFilmPopu(){
//       return(
//         <Stack.Navigator
//         initialRouteName="FilmPopu" >
//           <Stack.Screen 
//               name='FilmPopu' component={FilmPopu} options = {{
//                 title: "Films populaires",
//                 headerStyle: {
//                   backgroundColor: "steelblue"
//                 }
//               }} />
//            <Stack.Screen name= 'DetailFilm' component={DetailFilm} options = {{
//           title: "Détails du film",
//           headerStyle: {
//             backgroundColor: "steelblue"
//           }
//         }} />
//         </Stack.Navigator>
//       )
//     }

//     function StackFavFilm(){
//         return(
//           <Stack.Navigator
//           initialRouteName="FavFilm" >
//             <Stack.Screen 
//                 name='FavFilm' component={FavFilm} options = {{
//                   title: "Favoris",
//                   headerStyle: {
//                     backgroundColor: "steelblue"
//                   }
//                 }} />
//              <Stack.Screen name= 'DetailFilm' component={DetailFilm} options = {{
//             title: "Détails du film",
//             headerStyle: {
//               backgroundColor: "steelblue"
//             }
//           }} />
//           </Stack.Navigator>
//         )
//       }


export default function BoxFilm() {
  return (
<Tab.Navigator 
      //initialRouteName="BoxFilm"
      
      options={{
                title: "The Movie DB",
                headerStyle: {
                backgroundColor:"steelblue"
                }
              }}
              screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: "black" },
              }}
              >
      <Tab.Screen
        name="FilmPopu"
        component={FilmPopu}
        options={{ tabBarLabel: "Films populaires" }}
      />
      <Tab.Screen
        name="FavFilm"
        component={FavFilm}
        options={{ tabBarLabel: "Favoris" }}
      />
    </Tab.Navigator>

    // <NavigationContainer>
    //     <Tab.Navigator
    //   initialRouteName="BoxFilm"
    //   options={{
    //             title: "The Movie DB",
    //             headerStyle: {
    //             backgroundColor:"steelblue"
    //             }
    //           }}>
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
    
  );
}
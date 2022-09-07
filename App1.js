import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FilmPopu from './src/screen/FilmPopu';
import DetailFilm from './src/screen/DetailFilm';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavFilm from './src/screen/FavFilm';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { Icon } from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';



const StackHome = createNativeStackNavigator()
// const Tab = createBottomTabNavigator()

// const homeName="FilmPopu"
// const favName="FavFilm"

function StackHomeScreen(){
      return(
        <StackHome.Navigator>
          <StackHome.Screen 
              name='FilmPopu' component={FilmPopu} options = {{
                title: "Films populaires",
                headerStyle: {
                  backgroundColor: "steelblue"
                }
              }} />
           <StackHome.Screen name= 'DetailFilm' component={DetailFilm} options = {{
          title: "Détails du film",
          headerStyle: {
            backgroundColor: "steelblue"
          }
        }} />
        </StackHome.Navigator>
      )
}

const StackFav = createNativeStackNavigator()

function StackFavScreen(){
      return(
<StackFav.Navigator>
          <StackFav.Screen 
              name='FavFilm' component={FavFilm} options = {{
                title: "Films favoris",
                headerStyle: {
                  backgroundColor: "steelblue"
                }
              }} />

           <StackFav.Screen name= 'DetailFilm' component={DetailFilm} options = {{
          title: "Détails du film",
          headerStyle: {
            backgroundColor: "steelblue"
          }
        }} />
        </StackFav.Navigator>
      );
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name='FilmPopu' component={FilmPopu} options = {{
      //     title: "Films populaires",
      //     headerStyle: {
      //       backgroundColor: "steelblue"
      //     }
      //   }}></Stack.Screen>
      //     <Stack.Screen name= 'DetailFilm' component={DetailFilm} options = {{
      //     title: "Détails du film",
      //     headerStyle: {
      //       backgroundColor: "steelblue"
      //     }
      //   }}></Stack.Screen>
      //   </Stack.Navigator>
        
       
        /* <Tab.Navigator
        initialRouteName= {homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName
            let routeName = route.name
            
            if (routeName === homeName) {
               iconName = focused ? 'home' : 'home-outline '
            } else if (routeName === favName){
              iconName = focused ? 'list' : 'list-outline '
            }

            return <Ionicons name={iconName} size={size} color={color} />

          },
        })}
          tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
          }} >

        <Tab.Screen name='FilmPopu' component={FilmPopu} />
        <Tab.Screen name='FavFilm' component={FavFilm} />


        </Tab.Navigator> */

      // <NavBarContainer />
      // </NavigationContainer>
     

    // <View>
    //   <FilmPopu></FilmPopu>
    // </View>
    <NavigationContainer>
    <Tab.Navigator 
      //initialRouteName='FilmPopu'
       screenOptions={{ headerShown: false }}>
        
        {/* screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === 'FilmPopu') {
            iconName = focused ? 'home' : 'home-outline';

          } else if (rn === 'FavFilm') {
            iconName = focused ? 'list' : 'list-outline';

          } 
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70}
      }}> */}
      <Tab.Screen name="Home" component={StackHomeScreen} />
      <Tab.Screen name="Favoris" component={StackFavScreen} />
    </Tab.Navigator>
  </NavigationContainer>


  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

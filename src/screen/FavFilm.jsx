//import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react"
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FilmPopu from "./FilmPopu";
import DetailFilm from "./DetailFilm";
import { useIsFocused } from "@react-navigation/native";
import { loadDatabase, insertMovie, deleteMovie, getMovies } from "../db/db";



export default function FavFilm({route, navigation}) {

    // const { item } = route?.params || {}
    // console.log("favoris is", item)

    //const [data, setData] = useState([])

     const {listeFavoris} = route?.params || {}
     console.log("favoris=", listeFavoris)
     const [loading, setLoading] = useState(false)
     
     const [movies, setMovies] = useState([])
     const isFocused = useIsFocused()

     useEffect(() => {
        if (isFocused){
        getMovies()
          .then((movies) => setMovies(movies.rows._array))
          .catch((err) => console.log(err));
        // Appel à la DB pour récupérer les movies
        }
     }, [isFocused])



     
     

     const renderFooter = () => {
      return (
          loading ?
              <View style={styles.loader}>
                  <ActivityIndicator size="large" />
              </View> : null
      )
  }
  const handleLoadMore = () => {
    console.log("handleLoadMore")
    // if (!loading) {
    //     setPage(page + 1)
    //     setLoading(true)
    // }
}

const renderItem = ({ item }) => {
  return (
      <View style={styles.itemRow}>
          <TouchableHighlight onPress={() => navigation.navigate("DetailFilm", { item })}>
              <Image
                  source={{ uri: "https://image.tmdb.org/t/p/w300/" + item.image }}
                  style={styles.itemImage}
              />
          </TouchableHighlight>
          <View style={styles.itemInfo}>
              <Text style={styles.itemText}>{item.title} </Text>
              <Text style={styles.itemText2}>Rating: {item.rating}</Text>
              {/* <TouchableOpacity
               // onPress={() => console.log('Favoris Removed!')}
               onPress={() => removeFavoris(item)}
                activeOpacity={0.7}
                style={{
                  paddingLeft: 10,
                  marginTop: 15,
                  borderRadius: 20,
                  height: 40,
                  width: 40,
                }}>
                <MaterialIcons
                  //name={ifExists(item) ? "favorite" : "favorite-outline"}    
                  color="red"
                  size={27}
                  name="favorite"
                />
              </TouchableOpacity> */}
          </View>


      </View>
  )
}

return(

    <View style={styles.container}>
        {/* <Text>Favoris Screen!</Text> */}

        <FlatList
                style={styles.container}
                //data={listeFavoris}
                data={movies}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                ListFooterComponent={renderFooter}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}

            />
    </View>
)


}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // marginTop: 0,
      paddingTop: 5,
      backgroundColor: "darkslategrey",



  },
  itemRow: {
      flexDirection: "row",
      borderBottomColor: '#ccc',
      marginBottom: 10,
      alignItems: "center",

      //borderBottomWidth: 10,
      //borderRadius: 20
  },
  itemImage: {
      // width: '100%',
      flex: 1,
      height: 250,
      width: 200,
      resizeMode: 'cover',
      borderRadius: 20,
      marginLeft: 5
  },
  itemInfo: {
      flex: 1,
      marginBottom:60
  },
  itemText: {
      // flexDirection:"row",
      fontSize: 13,
      fontWeight: "bold",
      textTransform: "uppercase",

      //textAlign: "center",
      color: "white",
      paddingLeft: 10,
      marginTop: 15

  },
  itemText2: {
      fontSize: 13,
      fontWeight: "normal",
      textTransform: "uppercase",
      //textAlign:"center",
      color: "white",
      paddingLeft: 10,
      marginTop: 15
  },
  loader: {
      marginTop: 10,
      alignItems: "center"
  },
  text: {
      fontSize: 24,
      fontWeight: 'bold',
      fontColor: '#010101'
    }
});
  
import { Text, View, Image, StyleSheet, ImageBackground, Button, Switch} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import MyCheckbox from "./MyCheckbox";
import Ionicons from '@expo/vector-icons/Ionicons';
import { loadDatabase, insertMovie, deleteMovie, getMovies, getById } from "../db/db";
//import { Button } from "react-native-paper";


export default function DetailFilm({ route }) {

    const { item } = route.params
    console.log("data is", item.id)
    let num = item.id
    const [data, setData] = useState(null)
    

    
    const [isEnabled, setIsEnabled] = useState(false);
    //const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const toggleSwitch = () => {
        if (!isEnabled) {
            // <Text>AdFavoris</Text>  
          insertMovie(
            item.id,
            item.title,
            item.vote_average,
            item.poster_path
          )
            .then(() => {
              console.log("Movie ajouté");
              //showAddToast();
            })
            .catch((err) => console.log(err));
        } else {
            // <Text>DelFavoris</Text> 
          deleteMovie(item.id).then(() => {
            console.log("Movie supprimé");
            //showRemoveToast();
          });

        }
        setIsEnabled((previousState) => !previousState);
      };

      const isInFavorite = () => {
        getById(item.id).then((data) => {
          if (data.rows._array.length > 0) {
            setIsEnabled(true);
          } else {
            setIsEnabled(false);
          }
        });
      };

   
    useEffect(() => {
      //  getMovies()
        isInFavorite()
   }, [])

    useEffect(() => {
        
        const url = "https://api.themoviedb.org/3/movie/_movieId_?api_key=42390a5fddcf8e4b872d65878af49dcb&language=fr"

        axios.get(url.replace("_movieId_", num))
            .then(({ data }) => {
                setData(data)
            })
            .catch((err) => console.log(err))

    }, [num])

    //database
    useEffect(() =>{ 
     loadDatabase()
        .then(
            () => console.log("Database loaded")
        )
        .catch((err) => console.log(err))   
    }, [])

    const getMoviesFromDb = () => {
        getMovies()
            .then(
                (data) => console.log(data.rows._array)
            )
            .catch(
                (err) => console.log(err)
            )
    }

    const addMovie = () => {
        insertMovie(item.id, item.original_title , item.vote_average, item.poster_path)
          .then(
            () => console.log("Film ajouté")
          )
          .catch((err) => console.log(err))
    } 
    
    const inMovie = () => {
        getById(item.id).then((data) => {
          if (data.rows._array.length > 0) {
            setIsEnabled(true);
          } else {
            setIsEnabled(false);
          }
        });
      };
    const delMovie = () => {
        deleteMovie(item.id)
            .then(
                ()=> console.log("Film supprimé")
            )
            .catch((err) => console.log(err))
    }
    //fin db

    


    return (

        
        <View>

            {data ? (
                <View style={styles.itemView}>
                    <Image
                        source={{ uri: "https://image.tmdb.org/t/p/w300/" + data.poster_path }}
                        resizeMode="cover" style={{ width: '100%', height: 250 }}
                    />
                    <Button title="Afficher Films" style={styles.checkButton} onPress={getMoviesFromDb}></Button>
                    {/* <Button title="Ajouter Films" style={styles.checkButton2} onPress={addMovie}></Button> */}

                    <Text style={styles.itemTitle}>{data.original_title}</Text>
                    <Text style={styles.itemGenre} >{data.genres.map(g => g.name).join(", ")}</Text>
                    
                        {/* {
                            (data.genres[1] && data.genres[2])  ? (
                                <Text style={styles.itemGenre}>{item.release_date}   {data.genres[0].name}, {data.genres[1].name}, {data.genres[2].name}</Text>
                            ) : <Text style={styles.itemGenre}>{item.release_date}   {data.genres[0].name}, {data.genres[1].name}</Text>
                        } */}
                        <Text style={styles.itemText} >{data.overview}</Text>
                    {/* <Checkbox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
                    <Text>Pocket</Text>
                    <Text>Is checkbox selected : {isSelected ? "OK":"POK"}</Text>  */}
                    {/* <MyCheckbox style={styles.checkBoxText}
                    checked={checked}
                    onChange={onChange}
                     value={checked ? insertMovie(item.id, item.poster_path,item.vote_average, item.original_title) : deleteMovie(item.id)}
                    // value={checked ? {addMovie} : deleteMovie(item.id)}
                    /> */}
                    
                    {/* <Text style={styles.checkBoxText} value ={checked ? console.log("item id=", item.id) : console.log("POK")}>Poket</Text> */}
                    {/* <Text style={styles.checkBoxText} value ={checked ? insertMovie(item.id, item.poster_path,item.vote_average, item.original_title) : deleteMovie(item.id)}>Poket</Text> */}
                    {/* <Text style={styles.itemText3} >Add Favoris</Text> */}
                    <Switch 
                        label="Favoris"
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        labelStyle={{ color: "black" }}
                        //onValueChange={inMovie}
                        onValueChange={toggleSwitch}
                        //value={isEnabled}
                        value={isEnabled}
                    />

                </View>
            ) : (<Text>Erreur</Text>)
            }
            {/* { data ? (
                    <View style={styles.itemView}>
                    
                    <ImageBackground
                    source={{uri: "https://image.tmdb.org/t/p/w300/" + data.poster_path}}
                    resizeMode="cover" style={{ width:'100%', height: '100%', opacity:0.7, resizeMode:"cover" }}> 
                    <Text style={styles.itemTitle}>{data.original_title}</Text>
                    {
                    //  (data.genres[1] && data.genres[2]) ? (
                    // <Text style={styles.itemGenre}>{item.release_date}   {data.genres[0].name}, {data.genres[1].name}, {data.genres[2].name}</Text>
                    //     ) :  <Text style={styles.itemGenre}>({data.genres[0].name})</Text>
                        data.genres && (
                            <>
                            <Text style={styles.itemGenre}>{item.release_date}   {data.genres[0].name}, {data.genres[1].name}, {data.genres[2].name}</Text>
                            </>

                        )

                    } 
                    <Text style={styles.itemText}>{data.overview}</Text>
                    
                    
                
                </ImageBackground>
                
                    </View>
                    ) : (<Text>Erreur</Text>)
                } */}

        </View>



    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    itemView: {
        backgroundColor:"lavender",
        paddingBottom: '100%'
        

    },
    // image: {
    //     flex: 1,
    //     justifyContent: "center",
    //     resizeMode: "cover",
    //     height: 600,
    //     weight: 300,
    //     opacity: 0.8
    // },
    itemText: {
        color: "black",
        fontWeight: 'bold',
        padding: 15,
        fontSize: 13,
        textAlign: "center",
        //backgroundColor: "floralwhite"
    },
    

    itemTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        color: "blue",
        paddingTop: 10,
        marginBottom: 8,
        textShadowOffset: { width: 4, height: 4 },
        textShadowRadius: 15,
        textShadowColor: 'gold',
        //backgroundColor: "floralwhite"
    },
    itemGenre: {
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        color: "black",
        paddingBottom: 15,
        //backgroundColor: "floralwhite"

    },
    
      checkBoxText : {
        flex:0,
        flexDirection:"row",
        marginLeft: 300,
        marginTop:0,
        alignSelf:"center"
      },
      checkButton : {
        backgroundColor: "green",
        opacity:0.2
      },
      checkButton2 : {
        backgroundColor:"blue",
        opacity:0.2
      },
      itemSwitch : {
        flex:1,
        flexDirection:"row",
        marginRight:50

      },
      itemText3:{
        marginBottom:25,
        marginLeft:285,
        color: "green"
    },
});
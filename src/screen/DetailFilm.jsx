import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DetailFilm({route}){

    const {item} = route.params
    console.log("data is", item.id)
    let num = item.id

    const [data, setData] = useState(null)



    useEffect(() => {
        const url= "https://api.themoviedb.org/3/movie/_movieId_?api_key=42390a5fddcf8e4b872d65878af49dcb&language=en-US"

        axios.get(url.replace("_movieId_", num))
             .then(({data}) => {
                setData(data)
             })
             .catch((err) => console.log(err))   

    }, [num])


    return(

            <View>
                { data ? (
                    <View>
                    {/* <Text>Description : {data.overview}</Text> */}
                    <ImageBackground
                    source={{uri: "https://image.tmdb.org/t/p/w300/" + data.poster_path}}
                    resizeMode="cover" style={{ width:'100%', height: '100%', opacity:0.6, resizeMode:"cover" }}> 
                    <Text style={styles.itemTitle}>{data.original_title}</Text>
                    {
                     data.genres[1] ? (
                    <Text style={styles.itemGenre}>({data.genres[0].name}, {data.genres[1].name})</Text>
                        ) :  <Text style={styles.itemGenre}>({data.genres[0].name})</Text>
                    } 
                    <Text style={styles.itemText} >{data.overview}</Text>
                    
                       
                
                </ImageBackground>
                    </View>
                    ) : (<Text>Erreur</Text>)
                }

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
      image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: "cover",
        height:600,
        weight:300,
        opacity:0.8
      },
      itemText: {
        color:"black",
        fontWeight: 'bold',
        padding:15,
        fontSize: 18,
        textAlign:"center"
       // backgroundColor: 'white'
      },
      itemTitle:{
        fontSize: 35,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign:"center",
        color: "blue",
        paddingTop: 10,
        marginBottom:2,
        textShadowOffset: {width:4, height:4},
        textShadowRadius: 15,
        textShadowColor: 'gold'
      },
      itemGenre:{
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign:"center",
        color:"black",
        paddingBottom:15

      }
    });
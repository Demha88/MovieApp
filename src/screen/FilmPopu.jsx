import { useState, useEffect } from "react"
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from "react-native"
//import { TouchableOpacity } from "react-native-gesture-handler"
import { TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import FilmListe from "./FilmListe"
//import BoxFilm from "./BoxFilm";

export default function FilmPopu({ navigation }) {


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    const [listeFavoris, setListeFavoris] = useState([])

    const addFavoris = favoris =>{
        setListeFavoris([...listeFavoris, favoris])
    }

    const removeFavoris = favoris => {
        const listeFiltre = listeFavoris.filter(item => item.id !== favoris.id)
        setListeFavoris(listeFiltre)
        
    }


    const ifExists = favoris => {
        if (listeFavoris.filter(item => item.id === favoris.id).length > 0) {
            return true
        }
        return false
    }



    const renderHeader = () => {
        return (
            <TouchableOpacity
            style={styles.header}
            //onPress={() => navigation.navigate("FavFilm", {listeFavoris})}
            //onPress={() => console.log("Bouton pressé")}
            onPress={() => navigation.navigate("BoxFilm", {
                screen: 'FavFilm',
                params: {listeFavoris: listeFavoris},
            })}

            >
            <Text style={styles.text}>Favoris</Text>   
            </TouchableOpacity>
        )
    }


    useEffect(() => {
        console.log("Page :", page)
        setLoading(true)
        getFilms()
    }, [page])



    const getFilms = async () => {

        const url = "https://api.themoviedb.org/3/movie/popular?api_key=42390a5fddcf8e4b872d65878af49dcb&language=fr&page=" + page
        fetch(url).then((res) => res.json())
            .then((json) => {
                setData(p => [...p, ...json.results])
                setLoading(false)

            })
            .catch((err) => { console.log(err) })
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemRow}>
                <TouchableHighlight onPress={() => navigation.navigate("DetailFilm", { item })}>
                    <Image
                        source={{ uri: "https://image.tmdb.org/t/p/w300/" + item.poster_path }}
                        style={styles.itemImage}
                    />
                </TouchableHighlight>
                    

                {/* <TouchableOpacity
            style={styles.header}
            onPress={() => navigation.navigate('BoxFilm', {
                screen: 'FavFilm', 
                params: item.id })}
            //onPress={() => console.log("Bouton pressé")}
            >
            <Text style={styles.text}>Favoris</Text>   
            </TouchableOpacity> */}



                <View style={styles.itemInfo}>
                    <Text style={styles.itemText}>{item.original_title} </Text>
                    <Text style={styles.itemText2}>Rating: {item.vote_average}</Text>
                    <TouchableOpacity
                      //onPress={() => console.log('Favoris Ajouté!')}
                      onPress={() => ifExists(item) ? removeFavoris(item) : addFavoris(item)}
                      activeOpacity={0.7}
                      style={{
                        paddingLeft: 10,
                        marginTop: 15,
                        borderRadius: 20,
                        height: 40,
                        width: 40,
                      }}>
                      <MaterialIcons
                        name={ifExists(item) ? "favorite" : "favorite-outline"}    
                        color="red"
                        size={27}
                        //name="favorite-outline"
                      />
                    </TouchableOpacity>
                </View>


            </View>
        )
    }

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
        if (!loading) {
            setPage(page + 1)
            setLoading(true)
        }
    }


    return (

        <View style={styles.container}>
            <FlatList
                style={styles.container}
                data={data}
                ListHeaderComponent={renderHeader}
                //ajoutModif
                // renderItem = { ({item}) =>
                //     <View style={styles.itemRow}>
                //     {/* <Text style={styles.itemText}>{item.title}</Text> */}
                //     <Text style={styles.itemText}>{item.original_title} </Text>
                //     <Image
                //         sourc e={{ uri: "https://image.tmdb.org/t/p/w500/" + item.poster_path }}
                //        // style={{ height: 600 }}
                //        // source={{uri: item.url}}
                //         style={styles.itemImage}
                //     />
                // </View>
                // }
                //finAjoutModif
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                ListFooterComponent={renderFooter}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}

            />
        </View>

    )


    // return (
    //     <FilmListe data={getFilms} />

    // )

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
        fontSize: 18,
        fontWeight: 'bold',
        //fontColor: 'white',
        color: "white",
      
      },
      header: {
        alignItems: 'center'
      }
});

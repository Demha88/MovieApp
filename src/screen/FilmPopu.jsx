import { useEffect, useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, View, Image, ActivityIndicator, TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";



export default function FilmPopu({navigation}) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    //const [numId, setNumId] = useState(0)


    useEffect(() => {
        console.log("useEffect")
        console.log("useEffect page", page)
        setLoading(true)
        getFilms()
        // return () => {

        // }
    }, [page])

    const getFilms = async () => {
        // console.log("getFilms")

        const url = "https://api.themoviedb.org/3/movie/popular?api_key=42390a5fddcf8e4b872d65878af49dcb&language=en-US&page=" + page
        //const url="https://jsonplaceholder.typicode.com/photos?_limit=10&page="+page
        fetch(url).then((res) => res.json()) 
            .then((json) => {
              //  setData(data.concat(repJson))
                setData([...data, ...json?.results])
                setLoading(false)
            })
            //.catch((error) => {console.log(error)})
    }

    // fetch('https://api.themoviedb.org/3/movie/popular?api_key=42390a5fddcf8e4b872d65878af49dcb&language=en-US&page='+page, {
    // //fetch('https://api.github.com/search/code?q=addClass+user%3Amozilla&page='+page,{
    // method: 'GET',
    // headers: {
    //     Accept: 'application/json',
    //     "Content-Type": 'application/json',
    // },

    // }).then((response) => response.json())
    //     .then((json) => {
    //         console.log('json=>', json?.results)
    //         console.log('data=>', data)

    //         setData([...data, ...json?.results])
    //     })
    //     .catch((error) => {console.log(error)})



    // useEffect(() => {
    //     getFilms()

    // }, [page])



  const renderItem = ({ item }) => {

        return (
            <View style={styles.itemRow}>
                {/* <Text style={styles.itemText}>{item.title}</Text> */}
                <Text  style={styles.itemText}>{item.original_title} </Text>
                <TouchableHighlight onPress={() => navigation.navigate("DetailFilm", {item})}>
                <Image
                    source={{ uri: "https://image.tmdb.org/t/p/w300/" + item.poster_path }}
                   // style={{ height: 600 }}
                   // source={{uri: item.url}}
                    style={styles.itemImage}
                    
                />
                </TouchableHighlight>
                {/* <Text onPress={() => navigation.navigate("DetailFilm", {item})}>{item.id}</Text> */}
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
        if (!loading){
        setPage(page + 1)
        setLoading(true)
        }
    }
   

    

    return (
           <View style={styles.container}>
       
  

        <FlatList
            style={styles.container}
            data={data}
            //ajoutModif
            // renderItem = { ({item}) =>
            //     <View style={styles.itemRow}>
            //     {/* <Text style={styles.itemText}>{item.title}</Text> */}
            //     <Text style={styles.itemText}>{item.original_title} </Text>
            //     <Image
            //         source={{ uri: "https://image.tmdb.org/t/p/w500/" + item.poster_path }}
            //        // style={{ height: 600 }}
            //        // source={{uri: item.url}}
            //         style={styles.itemImage}
            //     />
            // </View>
            // }
            //finAjoutModif
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            
            

            ListFooterComponent={renderFooter}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            />

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   <Button
       onPress={() => alert('This is the "Home" screen.')}
       style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Button>
</View>
          </View>


    )
}

const styles = StyleSheet.create({
    container: {
        //   flex: 1,
        //   backgroundColor: '#fff',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        marginTop: 0,
        backgroundColor: "black"
    },
    itemRow: {
        borderBottomColor: '#ccc',
        marginBottom: 10,
        //borderBottomWidth: 10,
        //borderRadius: 20
        
    },
    itemImage: {
        // width: '100%',
         height: 500,
        resizeMode: 'cover',
        borderRadius: 40
    },
    itemText: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign:"center",
        color: "white",
        paddingTop: 40,
        marginBottom:10,
        textShadowOffset: {width:4, height:4},
        textShadowRadius: 10,
        textShadowColor: 'gold'
    },
    loader: {
        marginTop: 10,
        alignItems: "center"
    }
});


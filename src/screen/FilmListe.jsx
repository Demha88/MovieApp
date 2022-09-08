// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from "react-native"
// import FilmPopu from "./FilmPopu";
// import { useState, useEffect } from "react"


// export default function FilmListe() {

//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [page, setPage] = useState(1)

//     const renderItem = ({ item }) => {
//         return (
//             <View style={styles.itemRow}>
//                 <TouchableHighlight onPress={() => navigation.navigate("DetailFilm", {item})}>
//                 <Image
//                     source={{ uri: "https://image.tmdb.org/t/p/w300/" + item.poster_path }}
//                     style={styles.itemImage}
//                 />
//                 </TouchableHighlight>
//                 <View style={styles.itemInfo}>
//                 <Text style={styles.itemText}>{item.original_title} </Text>
//                 <Text style={styles.itemText2}>Rating: {item.vote_average}</Text>
//                 </View>
                
                
//             </View>
//         )
//     }

//     const renderFooter = () => {
//         return (
//             loading ?
//                 <View style={styles.loader}>
//                     <ActivityIndicator size="large" />
//                 </View> : null
//         )
//     }

//     const handleLoadMore = () => {
//         console.log("handleLoadMore")
//         if (!loading) {
//             setPage(page + 1)
//             setLoading(true)
//         }
//     }


//     return(
//         <View style={styles.container}>
//         <FlatList
//             style={styles.container}
//             data={data}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={renderItem}
//             ListFooterComponent={renderFooter}
//             onEndReached={handleLoadMore}
//             onEndReachedThreshold={0.5}

//         />
//     </View>




        
//     )



// }
// const styles = StyleSheet.create({
//     container: {
//           flex: 1,
//           backgroundColor: '#fff',
//         //   alignItems: 'center',
//         //   justifyContent: 'center',
//         // marginTop: 0,
//          paddingTop:5,
//         backgroundColor: "darkslategrey",
        
        
        
//     },
//     itemRow: {
//         flexDirection: "row",
//         borderBottomColor: '#ccc',
//         marginBottom: 10,
//         alignItems: "center",
        
//         //borderBottomWidth: 10,
//         //borderRadius: 20
//     },
//     itemImage: {
//         // width: '100%',
//         flex: 1,
//         height: 250,
//         width:200,
//         resizeMode: 'cover',
//         borderRadius: 20,
//         marginLeft:5
//     },
//     itemInfo: {
//         flex: 1
//     },
//     itemText: { 
//         // flexDirection:"row",
//         fontSize: 13,
//         fontWeight: "bold",
//         textTransform: "uppercase",
     
//         //textAlign: "center",
//         color: "white",
//         paddingLeft:10,
//         marginTop:15
        
//     },
//     itemText2: { 
//         fontSize: 13,
//         fontWeight: "normal",
//         textTransform: "uppercase",
//         //textAlign:"center",
//         color: "white",
//         paddingLeft:10,
//         marginTop:15
//     },
//     loader: {
//         marginTop: 10,
//         alignItems: "center"
//     }
// });

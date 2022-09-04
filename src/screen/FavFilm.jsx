import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import { Button } from "react-native-paper";

export default function FavFilm({navigation}){

return(

<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Films favoris</Text>
      <Button style={{ width: 200}}
        color="blue"
        title="Go to Details"
        onPress={() => navigation.navigate('DetailFilm')}
      />
    </View>

);


}

// const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//        // backgroundColor: '#ccc',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//     });
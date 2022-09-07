import { Text, View, Image, StyleSheet, ImageBackground, Pressable} from "react-native";
import { useState, useEffect } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';


export default function MyCheckbox({
    checked,
    onChange ,
  }) {
    function onCheckmarkPress() {
      onChange(!checked);
    }
  
    return (
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={onCheckmarkPress}>
        {checked && <Ionicons name="checkmark" size={24} color="white" />}
      </Pressable>
      
    );
  }

  const styles = StyleSheet.create({
    checkboxBase: {
      
      width: 24,
      height: 24,
      marginLeft: 270,
      marginTop: 60,
     // justifyContent: 'center',
     // alignItems: 'center',
      
      borderRadius: 4,
      borderWidth: 2,
      borderColor: 'coral',
      backgroundColor: 'transparent',
    },
  
    checkboxChecked: {
      backgroundColor: 'coral',
    },
  
    checkboxContainer: {
      //flexDirection: 'row',
      //alignItems: 'center',
    },
    
  
    // checkboxLabel: {
    //   marginLeft: 8,
    //   fontWeight: 500,
    //   fontSize: 18,
    // },
  });
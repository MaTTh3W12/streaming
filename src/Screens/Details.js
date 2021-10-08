import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import YouTube from 'react-native-youtube';


export default function Details({route}){
    const item = route.params.item;
    console.log(item);
    return(
        <View style={styles.contenedor}>
            <YouTube
              apiKey={'AIzaSyBNTpKXLmASqFaubwPSOdC2SndWWOGFHe4'}
              videoId={item.video}
              play
              loop
              style={{ alignSelf: 'stretch', height: 500 }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor: 'black',
        flex: 1,
    },
});
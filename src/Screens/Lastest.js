import React, { useState } from 'react'; 
import {View, StyleSheet,Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import YouTube from 'react-native-youtube';

export default function Lastest() {
    return(
        <ScrollView style={{backgroundColor: '#000'}} >
            <View style={styles.listContentContainer}>
                <Image source={{uri: 'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ylulnlieiffpuzdy_1629736533.jpeg'}} style={{width: 450, height: 200,}}/>
                <Text style={styles.listTitleText}>Nuestros Proximos Estrenos</Text>
                <View style={{marginTop: 20}}>
                    <View style={{backgroundColor: "#fff", width: 450, height: 200,}}>
                    <YouTube
                        apiKey={'AIzaSyBNTpKXLmASqFaubwPSOdC2SndWWOGFHe4'}
                        videoId={'oNGY4FkZkhQ'}
                        play
                        loop
                        style={{ alignSelf: 'stretch', height: 500 }}
                    />
                    </View>
                    <Text style={{color: '#fff', fontSize: 20, letterSpacing: 1}}>Serie</Text>
                    <Text style={styles.textDescription}> Sex Education temporada 4: Un adolescente cuya madre es sexóloga forma equipo con una compañera de clase para montar una clínica de sexología encubierta en su instituto.</Text>
                    <Text style={styles.textDescription}>12 feb 2021</Text>
                </View>
                <View style={{marginTop: 20}}>
                    <View style={{backgroundColor: "#fff", width: 450, height: 200,}}>
                    <YouTube
                        apiKey={'AIzaSyBNTpKXLmASqFaubwPSOdC2SndWWOGFHe4'}
                        videoId={'2y22ik6yOKk'}
                        play
                        loop
                        style={{ alignSelf: 'stretch', height: 500 }}
                    />
                    </View>
                    <Text style={{color: '#fff', fontSize: 20, letterSpacing: 1}}>Serie</Text>
                    <Text style={styles.textDescription}>Squid Game Season 2: 456 participantes desesperados compiten en un misterioso y mortífero concurso de supervivencia compuesto de varias rondas de juegos infantiles. ¿La meta? Ganar 45.600 millones de wones y salir de la miseria.</Text>
                    <Text style={styles.textDescription}>12 feb 2023</Text>
                </View>
                <View style={{marginTop: 20}}>
                    <View style={{backgroundColor: "#fff", width: 450, height: 200,}}>
                    <YouTube
                        apiKey={'AIzaSyBNTpKXLmASqFaubwPSOdC2SndWWOGFHe4'}
                        videoId={'UZggozsVz9M'}
                        play
                        loop
                        style={{ alignSelf: 'stretch', height: 500 }}
                    />
                    </View>
                    <Text style={{color: '#fff', fontSize: 20, letterSpacing: 1}}>Peliculas</Text>
                    <Text style={styles.textDescription}>Venom: Habrá Matanza: Regreso de Eddie Brock (Tom Hardy), el astuto periodista y reportero que, después de quedar infectado, adquirirá los poderes del simbionte Venom, y se convertirá en un despiadado y peligroso súpervillano. Esta secuela de Venom (2018) retoma el personaje de Marvel creado por David Michelinie y Todd McFarlane.</Text>
                    <Text style={styles.textDescription}>15 oct 2021</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listContentContainer: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 14,
    },

    listTitleText: {
        paddingLeft: 14,
        fontSize: 25,
        color: '#000', 
        position: 'absolute',
        top: 55, 
        left: 55, 
        fontWeight: 'bold',
    },

    textDescription: {
        color: '#fff',
        fontSize: 15
    }
})
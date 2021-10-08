import React, { useState } from 'react'; 
import {View, StyleSheet,Image, Text, ScrollView, TouchableOpacity} from 'react-native';

export default function Lastest() {
    return(
        <ScrollView style={{backgroundColor: '#000'}} >
            <View style={styles.listContentContainer}>
                <Image source={{uri: 'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ylulnlieiffpuzdy_1629736533.jpeg'}} style={{width: 450, height: 200,}}/>
                <Text style={styles.listTitleText}>Nuestros Proximos Estrenos</Text>
                <View style={{marginTop: 20}}>
                    <View style={{backgroundColor: "#fff", width: 450, height: 200,}}>
                        <Text style={{color: '#ffb100', textAlign: 'center', fontSize: 40}}>Video</Text>
                    </View>
                    <Text style={{color: '#fff', fontSize: 20, letterSpacing: 1}}>Serie</Text>
                    <Text style={styles.textDescription}>Un adolescente cuya madre es sexóloga forma equipo con una compañera de clase para montar una clínica de sexología encubierta en su instituto.</Text>
                    <Text style={styles.textDescription}>12 feb 2021</Text>
                </View>
                <View style={{marginTop: 20}}>
                    <View style={{backgroundColor: "#fff", width: 450, height: 200,}}>
                        <Text style={{color: '#ffb100', textAlign: 'center', fontSize: 40}}>Video</Text>
                    </View>
                    <Text style={{color: '#fff', fontSize: 20, letterSpacing: 1}}>Serie</Text>
                    <Text style={styles.textDescription}>Un adolescente cuya madre es sexóloga forma equipo con una compañera de clase para montar una clínica de sexología encubierta en su instituto.</Text>
                    <Text style={styles.textDescription}>12 feb 2021</Text>
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
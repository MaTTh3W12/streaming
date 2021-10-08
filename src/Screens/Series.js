import React, { useState } from 'react'; 
import {View, StyleSheet,Image, Text, ScrollView, Modal, Button, TouchableHighlight} from 'react-native'; 

export default function Series() {
    return(
        <ScrollView style={{backgroundColor: '#000'}} blurRadius={100}>
            <View>
                <Text>Todas nuestras Series</Text>
            </View>
        </ScrollView>
    )
}
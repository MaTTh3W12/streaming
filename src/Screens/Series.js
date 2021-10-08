import React, { useState } from 'react'; 
import {View, StyleSheet,Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function Series() {
    return(
        <ScrollView style={{backgroundColor: '#000'}} >
            <View style={styles.listContentContainer}>
                <Image source={{uri: 'https://www.dvdcollections.co.uk/lost/i/lost-series-banner.jpg'}} style={{width: 450, height: 150,}}/>
                <Text style={styles.listTitleText}>Todas nuestras Series</Text>
                <View style={{marginTop: 20}}>
                    <Text style={styles.listCategorieTitle}>Comedia</Text>
                    <View style={styles.boxList}>
                        <Image source={{uri: 'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UY720_.jpg'}} style={{width: 200, height: 300,}}/>
                        <View style={styles.boxListText}>
                            <Text style={styles.boxTextDesc}>Rick and Morty</Text>
                            <Text style={styles.boxTextDesc}>Seasons: 5</Text>
                            <TouchableOpacity style={styles.playIconContainer}>
                                <FontAwesome5  name='play' size={22} color='#02ad94' style={{marginLeft: 4}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.boxList}>
                        <Image source={{uri: 'https://m.media-amazon.com/images/M/MV5BODhmN2Q4ZjUtNzE5Ni00YWQxLThmYjYtM2NkNDEwNmFhMGY3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UY720_.jpg'}} style={{width: 200, height: 300,}}/>
                        <View style={styles.boxListText}>
                            <Text style={styles.boxTextDesc}>Sex Education</Text>
                            <Text style={styles.boxTextDesc}>Seasons: 3</Text>
                            <TouchableOpacity style={styles.playIconContainer}>
                                <FontAwesome5  name='play' size={22} color='#02ad94' style={{marginLeft: 4}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.boxList}>
                        <Image source={{uri: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX680_.jpg'}} style={{width: 200, height: 300,}}/>
                        <View style={styles.boxListText}>
                            <Text style={styles.boxTextDesc}>Friends</Text>
                            <Text style={styles.boxTextDesc}>Seasons: 10</Text>
                            <TouchableOpacity style={styles.playIconContainer}>
                                <FontAwesome5  name='play' size={22} color='#02ad94' style={{marginLeft: 4}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 15}}>
                    <Text style={styles.listCategorieTitle}>Aventura</Text>
                    <View style={styles.boxList}>
                        <Image source={{uri: 'https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UY720_.jpg'}} style={{width: 200, height: 300,}}/>
                        <View style={styles.boxListText}>
                            <Text style={styles.boxTextDesc}>Squid Game</Text>
                            <Text style={styles.boxTextDesc}>Seasons: 1</Text>
                            <TouchableOpacity style={styles.playIconContainer}>
                                <FontAwesome5  name='play' size={22} color='#02ad94' style={{marginLeft: 4}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.boxList}>
                        <Image source={{uri: 'https://m.media-amazon.com/images/M/MV5BOGYwYTA5M2QtMTk3Zi00ZjdjLWFkNDUtYzg4MjM0ZGI0MGU1XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UY720_.jpg'}} style={{width: 200, height: 300,}}/>
                        <View style={styles.boxListText}>
                            <Text style={styles.boxTextDesc}>What If...?</Text>
                            <Text style={styles.boxTextDesc}>Seasons: 1</Text>
                            <TouchableOpacity style={styles.playIconContainer}>
                                <FontAwesome5  name='play' size={22} color='#02ad94' style={{marginLeft: 4}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.boxList}>
                        <Image source={{uri: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1102_.jpg'}} style={{width: 200, height: 300,}}/>
                        <View style={styles.boxListText}>
                            <Text style={styles.boxTextDesc}>Game of Thrones</Text>
                            <Text style={styles.boxTextDesc}>Seasons: 8</Text>
                            <TouchableOpacity style={styles.playIconContainer}>
                                <FontAwesome5  name='play' size={22} color='#02ad94' style={{marginLeft: 4}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{marginTop: 15, marginBottom: 15,}}>
                    <Text style={styles.listCategorieTitle}>Fantasia</Text>
                    <View style={styles.boxList}>
                        <Image source={{uri: 'https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg'}} style={{width: 200, height: 300,}}/>
                        <View style={styles.boxListText}>
                            <Text style={styles.boxTextDesc}>Lost</Text>
                            <Text style={styles.boxTextDesc}>Seasons: 6</Text>
                            <TouchableOpacity style={styles.playIconContainer}>
                                <FontAwesome5  name='play' size={22} color='#02ad94' style={{marginLeft: 4}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.boxList}>
                        <Image source={{uri: 'https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UY720_.jpg'}} style={{width: 200, height: 300,}}/>
                        <View style={styles.boxListText}>
                            <Text style={styles.boxTextDesc}>The Witcher</Text>
                            <Text style={styles.boxTextDesc}>Seasons: 3</Text>
                            <TouchableOpacity style={styles.playIconContainer}>
                                <FontAwesome5  name='play' size={22} color='#02ad94' style={{marginLeft: 4}} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={styles.boxList}>
                        <Image source={{uri: 'https://m.media-amazon.com/images/M/MV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_FMjpg_UX864_.jpg'}} style={{width: 200, height: 300,}}/>
                        <View style={styles.boxListText}>
                            <Text style={styles.boxTextDesc}>Loki</Text>
                            <Text style={styles.boxTextDesc}>Seasons: 2</Text>
                            <TouchableOpacity style={styles.playIconContainer}>
                                <FontAwesome5  name='play' size={22} color='#02ad94' style={{marginLeft: 4}} />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        color: 'white', 
        position: 'absolute',
        top: 55, 
        left: 55, 
        fontWeight: 'bold',
    },

    listCategorieTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
        letterSpacing: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#50b2c0',
        width: 100,
    },

    boxList: {
        flexDirection: 'row',
        borderBottomWidth: 4,
        borderBottomColor: '#006c76',
        marginTop: 10
    },

    boxListText: {
        flexDirection:'column'
    },

    boxTextDesc:{
        color: 'white',
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 20,
    },

    playIconContainer: {
        backgroundColor: '#212121',
        padding: 18,
        borderRadius: 150,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 25,
        borderWidth: 4,
        borderColor: 'rgba(2, 173, 148, 0.2)',
        marginBottom: 14,
        marginHorizontal: 50,
    }
})
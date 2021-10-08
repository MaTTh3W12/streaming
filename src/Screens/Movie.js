import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, StatusBar, ScrollView, ImageBackground } from 'react-native';
import React, { useRef, useState } from 'react';
import Carousel from 'react-native-anchor-carousel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Movie(props) {

  const { navigation } = props;


  const [backgroundA, setBackgroundA] = useState({
    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
    name: 'Avengers: End Game',
    video: 'TcMBFSGVi1c',
    stat: '2019 ‧ Action/Sci-fi ‧ 3h 2m',
    desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'
  })

  const [gallery, setgallery] = useState([
    { 
        image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9', 
        title: 'Avengers: End Game',
        video: 'TcMBFSGVi1c',
        released: '2019 ‧ Action/Sci-fi ‧ 3h 2m' ,
        key: '1' ,
        desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.' 
    },
    {
        image:'https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1012_.jpg', 
        title: 'Bad Boys For Life',
        video: 'jKCj3XuPG8M',
        released: '2020 ‧ Action/Sci-fi ‧ 2h 4min',  
        key: '2' , 
        desc: 'Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.' 
    },
    { 
        image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P', 
        title: 'Alita: Battle Angel',
        video: 'w7pYhpJaJW8',
        released: '2019 ‧ Action/Sci-fi ‧ 2h 2m',
        key: '3', 
        desc: 'Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity.' 
    },
    { 
        image:'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg', 
        title: 'The Irish Man',
        video: 'WHXxVmeGQUc',
        released: '2019 ‧ Crime/Drama ‧ 3h 30m', 
        key: '4', 
        desc: 'In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa.' 
    },
    { 
        image:'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1013_.jpg', 
        title: 'Black Widow',
        video: 'gR3JFH_3LhY',
        released: '2021 ‧ Action/Sci-fi ‧ 2h 14min', 
        key: '5', 
        desc: 'Natasha Romanoff se enfrenta a las partes más oscuras de su pasado cuando surge una peligrosa conspiración vinculada a él.' 
    },
    { 
        image:'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg', 
        title: 'John Wick Chapter 3',
        video: 'pU8-7BX9uxs',
        released: '2019 ‧ Action/Thriller ‧ 2h 10m', 
        key: '6', 
        desc: 'John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.' 
    },
]);

  const [background, setBackground] = useState({
    uri: 'https://m.media-amazon.com/images/M/MV5BMTg3NTI5MzQ2Ml5BMl5BanBnXkFtZTcwMzU1MTYyMQ@@._V1_FMjpg_UX216_.jpg',
    name: 'The Notebook',
    video: 'yDJIcYE32NU',
    stat: '2004 ‧ Drama/Romance ‧ 2h 3min',
    desc: 'Un joven pobre pero apasionado se enamora de una joven rica que le da un sentido de libertad, pero pronto son separados a causa de a sus diferencias sociales.'
  })

  const [romance, setromance] = useState([
    { 
        image:'https://m.media-amazon.com/images/M/MV5BMTg3NTI5MzQ2Ml5BMl5BanBnXkFtZTcwMzU1MTYyMQ@@._V1_FMjpg_UX216_.jpg', 
        title: 'The Notebook',
        video: 'yDJIcYE32NU',
        released: '2004 ‧ Drama/Romance ‧ 2h 3min',
        key: '7' , 
        desc: 'Un joven pobre pero apasionado se enamora de una joven rica que le da un sentido de libertad, pero pronto son separados a causa de a sus diferencias sociales.' 
    },
    {
        image:'https://www.spotlightstheatre.co.uk/wordpress/wp-content/uploads/2019/11/f_frozen2_header_mobile_18432_d258f93f.jpeg', 
        title: 'Frozen II',
        video: 'R8TR3cGKees',
        released: '2019 ‧ Romance/Musical ‧ 1h 43m',  
        key: '8' , 
        desc: 'Elsa the Snow Queen has an extraordinary gift -- the power to create ice and snow. But no matter how happy she is to be surrounded by the people of Arendelle, Elsa finds herself strangely unsettled.' 
    },
    { 
        image:'https://m.media-amazon.com/images/M/MV5BNzI3YTQzZDAtNzBlYS00YTNmLWJlZTAtZGQxYjU1N2ViNDMzXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UY720_.jpg', 
        title: 'After We Fell',
        video: 'lMiZ_pYswrA',
        released: '2021 ‧ Romance/Drama ‧ 1h 39min',
        key: '9', 
        desc: 'Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity.' 
    },
    { 
        image:'https://m.media-amazon.com/images/M/MV5BYTlkYmM2NjAtMDkyZi00M2JiLThjZmItMjUzZDhiMDg2NGJmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1026_.jpg', 
        title: 'Marley & Me',
        video: '0UMMGNxg1Lg',
        released: '2008 ‧ Family/Romance ‧ 1h 51min', 
        key: '10', 
        desc: 'Una familia aprende importantes lecciones de vida de su adorable, pero travieso y neurótico perro.' 
    },
    { 
        image:'https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_FMjpg_UY720_.jpg', 
        title: 'Me Before You',
        video: 'Eh993__rOxA',
        released: '2016 ‧ Romance/Drama ‧ 1h 46min', 
        key: '11', 
        desc: 'En un pueblo pequeño, una chica entabla una relación improbable con el hombre al que está cuidando, recientemente paralizado.' 
    },
    { 
        image:'https://m.media-amazon.com/images/M/MV5BMTk0Mzg1MTU1MF5BMl5BanBnXkFtZTgwMjU3ODI2MzE@._V1_FMjpg_UX509_.jpg', 
        title: 'Love, Rosie',
        video: '5zL3YJKygd4',
        released: '2014 ‧ Comedy/Romance ‧ 1h 42min', 
        key: '12', 
        desc: 'Rosie y Alex han sido mejores amigos desde que tenían 5 años, por lo que posiblemente no podrían ser el uno para el otro ... ¿o podrían? Cuando se trata del amor, la vida y tomar las decisiones correctas, estos dos son sus peores enemigos.' 
    },
  ]);

  const [backgroundC, setBackgroundC] = useState({
    uri: 'https://m.media-amazon.com/images/M/MV5BYTNjNzFiZTItNDM5NS00ODBhLTk5NmMtYzUyZWRmOWJjOTI3XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UY720_.jpg',
    name: 'Free Guy',
    video: 'tZbNDmRGx_M',
    stat: '2021 ‧ Adventure/Comedy ‧ 1h 55min',
    desc: 'Un empleado de banco descubre que en realidad es un personaje dentro de un videojuego.'
  });

  const [comedy, setcomedy] = useState([
        { 
            image:'https://m.media-amazon.com/images/M/MV5BYTNjNzFiZTItNDM5NS00ODBhLTk5NmMtYzUyZWRmOWJjOTI3XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UY720_.jpg', 
            title: 'Free Guy',
            video: 'tZbNDmRGx_M',
            released: '2021 ‧ Adventure/Comedy ‧ 1h 55min',
            key: '13' , 
            desc: 'Un empleado de banco descubre que en realidad es un personaje dentro de un videojuego.' 
        },
        {
            image:'https://m.media-amazon.com/images/M/MV5BMjA0ODYwNzU5Nl5BMl5BanBnXkFtZTcwNTI1MTgxMw@@._V1_FMjpg_UY720_.jpg', 
            title: 'Grown Ups',
            video: 'e01NVCveGkg',
            released: '2010 ‧ Comedy ‧ 1h 42min',  
            key: '14' , 
            desc: 'Después de la muerte de su entrenador de baloncesto de la escuela secundaria, cinco buenos amigos y ex compañeros de equipo se reúnen para un fin de semana de vacaciones del 4 de julio.' 
        },
        { 
            image:'https://m.media-amazon.com/images/M/MV5BYTI3NTdhMWEtZWE2Mi00NTBmLWJjMWYtOTAwMmJlZjc0YTZhXkEyXkFqcGdeQXVyMjkwMjY1MjI@._V1_FMjpg_UY720_.jpg', 
            title: 'Taking the Reins',
            video: '2-7PkrUvW1g',
            released: '2021 ‧ Comedy/Drama ‧ 1h 24min',
            key: '15', 
            desc: 'A writer discovers what ended her marriage and why she stopped riding horses after going back to her family ranch.' 
        },
        { 
            image:'https://m.media-amazon.com/images/M/MV5BOTQwMjRmNWQtYzFmMC00ZTBhLTlkYzMtNDFmZGY0NjlkNTJhXkEyXkFqcGdeQXVyMTA2MDQ3MTQ3._V1_FMjpg_UY720_.jpg', 
            title: 'Everybodys Talking About Jamie',
            video: 'CpOeZw7xdfI',
            released: '2021 ‧ Comedy/Drama ‧ 1h 55min', 
            key: '16', 
            desc: 'Adaptación cinematográfica del musical sobre un adolescente de Sheffield, Inglaterra, que quiere ser una drag queen. Con el apoyo de su madre y su mejor amiga, supera los prejuicios y se convierte en el hombre que elige ser.' 
        },
        { 
            image:'https://m.media-amazon.com/images/M/MV5BYWQwMTJhMDMtY2I5My00ODkyLWJhYjYtNjdjMWRjOWZhNGFiXkEyXkFqcGdeQXVyMTI3ODczNTk2._V1_FMjpg_UY720_.jpg', 
            title: 'Hotel Transylvania: Transformania',
            video: 'J5Xp3Flbj9k',
            released: '2022 ‧ Animation/Comedy ‧ 1h 50min', 
            key: '17', 
            desc: 'La banda de Drac está de vuelta como nunca antes para el último capítulo de "Hotel Transilvania".' 
        },
        { 
            image:'https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_FMjpg_UY720_.jpg', 
            title: 'Luca',
            video: 'EJk_Z-OasXc',
            released: '2021 ‧ Animation/Comedy ‧ 1h 35min', 
            key: '18', 
            desc: 'En la Riviera italiana, una amistad tan fuerte como inesperada surge entre un ser humano y un monstruo marino camuflado como tal.' 
        },
    ]);

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get('window');

  const renderItem = ({item, index}) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => 
                    { 
                      console.log(item);
                        carouselRef.current.scrollToIndex(index);
                        setBackground({
                            uri: item.image,
                            video: item.video,
                            name: item.title,
                            stat: item.released,
                            desc: item.desc
                        })
                    }
                }
        >
            <Image source={{uri: item.image}} style={styles.carouselImage} />
            <Text style={styles.carouselText}>{item.title}</Text>
        </TouchableOpacity>
        
        </View>
    
    )
}

  return (
    <ScrollView>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
          <ImageBackground source={{ uri: background.uri }} style={styles.ImageBg} blurRadius={10}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical: 10 }}>Romance</Text>
            <View style={styles.carouselContainerView}>
              <Carousel style={styles.Carousel}
                data={romance}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </View>
            <View style={styles.movieInfoContainer}>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.stat}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer} onPress={() => {
                navigation.navigate("Details",{
                  item: background
                });
              }} >
                <FontAwesome5 name='play' size={22} color='#02ad94' style={{ marginLeft: 4 }} />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
              <Text style={{ color: '#fff', fontWeight: '700', opacity: 0.8, lineHeight: 20 }}>
                {background.desc}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
          <ImageBackground source={{ uri: backgroundA.uri }} style={styles.ImageBg} blurRadius={10}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical: 10 }}>Accion</Text>
            <View style={styles.carouselContainerView}>
              <Carousel style={styles.Carousel}
                data={gallery}
                renderItem={({ item, index }) => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          carouselRef.current.scrollToIndex(index);
                          setBackgroundA({
                            uri: item.image,
                            video: item.video,
                            name: item.title,
                            stat: item.released,
                            desc: item.desc
                          })
                        }
                        }
                      >
                        <Image source={{ uri: item.image }} style={styles.carouselImage} />
                        <Text style={styles.carouselText}>{item.title}</Text>
                      </TouchableOpacity>

                    </View>
                  )
                }}
                itemWidth={200}
                containerWidth={width - 20}
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </View>
            <View style={styles.movieInfoContainer}>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.movieName}>{backgroundA.name}</Text>
                <Text style={styles.movieStat}>{backgroundA.stat}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer} onPress={() => {
                navigation.navigate("Details",{
                  item: backgroundA
                });
              }}>
                <FontAwesome5 name='play' size={22} color='#02ad94' style={{ marginLeft: 4 }} />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
              <Text style={{ color: 'white', opacity: 0.8, lineHeight: 20 }}>
                {backgroundA.desc}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    
      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
          <ImageBackground source={{ uri: backgroundC.uri }} style={styles.ImageBg} blurRadius={10}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical: 10 }}>Comedia</Text>
            <View style={styles.carouselContainerView}>
              <Carousel style={styles.Carousel}
                data={comedy}
                renderItem={({ item, index }) => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          carouselRef.current.scrollToIndex(index);
                          setBackgroundC({
                            uri: item.image,
                            video: item.video,
                            name: item.title,
                            stat: item.released,
                            desc: item.desc
                          })
                        }
                        }
                      >
                        <Image source={{ uri: item.image }} style={styles.carouselImage} />
                        <Text style={styles.carouselText}>{item.title}</Text>
                      </TouchableOpacity>

                    </View>
                  )
                }}
                itemWidth={200}
                containerWidth={width - 20}
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </View>
            <View style={styles.movieInfoContainer}>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.movieName}>{backgroundC.name}</Text>
                <Text style={styles.movieStat}>{backgroundC.stat}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer} onPress={() => {
                navigation.navigate("Details",{
                  item: backgroundC
                });
              }}>
                <FontAwesome5 name='play' size={22} color='#02ad94' style={{ marginLeft: 4 }} />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
              <Text style={{ color: 'white', opacity: 0.8, lineHeight: 20 }}>
                {backgroundC.desc}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 720,
    paddingHorizontal: 14,
  },

  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start',
  },

  carouselContainerView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },

  carousel: {
    flex: 1,
    overflow: 'visible',
  },

  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'
  },

  carouselText: {
    paddingLeft: 14,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  movieInfoContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 14
  },

  movieName: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6
  },

  movieStat: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.8
  },

  playIconContainer: {
    backgroundColor: '#212121',
    padding: 18,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 25,
    borderWidth: 4,
    borderColor: 'rgba(2, 173, 148, 0.2)',
    marginBottom: 14
  }
})

import React from 'react'
import { ScreenContainer } from 'react-native-screens'
import LMSVT from './Screens/LMSVT';
import SearchScreen from './Screens/SearchScreen'
import { View, Text, StyleSheet, ScrollView, Image, FlatList, Button } from 'react-native';
import Swiper from 'react-native-swiper';

const mockData = [
    {
        title: 'pokeball',
        price: '$355.99',
        img: 'https://image.freepik.com/foto-gratis/rollos-sushi-japoneses-sobre-fondo-blanco_93675-4972.jpg'
    },
    {
        title: 'Santa bowl',
        price: '$355.99',
        img: 'https://image.freepik.com/foto-gratis/rollos-sushi-japoneses-sobre-fondo-blanco_93675-4972.jpg'
    },
    {
        title: 'Sushi picante',
        price: '$355.99',
        img: 'https://image.freepik.com/foto-gratis/rollos-sushi-japoneses-sobre-fondo-blanco_93675-4972.jpg'
    },

]

export const SushiHome =({navigation}) => {
    return(
        <ScreenContainer>
            <View>
            <View style={styles.cuentabar}>
                <View style={styles.imageCuenta}>
                    <Text style={styles.textcuenta}>BG</Text>
                </View>
                <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20 }}>HOME</Text>

            </View>
            <ScrollView>

                <View>
                    <Text style={styles.titles} >Pedidos recientes</Text>
                    <View style={styles.pedidosContainer}>
                        <Image style={{ height: '50%', width: '50%' }}
                            resizeMode='contain'
                            source={{
                                uri: 'https://www.nicepng.com/png/detail/75-755101_paper-bag-yellow-vector-icon-yellow-shopping-bag.png'
                            }} />
                        <Text>No tienes pedidos recientes</Text>

                    </View>
                    <View >
                        <Text style={styles.titles}>Sugeridos</Text>
                        <Swiper style={styles.swipe} height={350} horizontal={true} dot={
                            <View
                                style={{
                                    backgroundColor: 'rgba(0,0,0,.2)',
                                    width: 20,
                                    height: 5,
                                    borderRadius: 4,
                                    marginLeft: 3,
                                    marginRight: 3,
                                    marginBottom: 3,
                                    alignContent: 'center',

                                }}
                            />
                        }
                            activeDot={
                                <View
                                    style={{
                                        backgroundColor: '#000',
                                        width: 8,
                                        height: 8,
                                        borderRadius: 4,
                                        marginLeft: 3,
                                        marginRight: 3,
                                        marginBottom: 3
                                    }}
                                />
                            } >
                            <View style={styles.sugerencias}>
                                <Image style={{
                                    height: '70%',
                                    width: '99%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 2
                                }}
                                    resizeMode='contain'
                                    source={{ uri: 'https://s1.eestatic.com/2015/05/11/cocinillas/Cocinillas_32506750_116175093_1706x960.jpg' }} />
                                <Text style={styles.txtTitleSugeridos}>Poke bowl</Text>
                                <Text style={styles.txtSugeridos}>Nos metimos a Africa y capturamos el animal más parecido a Pikachu </Text>
                                <Text style={styles.priceSugest}>$50.99</Text>

                            </View>
                            <View style={styles.sugerencias}>
                                <Image style={{
                                    height: '70%',
                                    width: '99%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 2
                                }}
                                    resizeMode='contain'
                                    source={{ uri: 'https://mahatmarice.com/wp-content/uploads/2019/05/Vegetarian-Sushi-Rolls.jpg' }} />
                                <Text
                                    style={styles.txtTitleSugeridos}>Sunomono</Text>
                                <Text
                                    style={styles.txtSugeridos}>Un sushi bastante exquisito y pacanye, tanto que no volveras a tener papilas gustativas</Text>
                                <Text
                                    style={styles.priceSugest}>$209.00</Text>

                            </View>
                            <View style={styles.sugerencias}>
                                <Image style={{
                                    height: '70%',
                                    width: '99%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 2
                                }}
                                    resizeMode='cover'
                                    source={{
                                        uri: 'https://www.cocinavital.mx/wp-content/uploads/2019/07/sushi-de-frutas.jpg'
                                    }} />
                                <Text style={styles.txtTitleSugeridos}>Claus roll</Text>
                                <Text
                                    style={styles.txtSugeridos}>
                                    Cocinamos a Santa Claus y ahora es comestible en forma de sopa para nuestros comensales
                                </Text>
                                <Text
                                    style={styles.priceSugest}>$399.00</Text>

                            </View>
                        </Swiper>


                        <View>
                            <Text style={styles.titles} >Favoritos</Text>
                            <View style={styles.pedidosContainer}>
                                <Image style={{ height: '50%', width: '50%' }} resizeMode='contain'
                                    source={{
                                        uri: 'https://s04.s3c.es/imag/_v0/770x420/1/0/3/corazon-pixabay.jpg'
                                    }} />
                                <Text>No tienes favoritos</Text>

                            </View>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', flex:1 }}>
                                <Text style={styles.titles}>Lo más vendido</Text>
                                <Button style={} title='Ver Todo' onPress={() => navigation.navigate('LMSVT')} />

                            </View>
                            <FlatList data={mockData} renderItem={({ item }) => {
                                return <View>
                                    <View style={styles.vendidosContainer}>
                                        <Image
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }} resizeMode='contain'
                                            source={{
                                                uri: item.img
                                            }} />

                                    </View>
                                    <Text style={styles.titleLMV}>{item.title}</Text>
                                    <Text style={styles.priceLMS}>{item.price}</Text>
                                </View>
                            }

                            } contentContainerStyle={{ height: 300 }} horizontal={true}>

                            </FlatList>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>
            
        </ScreenContainer>
    )
};

export const SeeAll =({navigation}) => {
    return(
        <ScreenContainer>
            <LMSVT />
        </ScreenContainer>
    )
};

export const SearchBar =({navigation}) => {
    return(
        <ScreenContainer>
            <SearchScreen/>
        </ScreenContainer>
    )
};




const styles = StyleSheet.create({
    pedidosContainer: {
        borderColor: 'silver',
        borderWidth: 2,
        height: 300,
        width: '99%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginLeft: 2,
        marginTop: 5,
        marginBottom: 9


    },

    sugerencias: {
        borderColor: 'silver',
        borderWidth: 2,
        height: 300,
        width: '99%',
        borderRadius: 3,
        marginTop: 5,
        marginBottom: 9,
        marginLeft: 2,


    },

    titles: {
        fontSize: 16,
        marginLeft: 3,
        fontWeight: 'bold'


    },

    vendidosContainer: {
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'silver',
        width: 125,
        height: '40%',
        backgroundColor: 'white',
        marginBottom: 4,
        marginTop: 4


    },

    swipe: {},


    txtTitleSugeridos: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 7,
        marginTop: 4,
        marginLeft: 4
    },



    txtSugeridos: {
        fontWeight: '200',
        fontSize: 12,
        marginBottom: 7,
        marginLeft: 4

    },

    priceSugest: {
        fontSize: 13,
        fontWeight: '300',
        color: 'blue',
        marginLeft: 4

    },

    cuentabar: {

        height: 50,
        width: '100%',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'silver',
        borderBottomWidth: 2,
        marginTop: 30
    },

    imageCuenta: {
        borderWidth: 1,
        backgroundColor: '#BBDEFB',
        height: 35,
        width: 35,
        borderColor: 'blue',
        borderRadius: 100,
        marginLeft: 10


    },

    textcuenta: {
        textAlign: 'center',
        marginTop: 5,
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 18,
        width: '100%',
        height: '100%'

    },

    priceLMS: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 7

    },

    titleLMV: {
        fontWeight: '300',
        fontSize: 13,
        marginTop: 7,
        textAlign: 'center'

    }




});



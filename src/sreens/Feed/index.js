import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';

import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';


function Feed(){

    const posts = [
        {
            id: '1',
            autor:'thauan.a',
            foto_url: 'https://avozdaserra.com.br/sites/default/files/noticias/cinema_0.png',
            likes: '236',
            descricao: 'Delimitado pelo oceano Atlântico a leste, o Brasil tem um litoral de 7 491 km.[12] O país faz fronteira com todos os outros países sul-americanos, exceto Chile e Equador, sendo limitado a norte pela Venezuela, Guiana, Suriname e pelo departamento ultramarino francês da Guiana Francesa; a noroeste pela Colômbia; a oeste pela Bolívia e Peru; a sudoeste pela Argentina e Paraguai e ao sul pelo Uruguai. Vários arquipélagos formam parte do território brasileiro, como o Atol das Rocas, o Arquipélago de São Pedro e São Paulo, Fernando de Noronha (o único destes habitado por civis) e Trindade e Martim Vaz.[12] O Brasil também é o lar de uma diversidade de animais selvagens, ecossistemas e de vastos recursos naturais em uma grande variedade de habitats protegidos',
            place: 'Cinema do Shopping'
        },
        {
            id: '2',
            autor:'thauan.a',
            foto_url: 'https://f7j8i5n9.stackpathcdn.com/wp-content/uploads/2016/04/Paris.jpg',
            likes: '1.236',
            descricao: 'Torre eiffel',
            place: 'Paris'
        },
        {
            id: '3',
            autor:'thauan.a',
            foto_url: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3029307:1609794989/acidente.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=5e5fab2',
            likes: '758',
            descricao: 'Dia Que meu carro capotou',
            place: 'To nem aí'
        }
    ];

    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        (async ()=>{
            let { status } = await Location.requestPermissionsAsync();


            if(status !== 'granted'){
                setErrorMsg('Permissão negada para acessar a localização');
                setLoading(false);
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(location);

        })();

    }, []);



    function renderItem({ item: post }){
        return(
            <View style={styles.post}>
                <View style={styles.postHeader}>
                    <View style={styles.userInfo}>
                        <Text style={styles.autor}>{post.autor}</Text>
                        <Text style={styles.place}>{post.place}</Text>
                    </View>
                    
                    <View style={styles.postOptions}>
                        <TouchableOpacity>
                            <Image source={options}/>
                        </TouchableOpacity>
                    </View>

                </View>

                <View>
                    <Image style={styles.foto_url} source={{uri: post.foto_url }}/>
                </View>

                <View style={styles.footer}>
                    <View style={styles.actions}>
                        <View style={styles.leftActions}>
                            <TouchableOpacity style={styles.action} >
                                <Image source={like}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action} >
                                <Image source={comment}/>
                            </TouchableOpacity>
                        </View>
                    </View>
               
                <View>
                    <Text style={styles.likes}>{post.likes} likes</Text>
                    <Text style={styles.descricao}>{post.descricao}</Text>
                </View>

                </View>
            </View>
        );
    }

    return(
        <View>
            <FlatList
                data={posts}
                keyExtractor={ (item) => item.id }
                renderItem={renderItem}
            />
        </View>

    )
    
};

const styles = StyleSheet.create({
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginBottom: 15

    },
    post: {
        marginVertical: 7,
        marginHorizontal: 10,
        backgroundColor:'#fff',
        borderRadius: 15

    },
    postOptions: {},
    userInfo: {
        marginTop:7
    },
    autor: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    place: {
        fontSize: 12,
        color: '#666' 
    },
    foto_url: {
        width: '90%',
        height: 400,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footer: {
        paddingHorizontal: 15

    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15

    },
    action: {
        marginRight: 8
    },
    leftActions: {
        flexDirection: 'row'
    },
    likes: {
        fontWeight: 'bold',
        fontSize: 12
    }, 
    descricao: {
        color: '#000',
        lineHeight: 18
    }


})

export default Feed;
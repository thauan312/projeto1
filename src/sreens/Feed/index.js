import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

import options from '../../../assets/options.png'
import like from '../../../assets/like.png'
import comment from '../../../assets/comment.png'


function Feed(){

    const posts = [
        {
            id: '1',
            autor:'thauan.a',
            foto_url: 'https://avozdaserra.com.br/sites/default/files/noticias/cinema_0.png',
            likes: '236',
            descricao: 'Dia de cinema',
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
        marginVertical: 15
    },
    postOptions: {},
    userInfo: {},
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
        width: '100%',
        height: 400
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
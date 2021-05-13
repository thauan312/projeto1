import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text, TouchableOpacity } from "react-native";


export default function upload() {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Escolher imagem</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 3,
        backgroundColor: '#f6f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#fff',
    }

})
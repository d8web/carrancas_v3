import React, { useState, useEffect } from "react";
import { Container, HeaderArea, ButtonArea, OverlayArea } from './styles'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 

import backgroundImage from '../../../assets/atrativos/coracao.jpg'

export default ({ route, navigation }) => {

    const { id, name, routers, phone, image } = route.params

    const [ myRouters, setMyRouters ] = useState(routers)

    const handleWhatsGuia = () => {
        setTimeout(() => {
            WebBrowser.openBrowserAsync('http://api.whatsapp.com/send?phone='+phone);
        }, 200);
    }

    return (
        <Container source={backgroundImage}>
            <OverlayArea>

                <HeaderArea>
                    <ButtonArea
                        title="Voltar"
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name="arrowleft" size={24} color="#333" />
                    </ButtonArea>
                </HeaderArea>
                
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={image} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }} />
                    <Text style={{ color: '#fff', marginBottom: 10 }}>{name}</Text>

                    {myRouters.map((item,key) => (
                        <View key={key} style={styles.areaGuia}>
                            <Text key={key} style={{ color: '#fff', marginBottom: 10 }}>{item.name}</Text>
                            {item.atrativos.map((item,index) => (
                                <Text key={index} style={{ color: '#fff' }}>{item.name}</Text>
                            ))}
                            <Text style={{ color: '#fff', marginTop: 10 }}>R$ {item.price},00 p/pessoa</Text>
                        </View>
                    ))}

                    <TouchableOpacity onPress={handleWhatsGuia} style={styles.guiaItem}>
                        <Text style={{ marginRight: 10, color: 'white' }}>Chamar</Text>
                        <FontAwesome name="whatsapp" size={24} color="#fff" />
                    </TouchableOpacity>

                </View>

            </OverlayArea>
        </Container>
    )
}

const styles = StyleSheet.create({
    marginTopText: {
        marginTop: 20
    },
    guiaItem: {
        marginTop: 20,
        backgroundColor: '#18d9c7',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    areaGuia: {
        width: 300,
        padding: 20,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#333'
    }
})
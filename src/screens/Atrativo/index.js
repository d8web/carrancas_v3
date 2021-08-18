import React, { useState, useContext, useEffect } from "react";
import * as WebBrowser from 'expo-web-browser';
import {
    Container,
    ImageMetade,
    Overlay,
    ButtonArea,
    InfoBottomArea,
    InfoAreaBottomText,
    PhotosArea,
    ImageBox,
    HeaderArea,
    IconArea,
    AreaInfo
} from './styles'
import { StatusBar } from 'expo-status-bar'
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { Text, StyleSheet, Image, ScrollView } from 'react-native'
import { UserContext } from '../../contexts/UserContext';
import { BlurView } from 'expo-blur';

export default ({ route, navigation }) => {

    const { dispatch:UserDispatch, state:user } = useContext(UserContext);

    const {
        id,
        name,
        type,
        price,
        location,
        images,
        mapa,
        description,
        vehicleRecomended,
        guia,
        polluted
    } = route.params;

    const [ imageSelected, setImageSelected ] = useState(0);

    const handleImageClick = (key) => {
        setImageSelected(key);
    }

    const res = user.favorites.find(item => item.id === id);

    const handleFavorite = async () => {
        let data = {id, name, type, price, image: images[0].url}

        UserDispatch({
            type: 'setFavorites',
            payload: {
                data
            }
        });
    }

    useEffect(()=>{
        
    },[])

    return (
        <Container>
            <ImageMetade
                source={images[imageSelected].url}
                borderBottomLeftRadius={40}
                borderBottomRightRadius={40}
            >
                <StatusBar style="light" />
                <Overlay>
                    <HeaderArea>    
                        <ButtonArea
                            title="Voltar"
                            onPress={() => navigation.goBack()}
                        >
                            <BlurView style={styles.glass}>
                                <AntDesign name="arrowleft" size={24} color="#fff" />
                            </BlurView>
                        </ButtonArea>
                        <ButtonArea
                            title="Voltar"
                            onPress={() => WebBrowser.openBrowserAsync(mapa)}
                        >
                            <BlurView style={styles.glass}>
                                <Feather name="map-pin" size={24} color="#fff" />
                            </BlurView>
                        </ButtonArea>
                        <IconArea onPress={handleFavorite}>
                            <BlurView style={styles.glass}>
                                {res === undefined &&
                                    <AntDesign name="hearto" size={24} color="#fff" />
                                }
                                {res &&
                                    <AntDesign name="heart" size={24} color="red" />
                                }
                            </BlurView>
                        </IconArea>
                    </HeaderArea>
                    <InfoBottomArea>
                        <InfoAreaBottomText>
                            <Text style={{ color: '#fff', fontSize: 18 }}>R$ {price},00</Text>
                            <Text style={{ color: '#fff', fontSize: 18 }}>{location}</Text>
                        </InfoAreaBottomText>
                        <BlurView style={styles.imageArea}>
                            <PhotosArea>
                                {images.map((item, key)=>(
                                    <ImageBox key={key} onPress={()=>handleImageClick(key)}>
                                        <Image source={item.url} style={styles.imageAtrativo} />
                                    </ImageBox>
                                ))}
                            </PhotosArea>
                        </BlurView>
                    </InfoBottomArea>
                </Overlay>
            </ImageMetade>

            <ScrollView showsVerticalScrollIndicator={false}>
                <AreaInfo>
                    <Text style={styles.text}>{type} {name}</Text>
                    <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 16 }}>{description}</Text>
                    <Text style={{ marginTop: 20, fontFamily: 'Poppins_500Medium' }}>
                        Véiculo recomendado: {vehicleRecomended}
                    </Text>
                    <Text style={{ marginTop: 20, fontFamily: 'Poppins_500Medium' }}>
                        Necessário um Guia: {guia ? 'Sim' : 'Não'}
                    </Text>
                    {polluted &&
                        <Text style={{ marginTop: 10, fontFamily: 'Poppins_500Medium', color: '#00dabe' }}>
                            Cachoeira Imprópria para banho!
                        </Text>
                    }
                    <Text style={{ marginTop: 10, fontFamily: 'Poppins_500Medium' }}>
                        Em caso de acidentes ligue para o hospital São Vicente de Paulo (35) 3327-1077
                    </Text>
                    <Text style={{ marginTop: 10, fontFamily: 'Poppins_500Medium' }}>
                        Observação: Algumas cachoeiras encontram-se em locais mais remotos, a precisão do google maps não é 100%, certifique-se que conhece o território, ou contrate os serviços de um guia local.
                    </Text>
                </AreaInfo>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 20,
        color: "#00dabe",
        marginBottom: 10
    },
    imageAtrativo: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        borderColor: 'rgba(255,255,255,0.4)',
        borderWidth: 2,
    },
    glass: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderColor: 'rgba(255,255,255,0.4)',
        borderRadius: 25,
        borderWidth: 2,
    },
    imageArea: {
        borderRadius: 10,
        marginTop: 10,
        borderColor: 'rgba(255,255,255,0.4)',
        borderRadius: 25,
        borderWidth: 2,
    }
})
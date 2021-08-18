import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView, View, SafeAreaView, FlatList, Image } from 'react-native';
import {
    Container,
    OverlayArea,
    TextGreen,
    TextBoldBig,
    FlatItem,
    FlatView,
    GuiaInfo,
    ImageGuia,
    ButtonGuia,
    PousadaItem,
    PousadaImage,
} from './styles';

import { StatusBar } from "expo-status-bar";
import { BlurView } from 'expo-blur';
import * as WebBrowser from 'expo-web-browser';

import {
    Categorias as CategoriasArray,
    Atrativos as AtrativosArray,
    Guias,
    Fauna,
    Pousadas,
    Alimentacao,
    Campings,
    Agencias,
    HospitalAndPharmacy,
} from './Data';

// Components
import History from "../../components/History";
import Atrativo from "../../components/Atrativo";
import ItemFauna from '../../components/Fauna';

import backgroundImage from '../../../assets/atrativos/coracao.jpg'

// Hooks import
import { useNavigation } from '@react-navigation/native'

const CategoryItem = ({ item, onPress, backgroundColor, textColor }) => (
    <FlatView onPress={onPress} style={[backgroundColor, {flexDirection: 'row', alignItems: 'center'}]}>
        <Image source={item.icon} style={{ width: 30, height: 30, marginRight: 10 }} />
        <Text style={[styles.textCategory, textColor]}>{item.title}</Text>
    </FlatView>
);

export default () => {

    const navigation = useNavigation();

    const [ categorySelected, setcategorySelected ] = useState('1');
    const [ categories, setCategories ] = useState([]);

    const [ attractives, setAttractives ] = useState([]);

    const renderCategory = ({ item }) => {
        const backgroundColor = item.id === categorySelected ? "#fff" : "#333";
        const color = item.id === categorySelected ? 'black' : 'white';
    
        return (
            <CategoryItem
                item={item}
                onPress={() => setcategorySelected(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    const renderItem = ({ item }) => (
        <Atrativo
            title={item.title}
            image={item.image}
            onPress={() => {
                navigation.navigate('Atrativo', {
                    id: item.id,
                    image: item.moreImages[0].url,
                    name: item.name,
                    type: item.type,
                    price: item.price,
                    location: item.location,
                    images: item.moreImages,
                    mapa: item.mapa,
                    description: item.description,
                    vehicleRecomended: item.vehicleRecomended,
                    guia: item.guia,
                    polluted: item.polluted
                });
            }}
        />
    );

    const renderFauna = ({ item }) => (
        <ItemFauna
            title={item.name}
            image={item.image}
        />
    )

    const handleGo = (mapa) => {
        WebBrowser.openBrowserAsync(mapa);
    }

    useEffect(()=>{
        setCategories(CategoriasArray);
        setAttractives(AtrativosArray);
    }, [categories]);

    return (
        <Container source={backgroundImage}>
            <OverlayArea>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <StatusBar style="light" />

                    <TextGreen style={styles.fontTitle}>Olá Daniel</TextGreen>
                    <TextBoldBig style={styles.textBig}>Qual lugar gostaria</TextBoldBig>
                    <TextBoldBig style={styles.textBig}>de ir hoje?</TextBoldBig>

                    <FlatItem
                        data={categories}
                        renderItem={renderCategory}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        height={50}
                        alignItems="center"
                    />
                    
                    {categorySelected === '1' &&
                        <SafeAreaView style={{ marginTop: 40, flex: 1 }}>
                            <FlatList
                                data={attractives}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                horizontal={true}
                            />
                        </SafeAreaView>
                    }

                    {categorySelected === '2' &&
                        <History/>
                    }

                    {categorySelected === '3' &&
                        <ScrollView style={{ marginTop: 40, flex: 1 }}>
                            <FlatList
                                data={Fauna}
                                renderItem={renderFauna}
                                keyExtractor={item => item.id}
                                horizontal={true}
                            />
                        </ScrollView>
                    }

                    {categorySelected === '4' &&
                        <ScrollView style={{ marginTop: 40, height: 440 }} showsVerticalScrollIndicator={false}>   
                            {Guias.map((item, key) => (
                                <GuiaInfo key={key}
                                    onPress={() => {
                                        navigation.navigate('Guias', {
                                            id: item.id,
                                            routers: item.routers,
                                            name: item.name,
                                            phone: item.phone,
                                            image: item.image,
                                        });
                                    }}
                                >
                                    <BlurView style={styles.glass}>
                                        <ImageGuia source={item.image} />
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={styles.textButton}>{item.name}</Text>
                                            <Text style={styles.textButton}>6 Roteiros</Text>
                                            <ButtonGuia
                                                onPress={() => {
                                                    navigation.navigate('Guias', {
                                                        id: item.id,
                                                        routers: item.routers,
                                                        name: item.name,
                                                        phone: item.phone,
                                                        image: item.image,
                                                    });
                                                }}
                                            >
                                                <Text style={styles.textButton}>Ver Roteiros</Text>
                                            </ButtonGuia>
                                        </View>
                                    </BlurView>
                                </GuiaInfo>
                            ))}
                        </ScrollView>
                    }

                    {categorySelected === '5' &&
                        <ScrollView style={{ marginTop: 40, height: 440 }} showsVerticalScrollIndicator={false}>
                            {Pousadas.map((item,key)=>(
                                <PousadaItem
                                    key={key}
                                    onPress={()=>handleGo(item.mapa)}
                                >
                                    <BlurView style={styles.glass}>
                                        <PousadaImage source={{ uri: item.image }} />
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.textWhiteGlass}>{item.name}</Text>
                                            <Text style={styles.textWhiteGlass}>{item.location}</Text>
                                            <Text style={styles.textWhiteGlass}>{item.restaurante ? 'Tem Restaurante' : 'Não Tem Restaurante'}</Text>
                                        </View>
                                    </BlurView>
                                </PousadaItem>
                            ))}
                        </ScrollView>
                    }

                    {categorySelected === '6' &&
                        <ScrollView style={{ marginTop: 40, height: 440 }} showsVerticalScrollIndicator={false}>
                            {Alimentacao.map((item,key)=>(
                                <PousadaItem
                                    key={key}
                                    onPress={()=>handleGo(item.mapa)}
                                >
                                    <BlurView style={styles.glass}>
                                        <PousadaImage source={{ uri: item.image }} />
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.textWhiteGlass}>{item.name}</Text>
                                            <Text style={styles.textWhiteGlass}>{item.location}</Text>
                                            <Text style={styles.textWhiteGlass}>{item.delivery ? 'Tem Delivery' : 'Não tem Delivery'}</Text>
                                        </View>
                                    </BlurView>
                                </PousadaItem>
                            ))}
                        </ScrollView>
                    }

                    {categorySelected === '7' &&
                        <ScrollView style={{ marginTop: 40, height: 440 }} showsVerticalScrollIndicator={false}>
                            {Campings.map((item,key)=>(
                                <PousadaItem
                                    key={key}
                                    onPress={()=>handleGo(item.mapa)}
                                >
                                    <BlurView style={styles.glass}>
                                        <PousadaImage source={{ uri: item.image }} />
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.textWhiteGlass}>{item.name}</Text>
                                            <Text style={styles.textWhiteGlass}>{item.location}</Text>
                                        </View>
                                    </BlurView>
                                </PousadaItem>
                            ))}
                        </ScrollView>
                    }

                    {categorySelected === '8' &&
                        <ScrollView style={{ marginTop: 40, height: 440 }} showsVerticalScrollIndicator={false}>
                            {Agencias.map((item,key)=>(
                                <PousadaItem
                                    key={key}
                                    onPress={()=>handleGo(item.mapa)}
                                >
                                    <BlurView style={styles.glass}>
                                        <PousadaImage source={{ uri: item.image }} />
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.textWhiteGlass}>{item.name}</Text>
                                            <Text style={styles.textWhiteGlass}>{item.location}</Text>
                                        </View>
                                    </BlurView>
                                </PousadaItem>
                            ))}
                        </ScrollView>
                    }

                    {categorySelected === '9' &&
                        <ScrollView style={{ marginTop: 40, height: 440 }} showsVerticalScrollIndicator={false}>
                            {HospitalAndPharmacy.map((item,key)=>(
                                <PousadaItem
                                    key={key}
                                    onPress={()=>handleGo(item.mapa)}
                                >
                                    <BlurView style={styles.glass}>
                                        <PousadaImage source={{ uri: item.image }} />
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.textWhiteGlass}>{item.name}</Text>
                                            <Text style={styles.textWhiteGlass}>{item.location}</Text>
                                        </View>
                                    </BlurView>
                                </PousadaItem>
                            ))}
                        </ScrollView>
                    }
                    
                </ScrollView>
            </OverlayArea>

        </Container>
    );
}

const styles = StyleSheet.create({
    boldText: {
        fontFamily: 'Poppins_700Bold',
    },
    text: {
        fontFamily: 'Poppins_400Regular',
    },
    textCategory: {
        fontFamily: 'Poppins_500Medium',
        marginRight: 5
    },
    textInfo: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        textAlign: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Poppins_500Medium'
    },
    button: {
        width: '100%',
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 10
    },
    fontTitle: {
        fontFamily: 'Poppins_400Regular'
    },
    textBig: {
        fontFamily: 'Poppins_600SemiBold'
    },
    title: {
        fontSize: 18,
        color: '#fff'
    },
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10
    },
    cardText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Poppins_500Medium'
    },
    glass: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        borderColor: 'rgba(255,255,255,0.4)',
        borderRadius: 20,
        borderWidth: 2,
    },
    textWhiteGlass: {
        fontSize: 15,
        color: '#fff',
    }
});
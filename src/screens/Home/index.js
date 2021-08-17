import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView, View, SafeAreaView, FlatList } from 'react-native';
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
    FaunaItem,
    AnimalImage,
    PousadaItem,
    PousadaImage,
    FlatAreaImage,
    FlatImage
} from './styles';

import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import {
    Categorias as CategoriasArray,
    Atrativos as AtrativosArray,
    Guias,
    Fauna,
    Pousadas,
    Alimentacao
} from './Data';

import backgroundImage from '../../../assets/atrativos/coracao.jpg'

// Hooks import
import { useNavigation } from '@react-navigation/native'

const CategoryItem = ({ item, onPress, backgroundColor, textColor }) => (
    <FlatView onPress={onPress} style={[backgroundColor, {flexDirection: 'row'}]}>
        <MaterialIcons name="park" size={24} color="#18d9c7" />
        <Text style={[styles.textCategory, textColor]}>{item.title}</Text>
    </FlatView>
);

const Item = ({ title, image, onPress }) => (
    <FlatAreaImage onPress={onPress}>
        <FlatImage source={image} borderRadius={10}>
            <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={styles.background}>
                <Text style={styles.cardText}>{title}</Text>
            </LinearGradient>
        </FlatImage>
    </FlatAreaImage>
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
        <Item
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
                    guia: item.guia
                });
            }}
        />
    );

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
                        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                            <Text style={styles.historyText}>
                                Andar pelas ruas de Carrancas ou de bike pelas redondezas, que incluem fazendas históricas e marcos da Estrada Real é passeio obrigatório para quem vem aqui. A cidade foi fundada em meio ao ciclo do ouro e as viagens desde Parati trouxeram bandeirantes e as suas famílias, que fixaram moradia e criaram um povoado. Eram paulistas da capital e de Taubaté que por volta de 1720 encontraram-se às margens do Rio Grande em Minas Gerais.
                            </Text>
                            <Text style={styles.historyText}>
                                Apesar de grandes rivais na disputa pelas terras e pelo ouro, juntos se instalaram nas terras onde hoje está situado o município de Carrancas. Empolgados com o potencial fértil de suas terras e com a possibilidade de encontrar ouro em grande quantidade, decidiram conquistar o local iniciando um povoado com suas famílias, escravos e amigos. Em 1721 foi edificada uma capela em homenagem a Nossa Senhora da Conceição ficando então conhecido o lugar como Nossa Senhora do Rio Grande. 
                            </Text>
                        </ScrollView>
                    }

                    {categorySelected === '3' &&
                        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                            {Fauna.map((item,key)=>(
                                <FaunaItem key={key}>
                                    <AnimalImage source={{ uri: item.image }} />
                                    <Text>{item.name}</Text>
                                    <Text>{item.cientificName}</Text>
                                </FaunaItem>
                            ))}
                        </ScrollView>
                    }

                    {categorySelected === '4' &&
                        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
                                    <ImageGuia source={{ uri: item.image }} />
                                    <Text style={styles.textButton}>{item.name}</Text>
                                    <ButtonGuia>
                                        <Text style={styles.textButton}>Ver Roteiros</Text>
                                    </ButtonGuia>
                                </GuiaInfo>
                            ))}
                        </ScrollView>
                    }

                    {categorySelected === '5' &&
                        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                            {Pousadas.map((item,key)=>(
                                <PousadaItem key={key}>
                                    <PousadaImage source={{ uri: item.image }} />
                                    <View style={{ flex: 1 }}>
                                        <Text>{item.name}</Text>
                                        <Text>{item.location}</Text>
                                        <Text>{item.restaurante ? 'Tem Restaurante' : 'Não Tem Restaurante'}</Text>
                                    </View>
                                </PousadaItem>
                            ))}
                        </ScrollView>
                    }

                    {categorySelected === '6' &&
                        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                            {Alimentacao.map((item,key)=>(
                                <PousadaItem
                                    key={key}
                                    onPress={() => {
                                        navigation.navigate('Alimentacao', {
                                            id: item.id,
                                            name: item.name,
                                            type: item.type
                                        });
                                    }}
                                >
                                    <PousadaImage source={{ uri: item.image }} />
                                    <View style={{ flex: 1 }}>
                                        <Text>{item.name}</Text>
                                        <Text>{item.location}</Text>
                                        <Text>{item.delivery ? 'Tem Delivery' : 'Não tem Delivery'}</Text>
                                    </View>
                                </PousadaItem>
                            ))}
                        </ScrollView>
                    }

                    {categorySelected === '8' &&
                        <Text style={{ color: '#fff' }}>Mais informações</Text>
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
        color: '#333',
        fontSize: 14,
        fontFamily: 'Poppins_500Medium'
    },
    historyText: {
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        marginBottom: 30,
        lineHeight: 26
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
    scrollView: {
        marginTop: 40,
        height: 440
    },
});
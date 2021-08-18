import React, { useState, useEffect } from "react";
import {
    Container,
    OverlayArea,
    InputArea,
    InputItem,
    InputButton,
    AreaItemSearch,
    ItemArea,
    ImageSearch
} from './styles'
import { Text, ScrollView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { BlurView } from 'expo-blur';

// Hooks import
import { useNavigation } from '@react-navigation/native'

import { Atrativos } from '../Home/Data'

import backgroundImage from '../../../assets/atrativos/coracao.jpg'

export default () => {

    const navigation = useNavigation()

    const [ search, setSearch ] = useState('')
    const [ list, setList ] = useState([])

    const handleSearch = () => {
       // Ordenar... se quiser 
    }

    useEffect(() => {
        if(search === '') {
            setList(Atrativos)
        } else {
            setList(
                Atrativos.filter((item) => (item.title.toLowerCase().indexOf(search.toLowerCase()) > -1))
            );
        }
    }, [search])

    return (
        <Container source={backgroundImage}>
            <OverlayArea>
                <InputArea>
                    <InputItem
                        placeholder="Digite um termo"
                        placeholderTextColor="#333"
                        value={search}
                        onChangeText={t=>setSearch(t)}
                    />
                    <InputButton onPress={handleSearch}>
                        <Feather name="search" size={26} color="#333" />
                    </InputButton>
                </InputArea>
                
                <AreaItemSearch>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {list.map((item, key) =>(
                            <ItemArea
                                key={key}
                                onPress={() => {
                                    navigation.navigate('Atrativo', {
                                        id: item.id,
                                        image: item.moreImages[0].url,
                                        name: item.name,
                                        type: item.type,
                                        price: item.price,
                                        location: item.location,
                                        images: item.moreImages
                                    });
                                }}
                            >
                                <BlurView style={styles.glass}>
                                    <ImageSearch source={ item.image }/>
                                    <Text style={styles.textMy}>
                                        {item.title}
                                    </Text>
                                </BlurView>
                            </ItemArea>
                        ))}
                    </ScrollView>
                </AreaItemSearch>
            </OverlayArea>
        </Container>
    );
}

const styles = StyleSheet.create({
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
    textMy: {
        marginLeft: 20,
        color: '#fff',
        fontFamily: 'Poppins_500Medium',
        fontSize: 16
    }
})
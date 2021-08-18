import React, { useContext } from "react";
import { Container, OverlayArea, FavoriteArea, ImageFavorite } from './styles'
import { Text, StyleSheet, View } from 'react-native'
import { BlurView } from 'expo-blur';

import { UserContext } from '../../contexts/UserContext'
import backgroundImage from '../../../assets/atrativos/coracao.jpg'

export default () => {
    const { state:user } = useContext(UserContext)

    return (
        <Container source={backgroundImage}>
            <OverlayArea>
                <Text style={styles.myText}>
                    {user.favorites.length === 0 ? 'Nenhum favorito' : 'Meus Favoritos'}
                </Text>
                {user.favorites.map((item,key)=>(
                    <FavoriteArea key={key}>
                        <BlurView style={styles.glass}>
                            <ImageFavorite source={item.image} />
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.myText}>{item.type}</Text>
                                <Text style={styles.myText}>{item.name}</Text>
                            </View>
                        </BlurView>
                    </FavoriteArea>
                ))}
            </OverlayArea>
        </Container>
    )
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
    myText: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        color: '#fff'
    }
})
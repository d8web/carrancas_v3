import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FlatAreaImage = styled.TouchableOpacity`
    width: 300px;
    height: 412px;
`

const FlatImage = styled.ImageBackground`
    flex: 1;
    height: 100%;
    margin-right: 20px;
`

const TextCard = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'Poppins_500Medium';
`

const Atrativo = ({title, image}) => {
    return (
        <FlatAreaImage>
            <FlatImage source={{ uri: image}} borderRadius={10}>
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.7)']}
                    style={styles.background}>
                    <TextCard>{title}</TextCard>
                </LinearGradient>
            </FlatImage>
        </FlatAreaImage>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10
    }
})

export default Atrativo
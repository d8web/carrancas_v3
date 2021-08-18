import styled from "styled-components/native";

export const Container = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const OverlayArea = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.85);
    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
    align-items: center;
`

export const FavoriteArea = styled.TouchableOpacity`
    width: 100%;
    background-color: transparent;
    margin: 10px 0px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`

export const ImageFavorite = styled.Image`
    width: 160px;
    height: 160px;
    border-radius: 10px;
    margin-right: 10px;
    border-color: rgba(255,255,255,0.5);
    border-width: 2px;
`